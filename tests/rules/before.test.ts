import Before from '../../src/rules/before'

it('validates the date', () => {
    const now = Date.now()
    const rule = new Before(now)
    expect(rule.apply(now - 1)).toBe(true)
    expect(rule.apply(Date.now())).toBe(false)
})
