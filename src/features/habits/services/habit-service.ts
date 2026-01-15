import { DataService } from "@/features/data/services"
import { Signal } from "@/utils/async"
import type { HabitOptions, HabitStruct } from "../types"
import { HabitHandle } from "./habit-handle"

class HabitServiceImpl {
    public readonly onUpdate = new Signal()
    public readonly habits: Map<number, HabitHandle> = new Map()
    private didInit = false

    public onInit() {
        if (!this.didInit) {
            this.didInit = true
            const data = DataService.fetch()!
            for (const habit of data.habits) {
                this.habits.set(habit.id, new HabitHandle(habit))
            }
        }
    }

    private getNextHabitId() {
        const maxId = Math.max(0, ...Array.from(this.habits.keys()))
        const nextId = maxId + 1
        return nextId
    }

    public getHabits() {
        return Array.from(this.habits.values())
    }

    public createHabit(options: HabitOptions) {
        const id = this.getNextHabitId()
        const struct: HabitStruct = {
            id: id,
            name: options.name,
            completions: {},
        }
        this.update(() => {
            this.habits.set(id, new HabitHandle(struct))
        })
        return this.habits.get(id)
    }

    public update(transformer: () => void) {
        DataService.update((data) => {
            transformer()
            const habits = Array.from(this.habits.values().map((v) => v.data))
            data.habits = habits
            return data
        })
        this.onUpdate.fire()
    }
}

export const HabitService = new HabitServiceImpl()
