import type { HabitStruct } from "../types"
import { HabitItem } from "./habit-item"

interface HabitRowProps {
    habit: HabitStruct
    isLastRow: boolean
    dates: Date[]
}

export function HabitRow({ habit, dates, isLastRow }: HabitRowProps) {
    return (
        <tr>
            <td className="h-7 w-40 truncate border border-zinc-800 px-2 text-center text-gray-400 text-xs">
                <div className="w-40 truncate">{habit.name}</div>
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
