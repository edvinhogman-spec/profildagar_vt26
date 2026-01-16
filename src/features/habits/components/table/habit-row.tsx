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

    const isCurrentWeek = today > dates[0]

    return (
        <tr className="bg-zinc-950">
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
                    "h-fit w-fit border border-zinc-800 text-center text-gray-400 text-xs",
                    isCurrentWeek && totalCompletedDays >= totalPassedDays
                        ? "text-green-400"
                        : undefined,
                )}
            >
                {totalCompletedDays}/{totalDays}
            </td>
        </tr>
    )
}
