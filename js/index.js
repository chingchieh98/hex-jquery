// 下拉式選單
$('.dropdown').click(function (event) {
    event.preventDefault();
    $('.dropdown-open').slideToggle();
})
// down to top
$('.top a').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop:0
    }, 300);
});
// light box
lightbox.option({
    'resizeDuration': 400,
});
// Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});
 

