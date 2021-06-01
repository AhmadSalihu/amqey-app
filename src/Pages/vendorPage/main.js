
const showMenu = (headerToggle, navbarId) => {
    window.onload = function () {
        const toggleBtn = document.getElementById(headerToggle),
        nav = document.getElementById(navbarId);
        if (toggleBtn) {
            console.log(toggleBtn)
            toggleBtn.addEventListener("click", (e) => { 
                nav.classList.toggle("show-menu");
                //changeIcon
                toggleBtn.classList.toggle("bx-x");
            });
        }
    };
    
};
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))