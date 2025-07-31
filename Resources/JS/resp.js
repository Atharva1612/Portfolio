document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById('nav')
    const burger = document.getElementById('burger')

    burger.addEventListener('click', () => {
        nav.classList.toggle("hidden")
    })
});