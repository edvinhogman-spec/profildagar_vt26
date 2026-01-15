const colors = [
    "#6366f1", // indigo-500
    "#84cc16", // lime-500
    "#eab308", // yellow-500
    "#d946ef", // fuchsia-500
    "#0ea5e9", // sky-500
    "#ef4444", // red-500
]

export function getHabitColorId(habitId: number) {
    return habitId % colors.length
}

export function getHabitColorValue(colorId: number) {
    const color = colors[colorId]
    return color ?? "#94a3b8"
}
