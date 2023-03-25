const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const password = document.getElementById('password') 
const button = document.getElementById('button')
const checkbox = document.getElementById('checkbox')
const firstNameError = document.getElementById('firstNameError')
const lastNameError = document.getElementById('lstError')
const passError = document.getElementById('passError')
const checkboxError = document.getElementById('policy')

button.addEventListener('click', ()=>{
    firstName.value ==`` ? firstNameError.innerHTML = `Please fill out this field` : firstNameError.innerHTML = ``
    lastName.value == '' ? lastNameError.innerHTML = `Please fill out this field` : lastNameError.innerHTML = ``
    password.value == "" ? passError.innerHTML = `Please fill out this field` :  passError.innerHTML = ``
    !checkbox.checked ? checkboxError.innerHTML = 'Please accept privacy policy' : checkboxError.innerHTML =``
})