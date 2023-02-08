import DateHelper from '../utilities/date-helper'
import Rule from '../contracts/rule'

class After implements Rule {
    protected value: Date

    constructor(value: Date|string|number) {
        this.value = DateHelper.parse(value)
    }

    apply(value: Date|string|number): boolean {
        value = DateHelper.parse(value)

        return value > this.value
    }

    message(): string {
        return `The date must be after ${this.value.toString()}.`
    }
}

export default After
