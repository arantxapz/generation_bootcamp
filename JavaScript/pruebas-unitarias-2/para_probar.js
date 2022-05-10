const palindrome = (string) => {
if (typeof strinng === "undefined") return ;

    return string
            .split('')
            .reverse()
            .join('');
}

const average = array => {
    let sum = 0;
    array.forEach(num => { sum += num });
    if(typeof array === "undefined") return;
    if(array.length === 0) return [];
    return sum / array.length;
}

//exportar
module.exports = {
    palindrome : palindrome, //si es el mismo nombre se puede omitir uno
    average: average
}