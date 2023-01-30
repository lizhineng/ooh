import {it, expect} from '@jest/globals'
import string from './string'
import ValidationError from './validation-error'

it('parses null', () => {
    expect(string().casts(null)).toBe('')
})

it('parses undefined', () => {
    expect(string().casts(undefined)).toBe('')
})

it('parses string', () => {
    expect(string().casts('foo')).toBe('foo')
})

it('parses number', () => {
    expect(string().casts(100)).toBe('100')
    expect(string().casts(100.1)).toBe('100.1')
})

it('parses boolean', () => {
    expect(string().casts(true)).toBe('true')
    expect(string().casts(false)).toBe('false')
})

it('parses object', () => {
    const obj = class {
        toString() {
            return 'foo'
        }
    }
    const value = string().casts(new obj)
    expect(value).toBe('foo')
})

it('validates required rule', () => {
    const schema = string().required()

    expect(() => schema.casts('')).toThrow(ValidationError)
    expect(() => schema.casts('foo')).not.toThrow(ValidationError)
})
