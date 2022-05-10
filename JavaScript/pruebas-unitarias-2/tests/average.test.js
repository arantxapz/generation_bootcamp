const {average} =require("../para_probar")

//para englobar varios test en uno
/* describe("average", () => {
test("ingresar un valor", () => {
    const resultado = average([1])

    expect (resultado).toBe(1);
})
}) */


    test("ingresar un valor", () => {         
        expect (average([1])).toBe(1);
    })

    test("usando múltiples valores", () => {         
        expect (average([1, 2, 3, 4, 5, 6])).toBe(3.5);
    })

    //crear test para probar un valor undefined
    /* test("valor undefined", () => {         
        expect (average([""])).toBe(undefined);
    }) */

    test ("valor undefined arreglo", () => {
        expect (average ([""])).toBeundefined()
    })