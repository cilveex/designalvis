document.addEventListener("DOMContentLoaded", function () {
    const fonts = [
        "Poppins", "Montserrat", "Inter", "Nunito", "Roboto",
        "Source Sans Pro", "Work Sans", "Fira Sans", "DM Sans", "Hind",
        "Karla", "Ubuntu", "Quicksand", "Manrope", "Jost",
        "Barlow", "Mukta", "Rubik", "Lexend", "Assistant"
    ];
    

    const word = document.getElementById("changing-font");

    // Ensure the outlined text effect is always applied
    word.classList.add("outlined-text");

    // Calculate the widest font width
    let maxWidth = 0;
    let maxHeight = 0;
    const testElement = document.createElement("span");
    testElement.style.position = "absolute";
    testElement.style.visibility = "hidden";
    testElement.style.fontSize = "1em";
    testElement.textContent = "PURPOSE";
    document.body.appendChild(testElement);

    fonts.forEach(font => {
        testElement.style.fontFamily = font;
        maxWidth = Math.max(maxWidth, testElement.offsetWidth);
        maxHeight = Math.max(maxHeight, testElement.offsetHeight);
    });

    document.body.removeChild(testElement);

    // Apply fixed width and height to prevent shifting
    word.style.width = maxWidth + "px";
    word.style.height = maxHeight + "px";

    let index = 0;
    function changeFont() {
        word.style.fontFamily = fonts[index]; // Apply the font
        index = (index + 1) % fonts.length; // Loop through fonts
    }

    // Change font every 1.5 seconds
    setInterval(changeFont, 350);
});
