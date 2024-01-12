let btn = document.querySelector(".up")

window.onscroll = function () {
    if (scrollY >= 900 ) {
        btn.style.display = "block"
    }
    else {
        btn.style.display = "none"
    }
}
btn.onclick = function () {
    window.scrollTo(0,0);
}

let icon  = document.querySelector("header .container .icon i")
let nav = document.querySelector ("header .container .icon i + nav")

icon.addEventListener ("click" , () => {
    nav.classList.toggle ("active")
})


