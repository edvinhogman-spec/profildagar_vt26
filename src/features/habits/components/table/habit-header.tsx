"use client"

import { HabitHeaderDate } from "./habit-header-date"

interface HabitHeaderProps {
    dates: Date[]
}

export function HabitHeader({ dates }: HabitHeaderProps) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    return (
        <tr>
            <th className="h-fit w-25 border border-zinc-800 px-2 md:w-50">
                <p className="text-center text-sm">Habits</p>
            </th>

            {dates.map((date) => (
                <HabitHeaderDate key={date.toISOString()} date={date} />
            ))}

            <th className="h-fit w-25 border border-zinc-800 px-2 md:w-50">
                <p className="text-center text-sm">Done</p>
            </th>
        </tr>
    )
}
