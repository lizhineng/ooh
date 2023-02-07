import MaxLength from "./rules/max-length"
import MinLength from "./rules/min-length"
import Required from "./rules/required"
import ValueType from "./value-type"

class StringValue extends ValueType {
    protected casted: string|null

    protected castValue(value: unknown) {
        if (value === null || value === undefined) {
            return ''
        }

        return value.toString()
    }

    required() {
        this.rules.push(new Required)

        return this
    }

    min(length: number) {
        this.rules.push(new MinLength(length))

        return this
    }

    max(length: number) {
        this.rules.push(new MaxLength(length))

        return this
    }
}

export default () => new StringValue
