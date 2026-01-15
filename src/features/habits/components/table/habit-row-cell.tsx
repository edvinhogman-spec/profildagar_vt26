"use client"

import { twCn } from "@/utils/styles"
import type { HabitHandle } from "../../services"

interface HabitRowCellProps {
    habit: HabitHandle
    isLastRow: boolean
    date: Date
}

export function HabitRowCell({ habit, date, isLastRow }: HabitRowCellProps) {
    const today = new Date()

    const isCompleted = habit.hasCompletion(date)
    const isToday = today.getDate() === date.getDate()

    const onClick = () => {
        if (isCompleted) {
            habit.removeCompletion(date)
        } else {
            habit.addCompletion(date)
        }
    }

    return (
        <td
            style={{
                backgroundColor: isCompleted
                    ? habit.getColor()
                    : "var(--color-zinc-900)",
            }}
            className={twCn(
                "h-7 w-10 border border-zinc-800 transition-[background-color,opacity] duration-300",
                isToday ? "border-x-2! border-x-white" : undefined,
                isToday && isLastRow ? "border-b-2 border-b-white" : undefined,
            )}
        >
            <button
                type="button"
                onClick={onClick}
                className="h-full w-full cursor-pointer"
            ></button>
        </td>
    )
}
