import Rule from '../contracts/rule'
import DateHelper from '../utilities/date-helper'

class Before implements Rule {
    protected value: Date

    constructor(value: Date|string|number) {
        this.value = DateHelper.parse(value)
    }

    apply(value: Date|string|number): boolean {
        value = DateHelper.parse(value)

        return value < this.value
    }

    message(): string {
        return `The date must be before ${this.value.toString()}.`
    }
}

export default Before
