"use client"

import { Icon } from "@/components"
import type { HabitHandle } from "../../services"

interface DeleteHabitButtonProps {
    habit: HabitHandle
}

export function DeleteHabitButton({ habit }: DeleteHabitButtonProps) {
    return (
        <button
            type="button"
            className="aspect-square w-5"
            onClick={() => habit.delete()}
        >
            <Icon
                variant="delete"
                alt="Delete habit"
                className="h-full w-full fill-gray-400 transition-all duration-300 hover:fill-red-500"
            />
        </button>
    )
}
