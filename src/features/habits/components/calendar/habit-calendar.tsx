"use client"

import { Button } from "@/components"
import { getDateMonthString } from "@/utils/dates"

interface HabitCalendarProps {
    onClick: (direction: number) => void
    dates: Date[]
}

export function HabitCalendar({ onClick, dates }: HabitCalendarProps) {
    const monday = dates[0]
    const dateStr = `${getDateMonthString(monday)}, ${monday.getFullYear()}`

    return (
        <div className="flex items-center justify-center gap-3">
            <Button
                className="aspect-square w-10 bg-background"
                onClick={() => onClick(-1)}
            >
                {"<"}
            </Button>

            <p className="w-30 text-center">{dateStr}</p>

            <Button
                className="aspect-square w-10 bg-background"
                onClick={() => onClick(1)}
            >
                {">"}
            </Button>
        </div>
    )
}
