"use client"

import { useState } from "react"
import { useMountEffect } from "@/hooks"
import { getWeekDates } from "@/utils/dates"
import { useHabits, useHabitsLoaded } from "../hooks"
import { HabitCalendar } from "./calendar/habit-calendar"
import { HabitTable } from "./table/habit-table"

interface HabitsProps {}

export function Habits(_: HabitsProps) {
    const [dates, setDates] = useState<Date[]>([])
    const loaded = useHabitsLoaded()
    const habits = useHabits()

    useMountEffect(() => {
        setDates(getWeekDates())
    })

    const onCalendarClicked = (direction: number) => {
        const nextMonday = new Date(dates[0])
        nextMonday.setDate(nextMonday.getDate() + 7 * direction)
        setDates(getWeekDates(nextMonday))
    }

    if (!loaded || dates.length === 0) {
        return <p className="notranslate">Loading..</p>
    }

    return (
        <div className="flex flex-col gap-5">
            <HabitCalendar onClick={onCalendarClicked} dates={dates} />
            <HabitTable habits={habits} dates={dates} />
        </div>
    )
}
