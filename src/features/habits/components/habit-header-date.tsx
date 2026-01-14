"use client"

import { useLocalDate } from "@/hooks"
import { twCn } from "@/utils/styles"

interface HabitHeaderDateProps {
    date: Date
}

export function HabitHeaderDate({ date }: HabitHeaderDateProps) {
    const today = useLocalDate()
    const isToday = date.getDate() === today.getDate()

    return (
        <th
            className={twCn(
                "relative h-10 w-10 text-center font-medium",
                isToday
                    ? "border-2 border-green-400 text-green-300"
                    : "border border-zinc-800",
            )}
        >
            {date.getDate()}
        </th>
    )
}
