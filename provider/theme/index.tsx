'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeDataProvider } from './theme-data-provider'
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      enableColorScheme
    >
      <ThemeDataProvider>
        {children}
      </ThemeDataProvider>
    </NextThemesProvider>
  )
}
