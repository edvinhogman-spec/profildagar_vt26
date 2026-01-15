import type { HabitStruct } from "../types"
import { AddHabitButton } from "./add-habit-button"
import { HabitHeader } from "./habit-header"
import { HabitRow } from "./habit-row"

interface HabitsProps {
    habits: HabitStruct[]
    dates: Date[]
}

export function Habits({ habits, dates }: HabitsProps) {
    return (
        <table className="border-collapse">
            <tbody>
                <HabitHeader dates={dates} />
                {habits.map((habit, i) => (
                    <HabitRow
                        key={habit.id}
                        habit={habit}
                        dates={dates}
                        isLastRow={i === habits.length - 1}
                    />
                ))}

                <tr>
                    <td className="pt-2">
                        <AddHabitButton />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
