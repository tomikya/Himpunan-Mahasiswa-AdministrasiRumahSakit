// navbar
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

// navbar end

// banner
function resize() {
    var konten = document.getElementsByClassName("content-awal");
    for (i = 0; i < konten.length; i++) {
        konten[i].style.width = window.innerWidth + 'px';
    }
}
window.addEventListener('resize', function () {
    resize();
});

resize();

// beritaaaaaa slider
