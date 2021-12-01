// local storage

// JSON - object notation

let massive = [];
const ner = document.querySelector("#name")
const utas = document.querySelector("#phone")
const email = document.querySelector("#email")
const pass = document.querySelector("#pass")
const btn = document.querySelector("#btn")
const input = document.querySelectorAll('.input')

function test() {
    let user = JSON.parse(localStorage.getItem("users"));
    
    console.log(massive)
    massive.push(JSON.parse(localStorage.getItem("users")))

};
test();

btn.addEventListener('click', () => {
    if (ner.value.trim() !== ''
        && pass.value.trim() !== ''
        && email.value.trim() !== ''
        && utas.value.trim() !== '') {
        massive.push(
            {
                ner: ner.value,
                pass: pass.value,
                utas: utas.value,
                email: email.value,
            }
        )
    }
    localStorage.setItem("users", JSON.stringify(massive))
    console.log(massive)
    ner.value = ""
    pass.value = ""
    utas.value = ""
    email.value = ""
})