// initialise elements
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

// check for palindromes
const checkIfPalindrome = (input) => {
    
    // store for later ouput
    const originalInput = input;
    
    // clean string
    const regex = /[.,:\i\s]/gi;
    const cleanInput = input.replace(regex, "").toLowerCase();
    
    // throw error if no input
    if (cleanInput === "") {
        alert("Please input a value");
        return;
    }
    
    // hide the previous result
    result.replaceChildren();
    
    // check if input is palindrome
    let resultMessage = `<strong>${originalInput}</strong> ${cleanInput === [...cleanInput].reverse.join('') ? "is" : "is not"} a palindrome.`;
    // spread to reverse it more easily
    
    // display message in result div
    let resultParagraph = document.createElement("p");
    resultParagraph.className = "output";
    resultParagraph.innerHTML = resultMessage;
    result.appendChild(resultParagraph);
    
    result.classList.remove("hidden");
};

checkButton.addEventListener("click", () => {
    checkIfPalindrome(textInput.value);
    textInput.value = "";
});