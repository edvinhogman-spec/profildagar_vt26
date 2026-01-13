import { arrayFromNumber } from "@/utils/object"

type Item = { row: number; column: number; checked?: boolean }

interface HabitBodyProps {
    columns: number
    rows: number
    items: Item[] // gör om senare
}

export function HabitBody({ columns, rows, items }: HabitBodyProps) {
    const columnsIterable = arrayFromNumber(columns)
    const rowsIterable = arrayFromNumber(rows)

    return (
        <div>
            <table className="border-spacing-4">
                <thead>
                    <tr>
                        {columnsIterable.map((c) => {
                            return (
                                <th className="items-center pr-3" key={c}>
                                    <p>{(c + 1).toString()}</p>
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {rowsIterable.map((r) => (
                        <tr key={r}>
                            {columnsIterable.map((c) => {
                                const currItems = items.filter(
                                    (v) => v.column === c && v.row === r,
                                )

                                return currItems.map((item, tempp) => (
                                    <td className="p-2" key={tempp}>
                                        <div className="aspect-square w-4 bg-yellow-300"></div>
                                    </td>
                                ))
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
