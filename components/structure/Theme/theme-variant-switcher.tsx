'use client'
import { useState, useEffect, useCallback } from 'react'

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Select } from '@/components/ui/select'
import { useThemeData } from '@/provider/theme/theme-data-provider'
import { themes, ThemeVariant } from '@/lib/themes'

const ThemeVariantSwitcher = () => {
  const { setThemeVariant } = useThemeData()
  const [mounted, setMounted] = useState(false)

  const handleThemeChange = useCallback(
    (value: string) => {
      setThemeVariant(value as ThemeVariant)
    },
    [setThemeVariant],
  )

  // WIP: think about a better way to handle this:
  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) return <></>

  return (
    <Select onValueChange={handleThemeChange}>
      <SelectTrigger>
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(themes).map(theme => (
          <SelectItem key={theme} value={theme}>
            {theme}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export { ThemeVariantSwitcher }
