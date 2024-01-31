const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Animation() {
    let elemC = document.querySelector("#elem-container")
    let fixed = document.querySelector(".fixed-images")
    elemC.addEventListener("mouseenter", () => {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", () => {
        fixed.style.display = "none"
    })

    let elems = document.querySelectorAll(".elem")
    elems.forEach((e) => {
        e.addEventListener("mouseenter", () => {
            let image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })

}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100
    });
}

function menuAnimation() {
    let full = document.querySelector("#full-scr")
    let menu = document.querySelector("nav h3")
    let navimg = document.querySelector("nav img")
    let flag = 0
    menu.addEventListener("click", () => {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    let loader = document.querySelector("#loader")
    setTimeout(() => {
        loader.style.top = "-100%"
    }, 4000)
}

loaderAnimation()    
swiperAnimation()
page3Animation()
// menuAnimation()


