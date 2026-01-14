import { type EffectCallback, useEffect } from "react"

export function useMountEffect(callback: EffectCallback) {
    useEffect(callback, [])
}
