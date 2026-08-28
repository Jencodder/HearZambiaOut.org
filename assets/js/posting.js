
const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");

burger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});


/* ===== DARK MODE ===== */
const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = () => {
    document.body.classList.toggle("dark");
};

/* ===== RICH TEXT FORMATTING ===== */
function format(command) {
    document.execCommand(command, false, null);
}

/* ===== MCQ SECTION ===== */
function toggleMCQ() {
    document.getElementById("mcqSection").classList.toggle("hidden");
}

/*function addOption() {
    const container = document.getElementById("optionsContainer");

    const row = document.createElement("div");
    row.className = "optionRow";

    row.innerHTML = `
        <input type="text" class="mcqOption" placeholder="Enter option...">
        <button class="removeBtn" onclick="this.parentElement.remove()">X</button>
    `;

    container.appendChild(row);
}*/

/* ===== SUBMIT BUTTON (FOR BACKEND LATER) ===== */
document.getElementById("publishBtn").onclick = () => {
    let content = document.getElementById("editor").innerHTML;
    let options = [];

    document.querySelectorAll(".mcqOption").forEach(op => {
        if (op.value.trim() !== "") options.push(op.value);
    });

    console.log("POST CONTENT:", content);
    console.log("MCQ OPTIONS:", options);

    alert("Ready to send to backend!");
};

function prepareSubmit() {
    document.getElementById('contentInput').value =
    document.getElementById('editor').innerHTML;
    return true;
}