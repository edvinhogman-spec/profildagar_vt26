import { DataService } from "@/features/data/services"
import { Signal } from "@/utils/async"
import type { HabitOptions, HabitStruct } from "../types"

class HabitServiceImpl {
    public readonly onHabitUpdated = new Signal()
    private readonly habits: Map<number, HabitStruct> = new Map()

    constructor() {
        const data = DataService.fetch()!
        for (const habit of data.habits) {
            this.habits.set(habit.id, habit)
        }
    }

    private update(transformer: () => void) {
        DataService.update((data) => {
            transformer()
            const habits = Array.from(this.habits.values())
            data.habits = habits
            return data
        })
        this.onHabitUpdated.fire()
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
        const struct: HabitStruct = {
            id: this.getNextHabitId(),
            name: options.name,
            color: "#ffffff",
            completions: {},
        }
        this.update(() => {
            this.habits.set(struct.id, struct)
        })
    }

    public addHabitCompletion(habitId: number, date: Date) {
        const habit = this.habits.get(habitId)
        if (!habit) return

        const normalizedDate = new Date(date)
        normalizedDate.setHours(0, 0, 0, 0)

        this.update(() => {
            const dateId = normalizedDate.toISOString()
            habit.completions[dateId] = true
        })
    }

    public removeHabitCompletion(habitId: number, date: Date) {
        const habit = this.habits.get(habitId)
        if (!habit) return

        const normalizedDate = new Date(date)
        normalizedDate.setHours(0, 0, 0, 0)

        this.update(() => {
            const dateId = normalizedDate.toISOString()
            delete habit.completions[dateId]
        })
    }
}

export const HabitService = new HabitServiceImpl()
