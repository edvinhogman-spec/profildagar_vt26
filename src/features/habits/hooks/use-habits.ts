import { useEffect, useState } from "react"
import { type HabitHandle, HabitService } from "../services"

export function useHabits() {
    const [state, setState] = useState<HabitHandle[]>([])

    useEffect(() => {
        // om jag gör detta i constructor så blir det cyclic reference error
        HabitService.onInit()

        const disconnect = HabitService.onUpdate.connect(() => {
            setState(HabitService.getHabits())
        })
        setState(HabitService.getHabits())

        return disconnect
    }, [])

    return state
}
