export interface HabitStruct {
    id: number
    name: string
    color: string
    completions: { [date: string]: boolean }
}
