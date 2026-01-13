import type { HabitStruct } from "../types"
import { HabitTableBody } from "./habit-table-body"
import { HabitTableHeader } from "./habit-table-header"

interface HabitTableProps {
    habits: HabitStruct[]
    dates: Date[]
}

export function HabitTable({ habits, dates }: HabitTableProps) {
    return (
        <table className="table-fixed border-separate border-spacing-1">
            <HabitTableHeader dates={dates} />
            <HabitTableBody dates={dates} habits={habits} />
        </table>
    )
}
