import {it, expect} from '@jest/globals'
import Required from '../../src/rules/required'

it('validates string', () => {
    const rule = new Required('name')
    expect(rule.apply('')).toBe(false)
    expect(rule.apply('foo')).toBe(true)
})

it('validates number', () => {
    const rule = new Required('age')
    expect(rule.apply(0)).toBe(true)
    expect(rule.apply(100)).toBe(true)
})

it('validates null', () => {
    const rule = new Required('age')
    expect(rule.apply(null)).toBe(false)
})

it('validates undefined', () => {
    const rule = new Required('age')
    expect(rule.apply(undefined)).toBe(false)
})
