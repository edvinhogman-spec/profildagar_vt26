import { type ClassNameValue, twMerge } from "tailwind-merge"

// Funktion för att ge autocomplete till tailwind
export function twCn(...classes: ClassNameValue[]) {
    return twMerge(...classes)
}
