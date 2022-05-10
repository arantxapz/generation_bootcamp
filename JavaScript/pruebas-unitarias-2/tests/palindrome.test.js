//importar
const {palindrome} = require("../para_probar")

//primer test unitario
test("palindrome de generation", () => {
const resultado = palindrome("generation")

//comparar
expect(resultado).toBe("noitareneg") //cuál sería el resultado del método
})

test("palindrome usando un string vacío", () => {
    const resultado = palindrome("")
    
    //comparar
    expect(resultado).toBe("")
    })
    
    test("palindrome undefined", () => {
        const resultado = palindrome()
        
        //comparar
        expect(resultado).toBe()
        })
        

