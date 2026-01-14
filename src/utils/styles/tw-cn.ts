import { type ClassNameValue, twMerge } from "tailwind-merge"

// Funktion för att ge autocomplete till tailwind.
// Denna funktion gör absolut ingenting jag kan egentligen använda twMerge,
// .. men jag föredrar att skriva "twCn"
export function twCn(...classes: ClassNameValue[]) {
    return twMerge(...classes)
}
