import { useEffect, useRef, useState } from "react"
import { type HabitHandle, HabitService } from "../services"

export function useHabits() {
    const [state, setState] = useState<HabitHandle[]>([])
    const didInit = useRef(false)

    useEffect(() => {
        // om jag gör detta i constructor så blir det cyclic reference error
        if (!didInit.current) HabitService.onInit()
        didInit.current = true

        const disconnect = HabitService.onUpdate.connect(() => {
            setState(HabitService.getHabits())
        })
        setState(HabitService.getHabits())

        return disconnect
    }, [])

    return state
}
