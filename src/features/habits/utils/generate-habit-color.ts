export function generateHabitColor(id: number): string {
    const colors = [
        "#3b82f6", // blue-500
        "#10b981", // emerald-500
        "#a855f7", // purple-500
        "#f97316", // orange-500
        "#ec4899", // pink-500
        "#ef4444", // red-500
    ]
    return colors[id % colors.length]
}
