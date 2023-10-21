const output = document.getElementById("output");
const text = `
Initializing hack...
Accessing mainframe...
Cracking security...
`;

let index = 0;

document.addEventListener("keydown", function () {
    if (index < text.length) {
        output.textContent += text[index];
        index++;
    }
});
