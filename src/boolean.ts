import ValueType from './value-type'

class BooleanValue extends ValueType {
    protected casted: boolean|null

    protected falseValues = [
        'false',
        '0',
        ''
    ]

    protected castValue(value: unknown) {
        if (value === null || value === undefined) {
            return false
        }

        if (typeof value === 'boolean') {
            return value
        }

        if (typeof value === 'string') {
            return this.castStringValue(value)
        }

        if (typeof value === 'number') {
            return value !== 0
        }
    }

    protected castStringValue(value: string): boolean {
        if (this.falseValues.includes(value)) {
            return false
        }

        return true
    }
}

export default () => new BooleanValue
