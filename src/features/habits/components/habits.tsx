import type { HabitHandle } from "../services"
import { AddHabitButton } from "./actions/add-habit-button"
import { HabitHeader } from "./table/habit-header"
import { HabitRow } from "./table/habit-row"

interface HabitsProps {
    habits: HabitHandle[]
    dates: Date[]
}

export function Habits({ habits, dates }: HabitsProps) {
    return (
        <table className="border-collapse">
            <tbody>
                <HabitHeader dates={dates} />
                {habits.map((habit, i) => (
                    <HabitRow
                        key={habit.data.id}
                        habit={habit}
                        dates={dates}
                        isLastRow={i === habits.length - 1}
                    />
                ))}

                <tr>
                    <td>
                        <AddHabitButton />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
