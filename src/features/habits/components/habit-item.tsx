"use client"

import { HabitService } from "../services"
import type { HabitStruct } from "../types"

interface HabitItemProps {
    habit: HabitStruct
    date: Date
}

export function HabitItem({ habit, date }: HabitItemProps) {
    const normalizedDate = new Date(date)
    normalizedDate.setHours(0, 0, 0, 0)
    const dateId = normalizedDate.toISOString()
    const isCompleted = habit.completions[dateId] === true

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
            className="h-7 w-10 border border-zinc-800 transition-all duration-300"
        >
            <button
                type="button"
                onClick={onClick}
                className="h-full w-full cursor-pointer"
            ></button>
        </td>
    )
}
