function logout() {
    window.location.href = "index.html?signup=true";
}

function goHome() {
    window.location.href = "home.html";
}

function updateProfile() {
    const btn = document.getElementById("updateBtn");
    const text = document.getElementById("successText");
    const card = document.getElementById("profileCard");
    const toast = document.getElementById("toast");

    // Button loading effect
    btn.innerText = "Updating...";
    btn.classList.add("loading");
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = "Update Profile";
        btn.classList.remove("loading");
        btn.disabled = false;

        text.style.display = "block";
        card.classList.add("success");

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
            card.classList.remove("success");
        }, 2000);

    }, 1200);
}
