const text = 'Hola Mundo'
const fruits = ['manzana', 'banana', 'melon']

test('Debe Contener un Texto', () => {
    expect(text).toMatch(/Mundo/)
})

test('Tenemos una Banana', () => {
    expect(fruits).toContain('banana')
})

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9)
})

test('Verdadero', () => {
    expect(true).toBeTruthy()
})

const reverseString = (str, callback) => {
    callback(str.split('').reverse().join(''))
}

test('Probar un CallBack', () => {
    reverseString('Hola', str => {
        expect(str).toBe('aloH')
    })
} )