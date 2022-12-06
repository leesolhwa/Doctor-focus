$(function(){
    $('.use_info .btn_wrap .use_info_btn').on('click', function(){
        $(this).closest('.btn_wrap').find('.use_info_btn').removeClass('active');
        $(this).addClass('active');
    });
    var swiper = new Swiper(".swiper-code", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});