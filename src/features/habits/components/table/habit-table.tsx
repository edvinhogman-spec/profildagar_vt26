import type { HabitHandle } from "../../services"
import { AddHabitButton } from "../actions/add-habit-button"
import { HabitHeader } from "./habit-header"
import { HabitRow } from "./habit-row"

interface HabitTableProps {
    dates: Date[]
    habits: HabitHandle[]
}

export function HabitTable({ dates, habits }: HabitTableProps) {
    return (
        <table className="fixed-table border-collapse">
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
