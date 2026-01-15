import type { HabitHandle } from "../../services"
import { HabitRowCell } from "./habit-row-cell"
import { HabitRowLabel } from "./habit-row-label"

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
            <HabitRowLabel habit={habit} />

            {dates.map((date) => (
                <HabitRowCell
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
