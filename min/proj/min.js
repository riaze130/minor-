const passwordBox = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]<>?/";

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {

    if(passwordBox.value===""){
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            alert("Password copied!");
        })
        .catch(() => {
            alert("Failed to copy password. Please copy manually.");
        });

});

function generatePassword(){

    let characters="";

    if(uppercase.checked)
        characters+=upperChars;

    if(lowercase.checked)
        characters+=lowerChars;

    if(numbers.checked)
        characters+=numberChars;

    if(symbols.checked)
        characters+=symbolChars;

    if(characters===""){
        alert("Please select at least one option.");
        return;
    }

    let password="";

    for(let i=0;i<lengthSlider.value;i++){

        const randomIndex=Math.floor(Math.random()*characters.length);

        password+=characters[randomIndex];

    }

    passwordBox.value=password;

}