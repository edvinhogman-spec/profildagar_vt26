interface HabitTableHeaderProps {
    dates: Date[]
}

export function HabitTableHeader({ dates }: HabitTableHeaderProps) {
    return (
        <thead>
            <tr>
                <th className="pr-5 text-left">Habits</th>

                {dates.map((date) => {
                    const dateStr = date.toISOString()
                    const day = date.getDate()

                    return (
                        <th className="w-10 text-center" key={dateStr}>
                            {day}
                        </th>
                    )
                })}

                <th>Goal</th>
                <th>Achieved</th>
            </tr>
        </thead>
    )
}
