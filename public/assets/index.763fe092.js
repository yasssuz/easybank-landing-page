function e(e){return document.querySelector(e)}const t=e(".header__mobile-toggler");t.addEventListener("click",(()=>(t.classList.toggle("active"),e(".header__navigation").classList.toggle("active"),e("html").classList.toggle("navbar-active"),void e("#overlay").classList.toggle("active"))));