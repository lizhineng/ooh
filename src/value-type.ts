import Rule from "./contracts/rule"
import ValidationError from "./errors/validation-error"

abstract class ValueType {
    protected casted: unknown

    protected rules: Rule[] = []

    cast(value: unknown) {
        this.casted = this.castValue(value)

        this.validate()

        return this.casted
    }

    protected abstract castValue(value: unknown)

    validate(): boolean {
        this.rules.forEach(rule => {
            if (! rule.apply(this.casted)) {
                throw new ValidationError(rule.message())
            }
        })

        return true
    }
}

export default ValueType
