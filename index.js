let generate = document.getElementById('generate')
let passtxt = document.getElementById('passwordtext')
let slider = document.querySelector('.slider')
let slidervalue = document.querySelector('#slider-value')
let lowercase = document.getElementById('lowercase')
let uppercase = document.getElementById('uppercase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
let copy = document.getElementById('copy')

slidervalue.textContent = slider.value;
slider.addEventListener('input', () => {
    slidervalue.textContent = slider.value;
});
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let allnums = "0123456789";
let allsyms = "~!@#$%^&*()_+=,./?':;-";

generate.addEventListener('click', () => {
    let pass = ""
    let allchar = ""
    allchar += lowercase.checked ? lowerchars : "";
    allchar += uppercase.checked ? upperchars : "";
    allchar += numbers.checked ? allnums : "";
    allchar += symbols.checked ? allsyms : "";
    if (allchar == "" || allchar.length == 0) {
        passtxt.textContent = pass
    }
    for (let j = 0; j < slider.value; j++) {

        pass += allchar.charAt(Math.floor(Math.random() * allchar.length));

    }
    passtxt.innerHTML = pass
})
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(passtxt.innerHTML)
    copy.innerText="check"
})