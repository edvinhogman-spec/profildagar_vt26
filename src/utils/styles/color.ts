export interface HSV {
    h: number
    s: number
    v: number
}

function lerpAlpha(a: number, b: number, t: number): number {
    return Math.max(0, Math.min(a + (b - a) * t, 1))
}

function hexToHsv(hex: string): HSV {
    let r = 0,
        g = 0,
        b = 0
    hex = hex.replace(/^#/, "")

    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16) / 255
        g = parseInt(hex[1] + hex[1], 16) / 255
        b = parseInt(hex[2] + hex[2], 16) / 255
    } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16) / 255
        g = parseInt(hex.substring(2, 4), 16) / 255
        b = parseInt(hex.substring(4, 6), 16) / 255
    }

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const delta = max - min

    let h = 0
    if (delta !== 0) {
        if (max === r) h = ((g - b) / delta) % 6
        else if (max === g) h = (b - r) / delta + 2
        else h = (r - g) / delta + 4

        h = Math.round(h * 60)
        if (h < 0) h += 360
    }

    return {
        h,
        s: max === 0 ? 0 : delta / max,
        v: max,
    }
}

function hsvToHex({ h, s, v }: HSV): string {
    const f = (n: number): string => {
        const k = (n + h / 60) % 6
        const color = v - v * s * Math.max(0, Math.min(k, 4 - k, 1))
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, "0")
    }

    return `#${f(5)}${f(3)}${f(1)}`.toUpperCase()
}

export class Color {
    protected constructor(public value: HSV) {}

    public static fromHSV(hsv: HSV) {
        return new Color(hsv)
    }

    public static fromHex(hex: string) {
        return new Color(hexToHsv(hex))
    }

    public toHex(): string {
        return hsvToHex(this.value)
    }

    public darken(amount: number, saturationBoost = 0.25 * amount) {
        const { h, s, v } = this.value
        return Color.fromHSV({
            h,
            s: lerpAlpha(s, 1, saturationBoost),
            v: lerpAlpha(v, 0, 0.7 * amount),
        })
    }
}
