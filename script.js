function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "student" && pass === "1234") {
        alert("Login Successful!");
        window.location.href = "notebooks.html";
    } else {
        alert("Invalid Username or Password");
    }
}

function openSubject(subjectName) {
    alert("Opening " + subjectName + " notebook.");
}

let subjects = ["Filipino", "English", "Math", "Science"];

for(let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}