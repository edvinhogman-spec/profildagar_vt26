import type { HabitHandle } from "../services"
import { HabitItem } from "./habit-item"

interface HabitRowProps {
    habit: HabitHandle
    isLastRow: boolean
    dates: Date[]
}

export function HabitRow({ habit, dates, isLastRow }: HabitRowProps) {
    const relevantCompletions = new Set()
    for (const date of dates) {
        if (habit.hasCompletion(date)) {
            relevantCompletions.add(date)
        }
    }

    return (
        <tr>
            <td className="h-7 w-40 truncate border border-zinc-800 px-2 text-center text-gray-400 text-xs">
                <div className="w-40 truncate">{habit.data.name}</div>
            </td>

            {dates.map((date) => (
                <HabitItem
                    key={date.toISOString()}
                    habit={habit}
                    date={date}
                    isLastRow={isLastRow}
                />
            ))}

            <td className="h-7 w-40 border border-zinc-800 text-center text-gray-400 text-xs">
                1/7
            </td>
        </tr>
    )
}
