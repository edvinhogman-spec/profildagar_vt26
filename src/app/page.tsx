"use client"

import { Habits } from "@/features/habits/components"
import { useHabits } from "@/features/habits/hooks"
import { getWeekDates } from "@/utils/dates"

export default function Home() {
    const dates = getWeekDates()
    const habits = useHabits()

    return (
        <div className="flex min-h-screen items-center justify-center bg-black font-sans">
            <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between px-16 py-32 sm:items-start">
                <Habits habits={habits} dates={dates} />
            </main>
        </div>
    )
}
