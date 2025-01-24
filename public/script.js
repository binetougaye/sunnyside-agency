const mediaScreen = window.matchMedia('(max-width: 700px)')
const navItems = document.querySelector(".nav-items")
const iconHamburger = document.querySelector(".fa-bars")
function handleBtnHamburger(e) {
    if (e.matches) {
        navItems.classList.add('hidden')
        navItems.classList.remove('active')
        iconHamburger.classList.add('active')
        iconHamburger.classList.remove('hidden')


    } else {
        navItems.classList.remove('hidden')
        navItems.classList.add('active')
        iconHamburger.classList.remove('active')
        iconHamburger.classList.add('hidden')

    }
}
mediaScreen.addEventListener("change", handleBtnHamburger)
handleBtnHamburger(mediaScreen)