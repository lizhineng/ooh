import ValueType from "./value-type"

class ObjectValue extends ValueType {
    protected value: object

    constructor(value: object) {
        super()

        this.value = value
    }

    protected castValue(value: unknown) {
        const casted = {}

        for (const [name, schema] of Object.entries(this.value)) {
            casted[name] = schema.cast(value[name])
        }

        return casted
    }
}

export default (value: object) => new ObjectValue(value)
