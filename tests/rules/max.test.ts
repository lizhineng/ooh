import Max from "../../src/rules/max"

it('validates the number', () => {
    const rule = new Max(100)
    expect(rule.apply(0)).toBe(true)
    expect(rule.apply(24)).toBe(true)
    expect(rule.apply(100)).toBe(true)
    expect(rule.apply(101)).toBe(false)
})
