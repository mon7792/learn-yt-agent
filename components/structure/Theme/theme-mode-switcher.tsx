'use client'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui/toggle-group'

const ThemeModeToggleButton = ({
  theme,
  setTheme,
}: {
  theme: string
  setTheme: (theme: string) => void
}) => {
  return (
    <div className="flex items-center space-x-2">
      <ToggleGroup type="single" value={theme} onValueChange={setTheme}>
        <ToggleGroupItem value="light" aria-label="Toggle light">
          <Sun className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" aria-label="Toggle dark">
          <Moon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

const ThemeModeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // WIP: think about a better way to handle this:
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return <ThemeModeToggleButton theme="system" setTheme={() => {}} />

  return (
    <ThemeModeToggleButton
      theme={resolvedTheme || 'dark'}
      setTheme={setTheme}
    />
  )
}

export { ThemeModeSwitcher }
