//  <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-black px-16 py-32 sm:items-start">

import { HabitBody, HabitSidebar } from "@/features/habits/components"
import { createHabitTemplates } from "@/features/habits/utils"

export default function Home() {
    const columns = 30
    const rows = 5

    console.log(columns, rows)
    const items = createHabitTemplates(columns, rows)

    return (
        <div className="flex min-h-screen items-center justify-center bg-black font-sans">
            <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between px-16 py-32 sm:items-start">
                <div className="flex gap-12">
                    <HabitSidebar habits={["Hejsan", "Hejsan", "Hejsan"]} />
                    <HabitBody columns={columns} rows={rows} items={items} />
                </div>
            </main>
        </div>
    )
}
