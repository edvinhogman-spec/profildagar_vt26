interface HabitSidebarProps {
    habits: string[]
}

export function HabitSidebar({ habits }: HabitSidebarProps) {
    return (
        <div>
            <table className="border-spacing-4">
                <thead>
                    <tr>
                        <th className="pb-3">Hejsan</th>
                    </tr>
                </thead>
                <tbody>
                    {habits.map((h, i) => {
                        return (
                            <tr key={`h-${i}`}>
                                <td className="pt-1">{h}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
