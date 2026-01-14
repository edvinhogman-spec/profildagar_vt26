interface HabitHeaderProps {
    dates: Date[]
}

export function HabitHeader({ dates }: HabitHeaderProps) {
    return (
        <tr>
            <th className="h-10 w-40 border border-zinc-800 pr-2">
                <p className="text-center">Habits</p>
            </th>

            {dates.map((date) => (
                <th
                    className="h-10 w-10 border border-zinc-800 text-center font-medium"
                    key={date.toISOString()}
                >
                    {date.getDate()}
                </th>
            ))}

            <th className="h-10 w-40 border border-zinc-800 pr-2">
                <p className="text-center">Achieved</p>
            </th>
        </tr>
    )
}
