
$(document).ready(function() {
    // 掃描動畫
    $(".scanning").show().delay(2000).fadeOut();
    $(".ans").hide().delay(2400).fadeIn();

    // 雷射標籤輪播
    $('.demoslider').slick({
        arrows:true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
      AOS.init();
});



