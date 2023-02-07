import MaxLength from "../../src/rules/max-length"

it('validates the length of the string', () => {
    const rule = new MaxLength(5)
    expect(rule.apply('')).toBe(true)
    expect(rule.apply('black')).toBe(true)
    expect(rule.apply('purple')).toBe(false)
})
