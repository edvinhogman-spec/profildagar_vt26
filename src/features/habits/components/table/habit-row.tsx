"use client"

import { twCn } from "@/utils/styles"
import type { HabitHandle } from "../../services"
import { HabitRowCell } from "./habit-row-cell"
import { HabitRowLabel } from "./habit-row-label"

interface HabitRowProps {
    habit: HabitHandle
    isLastRow: boolean
    dates: Date[]
}

export function HabitRow({ habit, dates, isLastRow }: HabitRowProps) {
    const today = new Date()

    const completedDays = dates.filter((date) => habit.hasCompletion(date))
    const passedDays = dates.filter((other) => other < today)

    const totalCompletedDays = completedDays.length
    const totalPassedDays = passedDays.length
    const totalDays = dates.length

    return (
        <tr>
            <HabitRowLabel habit={habit} />

            {dates.map((date) => (
                <HabitRowCell
                    key={date.toISOString()}
                    habit={habit}
                    date={date}
                    isLastRow={isLastRow}
                />
            ))}

            <td
                className={twCn(
                    "h-7 w-40 border border-zinc-800 text-center text-gray-400 text-xs",
                    totalCompletedDays >= totalPassedDays
                        ? "text-green-400"
                        : undefined,
                )}
            >
                {totalCompletedDays}/{totalDays}
            </td>
        </tr>
    )
}
