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
    if(firstName.value ==``){
        firstNameError.innerHTML = `Please fill out this field`
    }
    else{
        firstNameError.innerHTML = ``
    }
    if(lastName.value == ``){
        lastNameError.innerHTML = `Please fill out this field`
    }
    else{
        lastNameError.innerHTML = ``
    }
    if(password.value == ``){
        passError.innerHTML = `Please fill out this field`
    }
    else{
        passError.innerHTML = ``
    }
    if(!checkbox.checked){
        checkboxError.innerHTML = 'Please accept privacy policy'
    }
    else{
        checkboxError.innerHTML =``
    }
})