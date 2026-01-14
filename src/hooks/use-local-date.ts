import { useState } from "react"

// helt meningslös, men den tar bort nextjs restriktioner på SSR
export function useLocalDate() {
    const [state, _] = useState(new Date())
    return state
}
