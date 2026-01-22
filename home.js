function logout() {
    // ✅ Logout केल्यावर थेट Signup page open होईल
    window.location.href = "index.html?signup=true";
}

function openChatbot() {
    window.location.href = "chatbot.html";
}

/* Scroll Animation */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function go(page) {
    window.location.href = page;
}

/* Close menu when clicking outside */
document.addEventListener("click", function (e) {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");

    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.style.display = "none";
    }
});
