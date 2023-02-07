import {it, expect} from '@jest/globals'
import number from '../src/number'
import object from '../src/object'
import string from '../src/string'

it('casts value', () => {
    const schema = object({
        name: string(),
        age: number()
    })

    expect(schema.cast({ name: 'Zhineng', age: '24' }))
        .toStrictEqual({ name: 'Zhineng', age: 24 })
})

it('only casts the schema', () => {
    const schema = object({
        name: string()
    })

    expect(schema.cast({ name: 'Zhineng', age: 24 }))
        .toStrictEqual({ name: 'Zhineng' })
})
