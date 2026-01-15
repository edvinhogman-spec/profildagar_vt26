"use client"

import { Habits } from "@/features/habits/components"
import { useHabits } from "@/features/habits/hooks"
import { getWeekDates } from "@/utils/dates"

export default function Home() {
    const dates = getWeekDates()
    const habits = useHabits()

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-black p-4 font-sans">
            <main className="flex w-full max-w-5xl flex-col items-center">
                <Habits habits={habits} dates={dates} />
            </main>
        </div>
    )
}
