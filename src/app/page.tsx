//  <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-black px-16 py-32 sm:items-start">

import { Habits } from "@/features/habits/components"
import { createHabitTemplates } from "@/features/habits/utils"
import { getWeekDates } from "@/utils/dates"

export default function Home() {
    const columns = 30
    const rows = 5

    console.log(columns, rows)

    const dates = getWeekDates()
    const habits = createHabitTemplates(dates)

    return (
        <div className="flex min-h-screen items-center justify-center bg-black font-sans">
            <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between px-16 py-32 sm:items-start">
                <Habits habits={habits} dates={dates} />
            </main>
        </div>
    )
}
