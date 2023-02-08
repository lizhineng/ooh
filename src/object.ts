import ValidationError from "./errors/validation-error"
import ValueType from "./value-type"

class ObjectValue extends ValueType {
    protected value: object

    constructor(value: object) {
        super()

        this.value = value
    }

    protected castValue(value: unknown) {
        const casted = {}
        const errors = {}

        for (const [name, schema] of Object.entries(this.value)) {
            try {
                casted[name] = schema.cast(value?.[name])
            } catch (e) {
                if (e instanceof ValidationError) {
                    errors[name] = e.error
                } else {
                    throw e
                }
            }
        }

        if (Object.keys(errors).length > 0) {
            throw new ValidationError(errors)
        }

        return casted
    }
}

export default (value: object) => new ObjectValue(value)
