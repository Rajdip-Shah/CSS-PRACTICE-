let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let distant_mountains = document.getElementById("distant-mountains")
let mountains_front = document.getElementById("mountains_front")
let text = document.getElementById("text")
let btn = document.getElementById("btn")
let sec = document.getElementById("sec")
let header = document.querySelector("header")
console.log("WORKING")
window.addEventListener("scroll", function ()
    {
        let value = window.scrollY ;
        // starts.style.left = value*0.25 + "px";
        moon.style.top = value*1.05 + "px";
        distant_mountains.style.top = value*0.5 + "px";
        // distant_mountains.style.left = value*0.5 + "px";
        mountains_front.style.top = value*0 + "px";
        text.style.marginRight = value*3 + "px";
        text.style.marginTop = value*1.5 + "px";
        btn.style.marginTop = value*1.5 + "px";
        header.style;e.top = value * 0.5 + "px";
    }

)