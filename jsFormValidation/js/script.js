// Select the form and input elements
const form = document.querySelector("form");
const uName = document.querySelector(".uname");
const email = document.querySelector(".email");
const psw = document.querySelector(".psw");
const cpsw = document.querySelector(".cpsw");
const uMsg = document.querySelector(".u-msg");
const eMsg = document.querySelector(".e-msg");
const pMsg = document.querySelector(".p-msg");
const cpMsg = document.querySelector(".cp-msg");

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
    // Clear previous messages
    uMsg.textContent = "";
    eMsg.textContent = "";

    // Check inputs and only prevent default if there are errors
    if (!checkInputs()) {
        e.preventDefault();
    }
});

function checkInputs() {
    // Get the values from the inputs
    const uNameValue = uName.value.trim();
    const emailValue = email.value.trim();
    const pswValue = psw.value.trim();
    const cpswValue = cpsw.value.trim();
    
    let isValid = true;

    if (uNameValue === "") {
        uMsg.textContent = "User name is required";
        uName.classList.add("invalid");
        isValid = false;
    }else{
        uName.classList.add("valid");
        uName.classList.remove("invalid");
        uMsg.textContent = "";
    }

    if (!emailValue.match(regex)) {
        eMsg.textContent = "A valid email is required";
        email.classList.add("invalid");
        isValid = false;
    }else{
        email.classList.add("valid");
        email.classList.remove("invalid");
        eMsg.textContent = "";

    }
    if (pswValue === "") {
        pMsg.textContent = "Password can not be empty";
        psw.classList.add("invalid");
        isValid = false;
    }else{
        psw.classList.add("valid");
        psw.classList.remove("invalid");
        pMsg.textContent = "";


    }
    if (pswValue !== cpswValue || pswValue ==="") {
        cpMsg.textContent = "Passwords do not match";
        cpsw.classList.add("invalid");
        isValid = false;
    }else{
        cpsw.classList.add("valid");
        cpsw.classList.remove("invalid");
        cpMsg.textContent = "";
    }

    return isValid;
}