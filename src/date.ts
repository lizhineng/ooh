import ValueType from './value-type'
import Required from './rules/required'
import Before from './rules/before'

class DateValue extends ValueType {
    protected casted: Date|null

    protected castValue(value: unknown) {
        if (value === null || value === undefined) {
            return null
        }

        if (typeof value === 'string' || typeof value === 'number') {
            return new Date(value)
        }

        return new Date
    }

    required() {
        this.rules.push(new Required)

        return this
    }

    before(date: Date|string|number) {
        this.rules.push(new Before(date))

        return this
    }
}

export default DateValue
