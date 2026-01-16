import { useEffect, useState } from "react"
import { HabitService } from "../services"

export function useHabitsLoaded() {
    const [state, setState] = useState(HabitService.isLoaded())

    useEffect(() => {
        const disconnect = HabitService.onLoaded.connect(() => {
            setState(true)
        })
        return disconnect
    }, [])

    return state
}
