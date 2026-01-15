export interface HabitStruct {
    id: number
    name: string
    completions: { [date: string]: boolean }
}

export interface HabitOptions {
    name: string
}
