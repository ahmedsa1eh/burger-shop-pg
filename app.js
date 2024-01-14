let menuIcon = document.querySelector(".menu-icon");
let navBar = document.querySelector(".nav-bar")
//  nav bar toggle 
menuIcon.addEventListener("click", () => {
  if (menuIcon.classList.contains("fa-bars")) {
    navBar.classList.add("active-nav-bar")
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.remove("menu-bars-icon");
    menuIcon.classList.add("fa-xmark");
    menuIcon.classList.add("menu-x-icon");

  }
   else {
    navBar.classList.remove("active-nav-bar")
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.remove("menu-x-icon");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.add("menu-bars-icon");
    
  }
});
