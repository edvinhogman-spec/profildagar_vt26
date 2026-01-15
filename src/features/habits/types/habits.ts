export interface HabitStruct {
    id: number
    name: string
    colorId: number
    completions: { [date: string]: boolean }
}

export interface HabitOptions {
    name: string
}
