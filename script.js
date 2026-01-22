function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

function changeTheme(theme) {
    if (theme === "pink") {
        document.documentElement.style.setProperty("--primaryColor", "#e88bb0");
        document.documentElement.style.setProperty("--backgroundSoft", "#fff7fb");
        document.documentElement.style.setProperty("--borderSoft", "#f3b6d0");
    }

    if (theme === "darkPink") {
        document.documentElement.style.setProperty("--primaryColor", "#c44575");
        document.documentElement.style.setProperty("--backgroundSoft", "#fde9f1");
        document.documentElement.style.setProperty("--borderSoft", "#e3a1bc");
    }

    if (theme === "brown") {
        document.documentElement.style.setProperty("--primaryColor", "#8b5e3c");
        document.documentElement.style.setProperty("--backgroundSoft", "#f6efe9");
        document.documentElement.style.setProperty("--borderSoft", "#c9ad96");
    }
}

function filterMenu(category) {
    const items = document.querySelectorAll(".menuCard");
    const buttons = document.querySelectorAll(".menuTabs button");

    buttons.forEach(button => button.classList.remove("activeTab"));

    event.target.classList.add("activeTab");

    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
});
