import { twCn } from "@/utils/styles"
import type { HabitHandle } from "../../services"
import { DeleteHabitButton } from "../actions/delete-habit-button"
import { RenameHabitButton } from "../actions/rename-habit-button"

interface HabitRowLabelProps {
    habit: HabitHandle
}

export function HabitRowLabel({ habit }: HabitRowLabelProps) {
    const overlay = twCn(
        "absolute inset-0 flex items-center justify-center px-2 transition-opacity duration-300",
    )

    return (
        <td className="group relative h-7 w-40 border border-zinc-800 text-center">
            <div>
                <div
                    className={`${overlay} opacity-100 group-hover:pointer-events-none group-hover:opacity-0`}
                >
                    <p className="w-full truncate text-gray-400 text-xs">
                        {habit.data.name}
                    </p>
                </div>

                <div
                    className={`${overlay} pointer-events-none gap-2 opacity-0 group-hover:pointer-events-auto group-hover:opacity-100`}
                >
                    <DeleteHabitButton habit={habit} />
                    <RenameHabitButton habit={habit} />
                </div>
            </div>
        </td>
    )
}
