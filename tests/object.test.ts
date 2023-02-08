import {it, expect} from '@jest/globals'
import ValidationError from '../src/errors/validation-error'
import number from '../src/number'
import object from '../src/object'
import string from '../src/string'

it('casts value', () => {
    const schema = object({
        name: string(),
        age: number()
    })

    expect(schema.cast({ name: 'Zhineng', age: '24' }))
        .toStrictEqual({ name: 'Zhineng', age: 24 })
})

it('only casts the schema', () => {
    const schema = object({
        name: string()
    })

    expect(schema.cast({ name: 'Zhineng', age: 24 }))
        .toStrictEqual({ name: 'Zhineng' })
})

it('can be nested', () => {
    const schema = object({
        foo: object({
            bar: string()
        })
    })

    expect(schema.cast({})).toStrictEqual({
        foo: {
            bar: ''
        }
    })
})

it('returns error messages when has errors', () => {
    const schema = object({
        name: string().required()
    })

    try {
        schema.cast({})
    } catch (e) {
        expect(e).toBeInstanceOf(ValidationError)
        expect(e.message).toBe('Failed to validate the data.')
        expect(e.error).toStrictEqual({ name: 'The value is required.' })
    }
})

it('returns error messages when has errors, nested', () => {
    const schema = object({
        foo: object({
            bar: string().required()
        })
    })

    try {
        schema.cast({})
    } catch (e) {
        expect(e).toBeInstanceOf(ValidationError)
        expect(e.message).toBe('Failed to validate the data.')
        expect(e.error).toStrictEqual({
            foo: {
                bar: 'The value is required.'
            }
        })
    }
})
