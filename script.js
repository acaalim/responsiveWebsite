const menuBtn = document.querySelector('.menu-btn');

// main toggle
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
})

// toggle on item click if open
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        if (menuBtn.classList.contains("open")) {
            toggle();
        }
    });
});