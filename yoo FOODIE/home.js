// const logo = document.querySelector(".logo");
// console.log (logo);
// logo.addEventListener('click', e => {
//     alert("The LOGO has been attacked, YOU MUST PROTECT IT GREAT WARRIOR ")
// });
// const deData = document.window.querySelector("header");
// console.log(deData);

// ------Nav Change On Scroll ----------
window.addEventListener("scroll", 
    function scroll() {
        var navBar = document.getElementsByTagName('HEADER')
        navBar[0].classList.toggle('scroll',window.scrollY>0 )
        }
)