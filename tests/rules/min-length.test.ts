import MinLength from "../../src/rules/min-length"

it('validates the length of the string', () => {
    const rule = new MinLength(3)
    expect(rule.apply('foo')).toBe(true)
    expect(rule.apply('')).toBe(false)
    expect(rule.apply('hi')).toBe(false)
})
