import type { HabitStruct } from "../types"

export function createHabitTemplates(dates: Date[]): HabitStruct[] {
    const habits: HabitStruct[] = []

    const isChecked = () => {
        return Math.random() > 0.4
    }

    const createHabit = (id: number, color: string) => {
        const completions: { [key: string]: boolean } = {}

        for (const date of dates) {
            if (isChecked()) {
                completions[date.toISOString()] = true
            }
        }

        habits.push({
            id: id,
            name: "Hejsan!",
            color: color,
            completions: completions,
        })
    }

    createHabit(1, "#3b82f6")
    createHabit(2, "#22c55e")
    createHabit(3, "#facc15")

    return habits
}
