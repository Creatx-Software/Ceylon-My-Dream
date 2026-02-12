"use client"

import * as React from "react"
import { DayPicker } from "react-day-picker"
import { cn } from "../../lib/utils"

export interface CalendarProps {
  mode?: "single"
  selected?: Date | Date[] | undefined
  onSelect?: (date: Date | Date[] | undefined) => void
  initialFocus?: boolean
  className?: string
}

export const Calendar: React.FC<CalendarProps> = ({
  mode = "single",
  selected,
  onSelect,
  initialFocus = false,
  className,
  ...props
}) => {
  return (
    <DayPicker
      mode={mode}
      selected={selected as Date}
      onSelect={onSelect}
      className={cn(
        "p-3 pointer-events-auto",
        "rdp",
        className
      )}
      {...props}
    />
  )
}
