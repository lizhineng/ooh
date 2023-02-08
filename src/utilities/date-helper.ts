class DateHelper {
    static parse(value: Date|string|number): Date {
        if (typeof value === 'string' || typeof value === 'number') {
            return new Date(value)
        }

        return value
    }
}

export default DateHelper
