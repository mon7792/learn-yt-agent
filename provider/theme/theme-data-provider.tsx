'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProviderProps, useTheme } from 'next-themes'

import setGlobalTheme, { ThemeVariant } from '@/lib/themes'

type ThemeData = {
  themeVariant: ThemeVariant
  setThemeVariant: (themeVariant: ThemeVariant) => void
}

const ThemeDataContext = createContext<ThemeData>({} as ThemeData)

const ThemeDataProvider = ({ children }: ThemeProviderProps) => {
  const getSavedThemeType = () => {
    try {
      if (typeof window === 'undefined') {
        return 'Rose' as ThemeVariant
      }
      return (
        (window.localStorage.getItem('themeType') as ThemeVariant) || 'Rose'
      )
    } catch (error) {
      console.error(error)
      return 'Rose' as ThemeVariant
    }
  }

  const [themeVariant, setThemeVariant] = useState<ThemeVariant>('Zinc')
  const [isMounted, setIsMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setThemeVariant(getSavedThemeType())
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      window.localStorage.setItem('themeVariant', themeVariant)
      setGlobalTheme(theme as 'light' | 'dark', themeVariant)
    }
  }, [themeVariant, theme, isMounted])

  if (!isMounted) {
    return null
  }

  return (
    <ThemeDataContext.Provider value={{ themeVariant, setThemeVariant }}>
      {children}
    </ThemeDataContext.Provider>
  )
}

const useThemeData = () => {
  const context = useContext(ThemeDataContext)
  if (!context) {
    throw new Error('useThemeData must be used within a ThemeDataProvider')
  }
  return context
}

export { ThemeDataProvider, useThemeData }
