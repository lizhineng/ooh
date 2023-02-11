import { expect, it } from '@jest/globals'
import boolean from '../src/boolean'

it('parses string', () => {
    expect(boolean().cast('true')).toBe(true)
    expect(boolean().cast('false')).toBe(false)
    expect(boolean().cast('1')).toBe(true)
    expect(boolean().cast('0')).toBe(false)
    expect(boolean().cast('')).toBe(false)
})

it('parses number', () => {
    expect(boolean().cast(1)).toBe(true)
    expect(boolean().cast(999)).toBe(true)
    expect(boolean().cast(0)).toBe(false)
    expect(boolean().cast(-1)).toBe(true)
})

it('parses null', () => {
    expect(boolean().cast(null)).toBe(false)
})

it('parses undefined', () => {
    expect(boolean().cast(undefined)).toBe(false)
})
