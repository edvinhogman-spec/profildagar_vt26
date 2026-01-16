import { normalizeDate } from "./normalize-date"

export function isSameDate(a: Date, b: Date) {
    return normalizeDate(a).toISOString() === normalizeDate(b).toISOString()
}
