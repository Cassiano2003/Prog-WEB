function toggleDarkMode() {
    document.body.classList.toggle("dark");
    var button = document.getElementById("Dark");
    if (document.body.classList.contains("dark")) {
        button.textContent = "☀️ Light Mode";
    } else {
        button.textContent = "🌙 Dark Mode";
    }
}