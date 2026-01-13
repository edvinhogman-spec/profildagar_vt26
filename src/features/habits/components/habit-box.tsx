import type { HabitStruct } from "../types"

interface HabitBoxProps {
    habit: HabitStruct
    date: Date
}

export function HabitBox({ date, habit }: HabitBoxProps) {
    const dateStr = date.toISOString()

    const data = habit.completions[dateStr]
    const isCompleted = data !== undefined

    return (
        <td
            key={dateStr}
            style={{
                backgroundColor: isCompleted
                    ? habit.color
                    : "var(--color-zinc-800)",
            }}
            className="aspect-square h-full rounded"
        ></td>
    )
}
