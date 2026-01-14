import { useEffect } from "react"
import type { Signal } from "@/utils/async"

export function useSignalListener<T extends unknown[]>(
    signal: Signal<T>,
    listener: (...args: T) => void | Promise<void>,
) {
    useEffect(() => {
        const disconnect = signal.connect(listener)
        return disconnect
    }, [])
}
