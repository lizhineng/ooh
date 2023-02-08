import {it, expect} from '@jest/globals'
import DateValue from '../src/date'
import ValidationError from '../src/errors/validation-error'

it('parses null', () => {
    const date = new DateValue
    expect(date.cast(null)).toBe(null)
})

it('parses undefined', () => {
    const date = new DateValue
    expect(date.cast(undefined)).toBe(null)
})

it('parses date string in ISO-8601-compliant format', () => {
    const date = new DateValue
    const casted = date.cast('1995-12-17T03:24:00.000Z') as Date
    expect(casted).toBeInstanceOf(Date)
    expect(casted.toISOString()).toBe('1995-12-17T03:24:00.000Z')
})

it('parses epoch timestamp', () => {
    const date = new DateValue
    const casted = date.cast(628021800000) as Date
    expect(casted).toBeInstanceOf(Date)
    expect(casted.toISOString()).toBe('1989-11-25T18:30:00.000Z')
})

it('validaets rules', () => {
    const date = new DateValue().required()

    try {
        date.cast(null)
    } catch (e) {
        expect(e).toBeInstanceOf(ValidationError)
        expect(e.message).toBe('Failed to validate the data.')
        expect(e.error).toBe('The value is required.')
    }
})
