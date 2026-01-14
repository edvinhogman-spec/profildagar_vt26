import type { HabitStruct } from "../types"

export function createHabitTemplates(dates: Date[]): HabitStruct[] {
    const habits: HabitStruct[] = []

    const isChecked = () => {
        return Math.random() > 0.4
    }

    const createHabit = (id: number, color: string, text: string) => {
        const completions: { [key: string]: boolean } = {}

        for (const date of dates) {
            if (isChecked()) {
                completions[date.toISOString()] = true
            }
        }

        habits.push({
            id: id,
            name: text,
            color: color,
            completions: completions,
        })
    }

    createHabit(1, "#22c55e", "väldigt lång text den går över 2 linjer hahah ")
    createHabit(2, "#eab308", "kort")
    createHabit(3, "#8b5cf6", "medellång text okej!")

    return habits
}
