// Variables
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const password = document.getElementById('password') 
const button = document.getElementById('button')
const checkbox = document.getElementById('checkbox')
const firstNameError = document.getElementById('firstNameError')
const lastNameError = document.getElementById('lstError')
const passError = document.getElementById('passError')
const checkboxError = document.getElementById('policy')
const eyeOpen = document.getElementById('eyeOpen')
const eyeClose = document.getElementById('eyeClosed')
//Code
button.addEventListener('click', ()=>{
    firstName.value =='' ? firstNameError.innerHTML = 'Please fill out this field' : firstNameError.innerHTML = ''
    lastName.value == '' ? lastNameError.innerHTML = 'Please fill out this field' : lastNameError.innerHTML = ''
    password.value == '' ? passError.innerHTML = 'Please fill out this field' :  passError.innerHTML = ''
    !checkbox.checked ? checkboxError.innerHTML = 'Please accept privacy policy' : checkboxError.innerHTML =''
})

eyeOpen.addEventListener('click', ()=>{
    eyeClose.style.display = "inline"
    eyeOpen.style.display = "none"
    password.type = "text"
})
eyeClose.addEventListener('click', ()=>{
    eyeOpen.style.display = "inline"
    eyeClose.style.display = "none"
    password.type = "password"
})