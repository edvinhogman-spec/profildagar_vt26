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
                "relative h-10 w-10 text-center text-gray-400",
                isToday
                    ? "border-white border-x-2 border-t-2 font-medium text-white"
                    : "border border-zinc-800 font-normal",
            )}
        >
            {date.getDate()}
        </th>
    )
}
