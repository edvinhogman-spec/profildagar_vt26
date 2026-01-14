import type React from "react"
import { twCn } from "@/utils/styles"

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, "type"> {
    variant?: "primary" | "secondary"
}

const styles = {
    base: twCn(
        "py-2 px-4 text-white text-sm font-medium border-inset transition-all duration-200",
    ),

    enabled: twCn("hover:cursor-pointer"),
    disabled: twCn(
        "opacity-65 cursor-not-allowed! pointer-events-none scale-100!",
    ),

    variants: {
        primary: twCn("hover:bg-green-700 active:bg-green-600 bg-zinc-700"),
        secondary: twCn("bg-zinc-700"),
    },
}

export function Button({
    variant = "primary",
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            type="button"
            className={twCn(
                styles.base,
                styles.variants[variant],
                props.disabled ? styles.disabled : styles.enabled,
                className,
            )}
            {...props}
        >
            {children}
        </button>
    )
}
