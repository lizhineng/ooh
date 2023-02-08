import After from '../../src/rules/after'

it('validate the date', () => {
    const now = Date.now()
    const rule = new After(now)
    expect(rule.apply(now + 1)).toBe(true)
    expect(rule.apply(now)).toBe(false)
    expect(rule.apply(now - 1)).toBe(false)
})
