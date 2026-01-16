"use client"

import { useState } from "react"
import { Button, Modal } from "@/components"
import { HabitService } from "../../services"

export function AddHabitButton(_: {}) {
    const [active, setActive] = useState(false)

    const onToggle = () => {
        setActive(!active)
    }

    const onSubmit = (value: string) => {
        if (value.trim().length > 0) {
            onToggle()
            HabitService.createHabit({ name: value })
        }
    }

    return (
        <div>
            <Button
                variant="primary"
                className="h-full w-full text-xs sm:text-sm"
                onClick={onToggle}
            >
                + New Habit
            </Button>

            {active && (
                <Modal
                    title="Create new habit"
                    description="Enter habit name"
                    placeholder=".."
                    onSubmit={onSubmit}
                    onCancel={onToggle}
                />
            )}
        </div>
    )
}
