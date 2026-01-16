"use client"

import { getDateDayCharacter, isSameDate } from "@/utils/dates"
import { twCn } from "@/utils/styles"

interface HabitHeaderDateProps {
    date: Date
}

export function HabitHeaderDate({ date }: HabitHeaderDateProps) {
    const today = new Date()
    const isToday = isSameDate(today, date)

    return (
        <th
            className={twCn(
                "relative h-fit w-fit text-center text-gray-400 md:w-10",
                isToday
                    ? "border-white border-x-2 border-t-2 font-medium text-white"
                    : "border border-zinc-800 font-normal",
            )}
        >
            <div className="text-xs">{getDateDayCharacter(date)}</div>
            <div className="text-xs md:text-sm">{date.getDate()}</div>
        </th>
    )
}
