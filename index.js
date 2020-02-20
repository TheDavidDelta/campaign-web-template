const bgContent = document.querySelector(".bg .content");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const arrow = document.querySelector(".header .arrow img");

bgContent.textContent = `${bgContent.textContent} `.repeat(3000);

const navBg = document.defaultView.getComputedStyle(nav).backgroundColor;
nav.style.backgroundColor = navBg.replace("rgb", "rgba").replace(")", ", 0.8)");

arrow.addEventListener("click", () => 
    window.scrollTo({
        top: header.getBoundingClientRect().height - nav.getBoundingClientRect().height,
        behavior: "smooth"
    })
);

tns({
    container: ".quotes-slider",
    mode: "carousel",
    items: 1,
    slideBy: "page",
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    nav: false,
    controls: false
});