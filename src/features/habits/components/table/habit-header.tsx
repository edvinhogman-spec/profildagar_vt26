import { HabitHeaderDate } from "./habit-header-date"

interface HabitHeaderProps {
    dates: Date[]
}

export function HabitHeader({ dates }: HabitHeaderProps) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    return (
        <tr>
            <th className="h-10 w-40 border border-zinc-800 pr-2">
                <p className="text-center">Habits</p>
            </th>

            {dates.map((date) => (
                <HabitHeaderDate key={date.toISOString()} date={date} />
            ))}

            <th className="h-10 w-40 border border-zinc-800 pr-2">
                <p className="text-center">Achieved</p>
            </th>
        </tr>
    )
}
