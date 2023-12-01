document.getElementsByTagName("html")[0].className = "load";

window.onscroll = function () {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.querySelector("nav").classList.add("scroll");
    } else {
        document.querySelector("nav").classList.remove("scroll");
    }
};

let coupons = ["THL", "TEST"];

function validateCoupon(coupons) {
    let couponMessage = document.getElementsByClassName("coupon-message")[0];
    let coupon = document
        .getElementsByClassName("coupon")[0]
        .value.toUpperCase();
    if (coupons.includes(coupon)) {
        couponMessage.innerHTML =
            "Coupon applied successfully. Enjoy your discount!";
        document
            .getElementsByClassName("coupon-message")[0]
            .classList.add("successful");
        document
            .getElementsByClassName("coupon-message")[0]
            .classList.remove("error");
    } else if (coupon === "") {
        couponMessage.innerHTML = "";
    } else {
        couponMessage.innerHTML = "Invalid coupon code entered.";
        document
            .getElementsByClassName("coupon-message")[0]
            .classList.add("error");
        document
            .getElementsByClassName("coupon-message")[0]
            .classList.remove("successful");
    }
    // console.log(coupon);
}

let couponInput = document.getElementsByClassName("coupon")[0];
try {
    couponInput.addEventListener(
        "keyup",
        function () {
            validateCoupon(coupons);
        },
        false
    );
} catch {
    console.log("ERR");
}
