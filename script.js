const text = "So much space|so little time.";
let i = 0;
let typingText = "";

function type() {
    if (i < text.length) {
        // If the current character is the custom break symbol "|", insert <br>
        if (text.charAt(i) === "|") {
            typingText += "<br>";
        } else {
            typingText += text.charAt(i);
        }

        document.getElementById("typingText").innerHTML = typingText;
        i++;
        setTimeout(type, 100);
    }
}

window.onload = type;


