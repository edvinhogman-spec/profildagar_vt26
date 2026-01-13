export function getWeekDates(base = new Date()) {
    const date = new Date(base)
    date.setHours(0, 0, 0, 0)

    // calculate distance to get to monday
    const dayOfWeek = date.getDay()
    const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
    const monday = new Date(date.setDate(diff))

    // build week of dates counting from monday
    const dates = []
    for (let i = 0; i < 7; i++) {
        const day = new Date(monday)
        day.setDate(monday.getDate() + i)
        dates.push(day)
    }

    return dates
}
