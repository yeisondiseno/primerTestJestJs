const randomString  = require('../index')


// test('Probar la funcionalidad', () => {
//     expect(typeof(randomString())).toBe('string')
// })

describe('Probar funcionalidades de randomString', ()=>{
    test('Probar la funcionalidad', () => {
        expect(typeof(randomString())).toBe('string')
    })
    test('Comprobar que no existe una cuidad', () => {
        expect(randomString()).not.toMatch(/Cordoba/)
    })
})