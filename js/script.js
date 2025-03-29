function randomHexDigit () {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let index = Math.floor(Math.random() * digits.length);
    return digits[index];
};

function randomHexCode () {
    let colorDigits = ["#", randomHexDigit(), randomHexDigit(), randomHexDigit(), randomHexDigit(), randomHexDigit(), randomHexDigit()];
    let colorCode = colorDigits.join("");
    return colorCode;
};

function changeBGColor () {
    const pickedColor = randomHexCode();

    document.body.style.backgroundColor = pickedColor;
    document.getElementById("colorName").innerHTML = pickedColor;
};