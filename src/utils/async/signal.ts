type Listener<T extends unknown[]> = (...args: T) => void | Promise<void>

export class Signal<T extends unknown[]> {
    private readonly listeners: Listener<T>[] = []

    public fire(...args: T) {
        console.log(this.listeners)
        for (const listener of this.listeners) {
            void (async () => {
                try {
                    await listener(...args)
                } catch (err) {
                    console.error("Listener failed:", err)
                }
            })()
        }
    }

    public connect(listener: Listener<T>) {
        this.listeners.push(listener)
        return () => {
            const idx = this.listeners.indexOf(listener)
            if (idx !== -1) delete this.listeners[idx]
        }
    }
}
