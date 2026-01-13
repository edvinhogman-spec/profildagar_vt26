export function createHabitTemplates(columns: number, rows: number) {
    const result = []

    const isChecked = () => {
        return Math.random() < 0.7
    }

    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows; r++) {
            result.push({
                column: c,
                row: r,
                checked: isChecked(),
            })
        }
    }

    return result
}
