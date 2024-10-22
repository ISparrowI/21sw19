function changeInfo() {
    const names = ["Ahsan Ali", "Mujtaba", "Qadir", "Ahmed"];
    const rollNumbers = ["21sw19", "21sw20", "21sw21", "21sw22"];

    const randomIndex = Math.floor(Math.random() * names.length);

    document.getElementById("studentName").innerText = names[randomIndex];
    document.getElementById("rollNumber").innerText = "Roll Number: " + rollNumbers[randomIndex];
}
