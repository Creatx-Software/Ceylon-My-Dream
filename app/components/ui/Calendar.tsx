"use client"

import * as React from "react"
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
    <div className={cn("p-3 pointer-events-auto", className)}>
      <input
        type={mode === "single" ? "date" : "text"}
        value={mode === "single" && selected ? (selected as Date).toISOString().split('T')[0] : ""}
        onChange={(e) => {
          if (mode === "single" && onSelect) {
            const date = new Date(e.target.value);
            onSelect(date);
          }
        }}
        className="w-full p-2 border rounded-md"
        {...props}
      />
    </div>
  )
}
