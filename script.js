function showSignup() {
    document.getElementById("signupModal").style.display = "flex";
}

function closeSignup() {
    document.getElementById("signupModal").style.display = "none";
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username === "" || password === "") {
        alert("Username आणि Password टाका");
        return;
    }

    window.location.href = "home.html";
}

function signup() {
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (username === "" || email === "" || password === "") {
        alert("सगळी माहिती भरा");
        return;
    }

    alert("Account created successfully");
    closeSignup();
}

// 🔹 LOGOUT नंतर SIGNUP AUTO OPEN
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    if (params.get("signup") === "true") {
        showSignup();
    }
};
