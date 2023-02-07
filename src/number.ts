import Max from "./rules/max"
import Min from "./rules/min"
import Required from "./rules/required"
import ValueType from "./value-type"

class NumberValue extends ValueType {
    protected casted: number|null

    protected castValue(value: unknown) {
        if (value === null || value === undefined) {
            return null
        }

        return Number(value)
    }

    required() {
        this.rules.push(new Required)

        return this
    }

    min(value: number) {
        this.rules.push(new Min(value))

        return this
    }

    max(value: number) {
        this.rules.push(new Max(value))

        return this
    }
}

export default () => new NumberValue
