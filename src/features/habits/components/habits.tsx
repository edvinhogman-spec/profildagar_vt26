import type { HabitStruct } from "../types"
import { HabitHeader } from "./habit-header"
import { HabitRow } from "./habit-row"

interface HabitsProps {
    habits: HabitStruct[]
    dates: Date[]
}

export function Habits({ habits, dates }: HabitsProps) {
    return (
        <div className="flex">
            <table>
                <tbody>
                    <HabitHeader dates={dates} />
                    {habits.map((habit) => (
                        <HabitRow key={habit.id} habit={habit} dates={dates} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
