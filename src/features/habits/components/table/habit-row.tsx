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
    const relevantCompletions = new Set()

    for (const date of dates) {
        if (habit.hasCompletion(date)) {
            relevantCompletions.add(date)
        }
    }

    const totalAchieved = relevantCompletions.size
    const totalDays = dates.length
    const totalPassedDays = dates.filter((other) => other < today).length

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
                    totalAchieved >= totalPassedDays
                        ? "text-green-400"
                        : undefined,
                )}
            >
                {totalAchieved}/{totalDays}
            </td>
        </tr>
    )
}
