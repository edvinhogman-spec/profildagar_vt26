import type { SVGProps } from "react"

const iconLookup = {
    delete: "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z",
    edit: "M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z",
}

interface IconProps
    extends Omit<SVGProps<SVGSVGElement>, "children" | "viewBox"> {
    variant: keyof typeof iconLookup
    alt?: string
}

export function Icon({ variant, fill, alt, ...props }: IconProps) {
    const src = iconLookup[variant]
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill={fill ?? "#ffffff"}
            {...props}
        >
            <path d={src} />
            <title>{alt ?? `icon-${variant}`}</title>
        </svg>
    )
}
