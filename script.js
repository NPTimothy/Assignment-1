window.onscroll = function () {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.querySelector("nav").classList.add("scroll");
    } else {
        document.querySelector("nav").classList.remove("scroll");
    }
};
