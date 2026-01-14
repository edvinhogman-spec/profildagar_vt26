import type { HabitStruct } from "../types"

interface HabitRowProps {
    habit: HabitStruct
    dates: Date[]
}

export function HabitRow({ habit, dates }: HabitRowProps) {
    return (
        <tr>
            <td className="h-7 w-40 truncate border border-zinc-800 pr-2 text-center text-xs">
                <div className="w-40 truncate">{habit.name}</div>
            </td>

            {dates.map((date) => (
                <td
                    className="h-7 w-10 border-2 border-zinc-800"
                    style={{ backgroundColor: habit.color }}
                    key={date.toISOString()}
                ></td>
            ))}

            <td className="h-7 w-40 border border-zinc-800 text-center text-gray-400 text-xs">
                1/7
            </td>
        </tr>
    )
}
