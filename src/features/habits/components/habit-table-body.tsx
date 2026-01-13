import type { HabitStruct } from "../types"
import { HabitBox } from "./habit-box"

interface HabitTableBodyProps {
    habits: HabitStruct[]
    dates: Date[]
}

export function HabitTableBody({ habits, dates }: HabitTableBodyProps) {
    return (
        <tbody>
            {habits.map((habit) => (
                <tr key={habit.id}>
                    <td>
                        <p className="py-2 text-sm">{habit.name}</p>
                    </td>

                    {dates.map((date) => (
                        <HabitBox
                            key={date.toISOString()}
                            habit={habit}
                            date={date}
                        />
                    ))}

                    <td>7</td>
                    <td>7</td>
                </tr>
            ))}
        </tbody>
    )
}
