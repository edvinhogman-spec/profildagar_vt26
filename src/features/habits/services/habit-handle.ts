import { normalizeDate } from "@/utils/dates"
import type { HabitStruct } from "../types"
import { getHabitColorValue } from "../utils"
import { HabitService } from "./habit-service"

export class HabitHandle {
    constructor(public data: HabitStruct) {
        this.data = data
    }

    public delete() {
        HabitService.update(() => {
            HabitService.habits.delete(this.data.id)
        })
    }

    public addCompletion(date: Date) {
        HabitService.update(() => {
            const dateId = normalizeDate(date).toISOString()
            this.data.completions[dateId] = true
        })
    }

    public removeCompletion(date: Date) {
        HabitService.update(() => {
            const dateId = normalizeDate(date).toISOString()
            delete this.data.completions[dateId]
        })
    }

    public hasCompletion(date: Date) {
        const dateId = normalizeDate(date).toISOString()
        return this.data.completions[dateId] === true
    }

    public getColor() {
        return getHabitColorValue(this.data.colorId)
    }
}
