const getformvalue=(event) =>{
    event.preventDefault();
    const $inputs = document.querySelectorAll("input");
    console.log($inputs [0].value)
    console.log($inputs [1].value)
}