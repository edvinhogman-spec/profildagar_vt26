"use client"

import { useState } from "react"
import { Icon, Modal } from "@/components"
import type { HabitHandle } from "../../services"

interface RenameHabitButtonProps {
    habit: HabitHandle
}

export function RenameHabitButton({ habit }: RenameHabitButtonProps) {
    const [active, setActive] = useState(false)

    const onToggle = () => {
        setActive(!active)
    }

    const onSubmit = (value: string) => {
        if (value.trim().length > 0) {
            onToggle()
            habit.rename(value)
        }
    }

    return (
        <div className="h-5 w-5">
            <button type="button" className="h-full w-full" onClick={onToggle}>
                <Icon
                    variant="edit"
                    alt="Rename habit"
                    className="h-full w-full fill-gray-400 transition-all duration-300 hover:fill-white"
                />
            </button>

            {active && (
                <Modal
                    title="Rename habit"
                    description="Enter habit name"
                    placeholder={habit.data.name}
                    onSubmit={onSubmit}
                    onCancel={onToggle}
                />
            )}
        </div>
    )
}
