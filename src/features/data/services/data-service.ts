import type { DataStruct } from "../types"

// jag hade använt en databas om jag hade tid
// men det blir hardcodat i localstorage

const DATA_TEMPLATE: DataStruct = {
    habits: [],
}

class DataServiceImpl {
    private readonly scope = "data"
    private data: DataStruct

    constructor() {
        this.data = this.fetch() ?? DATA_TEMPLATE
    }

    public serialize(value: DataStruct) {
        return JSON.stringify(value)
    }

    public deserialize(value: string) {
        return JSON.parse(value) as DataStruct
    }

    public fetch(): DataStruct | undefined {
        if (this.data) return this.data

        try {
            const ser = window?.localStorage?.getItem(this.scope)
            const data = ser ? this.deserialize(ser) : undefined
            return data
        } catch (e) {
            console.error("error reading from localstorage", e)
            return undefined
        }
    }

    public update(transformer: (data: DataStruct) => DataStruct) {
        try {
            this.data = transformer(this.data)
            window?.localStorage?.setItem(this.scope, this.serialize(this.data))
        } catch (e) {
            console.error(`error writing to localstorage:`, e)
        }
    }
}

export const DataService = new DataServiceImpl()
