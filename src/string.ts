import Empty from './empty'
import ValidationError from './validation-error'

class StringBuilder {
    protected rules = []

    protected casted: string

    required() {
        this.rules.push(new Empty)

        return this
    }

    casts(value: unknown) {
        this.casted = this.castsValue(value)

        this.validate()

        return this.casted
    }

    protected castsValue(value: unknown) {
        if (value === null || value === undefined) {
            return ''
        }

        return value.toString()
    }

    protected validate() {
        this.rules.forEach(rule => {
            if (!rule.apply(this.casted)) {
                throw new ValidationError(rule.message())
            }
        })

        return true
    }
}

export default () => new StringBuilder
