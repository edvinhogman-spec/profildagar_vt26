import { useEffect, useState } from "react"
import { HabitService } from "../services"
import type { HabitStruct } from "../types"

export function useHabits() {
    const [state, setState] = useState<HabitStruct[]>([])

    useEffect(() => {
        const disconnect = HabitService.onHabitUpdated.connect(() => {
            setState(HabitService.getHabits())
        })
        setState(HabitService.getHabits())
        return disconnect
    }, [])

    return state
}
