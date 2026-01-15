"use client"

import { useLocalDate } from "@/hooks"
import { normalizeDate } from "@/utils/dates"
import { twCn } from "@/utils/styles"
import { HabitService } from "../services"
import type { HabitStruct } from "../types"

interface HabitItemProps {
    habit: HabitStruct
    isLastRow: boolean
    date: Date
}

export function HabitItem({ habit, date, isLastRow }: HabitItemProps) {
    const today = useLocalDate()

    const normalizedDate = normalizeDate(date)
    const dateId = normalizedDate.toISOString()

    const isCompleted = habit.completions[dateId] === true
    const isToday = today.getDate() === date.getDate()

    const onClick = () => {
        if (isCompleted) {
            HabitService.removeHabitCompletion(habit.id, date)
        } else {
            HabitService.addHabitCompletion(habit.id, date)
        }
    }

    return (
        <td
            style={{
                backgroundColor: isCompleted
                    ? habit.color
                    : "var(--color-zinc-900)",
            }}
            className={twCn(
                "h-7 w-10 border border-zinc-800 transition-all duration-300",
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
