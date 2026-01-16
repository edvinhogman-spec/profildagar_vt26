"use client"

import { useState } from "react"
import { getWeekDates } from "@/utils/dates"
import { useHabits } from "../hooks"
import { HabitCalendar } from "./calendar/habit-calendar"
import { HabitTable } from "./table/habit-table"

interface HabitsProps {}

export function Habits(_: HabitsProps) {
    const [dates, setDates] = useState(getWeekDates())
    const habits = useHabits()

    const onCalendarClicked = (direction: number) => {
        const nextMonday = new Date(dates[0])
        nextMonday.setDate(nextMonday.getDate() + 7 * direction)
        setDates(getWeekDates(nextMonday))
    }

    return (
        <div className="flex flex-col gap-5">
            <HabitCalendar onClick={onCalendarClicked} dates={dates} />
            <HabitTable habits={habits} dates={dates} />
        </div>
    )
}
