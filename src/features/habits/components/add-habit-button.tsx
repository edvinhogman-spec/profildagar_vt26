"use client"

import { Button } from "@/components"

export function AddHabitButton(_: {}) {
    const onClick = () => {
        console.log("hejsan!")
    }

    return (
        <Button variant="primary" className="h-10 w-42" onClick={onClick}>
            + New Habit
        </Button>
    )
}
