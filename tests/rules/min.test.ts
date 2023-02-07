import Min from "../../src/rules/min"

it('validates the minimum number', () => {
    const rule = new Min(18)
    expect(rule.apply(18)).toBe(true)
    expect(rule.apply(24)).toBe(true)
    expect(rule.apply(0)).toBe(false)
    expect(rule.apply(17)).toBe(false)
})
