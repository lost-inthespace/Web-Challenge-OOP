let firstNameInput = document.getElementById("first-name-input");
let lastNameInput = document.getElementById("last-name-input");
let button = document.getElementById("button");
let greet = document.getElementById("greet");

button.addEventListener ("click", greetingUser);
function greetingUser(event) {
    if (firstNameInput.value == null || firstNameInput.value === "" || lastNameInput.value == null || lastNameInput.value === ""){
        greet.textContent = 'Please Enter your Name'
    }
    else if (!/^[a-zA-Z]*$/.test(firstNameInput.value)||!/^[a-zA-Z]*$/.test(lastNameInput.value)){
        greet.textContent = `Enter Valid Name That Consist of Alphabet!`
    }
    else{
        greet.textContent = `Nice to meet you ${firstNameInput.value} ${lastNameInput.value}!`
    }
    event.preventDefault()
}
console.log(button)