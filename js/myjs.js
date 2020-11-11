// JavaScript Document
//多層式選單nav
$(function() {
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        //點擊時避免跟隨href位置
        // event.preventDefault();
        //避免在點擊時關閉菜單
        event.stopPropagation();
        if ($(this).parent().hasClass('open') == false) { //當class=open為否時
            $(this).parent().addClass('open');
        } else {
            $(this).parent().removeClass('open');
        }
    });
});
//側開nav函數
$(function() {
    var sideslider = $('[data-toggle=collapse-side]');
    var get_sidebar = sideslider.attr('data-target-sidebar');
    var get_content = sideslider.attr('data-target-content');
    sideslider.click(function(event) {
        $(get_sidebar).toggleClass('in');
        $(get_content).toggleClass('out');


    });
});

$(".navbar-toggle").click(function() {
    $(".header__dropnav").css("display", "none");
    $(".member").removeClass("member--active");
});

$(document).scroll(function() {
    var y = $(this).scrollTop();

    if (y > 0) {
        $('.header').addClass('navbar-fixed-top');
        
        
    }else if (y == 0) {
         $('.header').removeClass('navbar-fixed-top');
    }

});


//會員專區下拉
$(function() {
    $(".member").click(function() {
        $(".header__dropnav").slideToggle("fast");
        $(".member").toggleClass("member--active");
        $(".overlay").removeClass("overlayswitch");
        $(".side-collapse-left").addClass('in');
    });
});
//分享紅利複製按鈕

$(".copy_btn").click(function() {
    $(".copy_btn i").css("display", "inline-block").show(300).delay(3000).hide(300);
    $(".copy").addClass("f_hidden").delay(3000).queue(function() {
        $(this).removeClass("f_hidden").dequeue();

    });
    $(".copied").removeClass("f_hidden").delay(3000).queue(function() {
        $(this).addClass("f_hidden").dequeue();

    });
});
$(".privatecopy").click(function() {

    $(".copy").addClass("f_hidden").delay(3000).queue(function() {
        $(this).removeClass("f_hidden").dequeue();

    });
    $(".copied").removeClass("f_hidden").delay(3000).queue(function() {
        $(this).addClass("f_hidden").dequeue();

    });
});
//輪撥參數
$('.sliderbanner').slick({ /* 目標類別sliderbanner */
    infinite: true,
    /* 循環 */
    speed: 300,
    /* 速度 */
    slidesToShow: 1,
    /* 顯示圖片張數 */
    slidesToScroll: 1,
    /* 一次跳一張 */
    autoplay: true,
    /* 自動播放 */
    arrows: true,
    /* 左右箭頭 */
    prevArrow: '<button type="button" class="slick-prev Btn-prev">&#10094;</button>',
    nextArrow: '<button type="button" class="slick-next Btn-next">&#10095;</button>',
    autoplaySpeed: 3000,
    /* 輪播速度 */
    dots: true,
    responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
            }
        },


        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});
//捲軸高度控制
$(window).scroll(function() {

    last = 150
    if ($(window).scrollTop() >= last) {
        $(".total2").addClass("totalfix")
    } else { $(".total2").removeClass("totalfix") }
})
//列表切換排列
$(function() {
    $(".listbt").click(function() {
        $(".listbt").addClass("here");
        $(".gridbt").removeClass("here");
        $(".gallery-w").addClass("width100");
        $(".gallery-img").addClass("widthimg");
        $(".gallery-info").addClass("widthinfo");

    });
    $(".gridbt").click(function() {
        $(".listbt").removeClass("here");
        $(".gridbt").addClass("here");
        $(".gallery-w").removeClass("width100");
        $(".gallery-img").removeClass("widthimg");
        $(".gallery-info").removeClass("widthinfo");

    });
});

//發票選項切換
function checkYear() {
    var selectValue = $("select[name='invoiceType']").val();
    if (selectValue == 1) {
        $("#ioption1").show();
        $("#ioption2").hide();
        $("#ioption3").hide();
        $("#ioption4").hide();
        $("#ioption5").hide();

    }
    if (selectValue == 2) {
        $("#ioption1").hide();
        $("#ioption2").show();
        $("#ioption3").hide();
        $("#ioption4").hide();
        $("#ioption5").hide();
    }
    if (selectValue == 3) {
        $("#ioption1").hide();
        $("#ioption2").hide();
        $("#ioption3").show();
        $("#ioption4").hide();
        $("#ioption5").hide();
    }
    if (selectValue == 4) {
        $("#ioption1").hide();
        $("#ioption2").hide();
        $("#ioption3").hide();
        $("#ioption4").show();
        $("#ioption5").hide();
    }
    if (selectValue == 5) {
        $("#ioption1").hide();
        $("#ioption2").hide();
        $("#ioption3").hide();
        $("#ioption4").hide();
        $("#ioption5").show();
    }
}
//認證碼倒數
// var countdown = 300;

// function settime(val) {
//     if (countdown == 0) {
//         val.removeAttribute("disabled");
//         val.value = "免費獲取驗證碼";
//         countdown = 300;
//         return;
//     } else {
//         val.setAttribute("disabled", true);
//         val.value = "重新傳送" + countdown;
//         countdown--;
//     }
//     setTimeout(function() {
//         settime(val);
//     }, 1000);
// }

// window.onload = function() {
//     settime(document.getElementById("btnCountDown"));
// };


//彈框
$('.addcartbt').click(function() {
    swal({
        title: '成功加入購物車',

        type: 'success',
        confirmButtonColor: "#00BFA8",
        confirmButtonText: '確認',
        cencelButton: '取消',
        closeOnConfirm: false,
        closeOnCancel: false,
    });
});
$('.pharmacistbt').click(function() {
    swal({
        title: '<span style="font-size:24px">加價 ＄222元 預約藥師送藥到府服務</span>',
        showCancelButton: true,
        confirmButtonColor: "#00BFA8",
        cancelButtonColor: '#fff',
        confirmButtonText: '確認',
        cancelButtonText: '<span style="color:#666;">關閉</span>',

    }).then(
        function(result) {
            window.location.href = "pharmacist.html";

        });
});
$('.reservationbt').click(function() {
    swal({
        title: '成功加入預約單',

        type: 'success',
        confirmButtonColor: "#00BFA8",
        confirmButtonText: '確認',
        cencelButton: '取消',
        closeOnConfirm: false,
        closeOnCancel: false,
    });
});

$(document).ready(function() {
    $(".fancybox").fancybox({
        // 影像父元素的內距

        maxWidth: 600,
        maxHeight: 600,
        // 自動調整尺寸
        autoSize: false,
        autoHeight: false,
        autoWidth: false,

        autoResize: true,

        // 卷軸（意義不明）
        scrolling: 'no', // 'auto', 'yes' or 'no'

        // 是否啟用左右箭頭
        arrows: true,

        // 是否啟用關閉按鈕
        closeBtn: true,

        // 是否啟用滑鼠滾輪切換
        mouseWheel: true,

        // 是否啟用自動播放
        autoPlay: false,
        playSpeed: 3000,

        // 是否啟用關閉所有控制項模式（可視為上面各個控制功能按鈕的總開關）
        modal: false,

        // 是否啟用循環切換
        loop: true,

        // 切換的漸變方向
        direction: {
            next: 'left',
            prev: 'right'
        },

        // 開啟的效果
        openEffect: 'fade', // 'elastic', 'fade' or 'none'
        openSpeed: 250,
        openEasing: 'swing',
        openOpacity: true,
        openMethod: 'zoomIn',

        // 關閉的效果
        closeEffect: 'fade', // 'elastic', 'fade' or 'none'
        closeSpeed: 250,
        closeEasing: 'swing',
        closeOpacity: true,
        closeMethod: 'zoomOut',

        // 切換至後一項的效果
        nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
        nextSpeed: 250,
        nextEasing: 'swing',
        nextMethod: 'changeIn',

        // 切換至前一項的效果
        prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
        prevSpeed: 250,
        prevEasing: 'swing',
        prevMethod: 'changeOut',

        // 小幫手初始狀態
        helpers: {
            overlay: true,
            title: true
        }
    });
});
$(document).ready(function() {
    $(".fancyboxphone").fancybox({
        // 影像父元素的內距

        maxWidth: 600,
        maxHeight: 400,
        // 自動調整尺寸
        autoSize: false,
        autoHeight: false,
        autoWidth: false,

        autoResize: true,

        // 卷軸（意義不明）
        scrolling: 'no', // 'auto', 'yes' or 'no'

        // 是否啟用左右箭頭
        arrows: true,

        // 是否啟用關閉按鈕
        closeBtn: true,

        // 是否啟用滑鼠滾輪切換
        mouseWheel: true,

        // 是否啟用自動播放
        autoPlay: false,
        playSpeed: 3000,

        // 是否啟用關閉所有控制項模式（可視為上面各個控制功能按鈕的總開關）
        modal: false,

        // 是否啟用循環切換
        loop: true,

        // 切換的漸變方向
        direction: {
            next: 'left',
            prev: 'right'
        },

        // 開啟的效果
        openEffect: 'fade', // 'elastic', 'fade' or 'none'
        openSpeed: 250,
        openEasing: 'swing',
        openOpacity: true,
        openMethod: 'zoomIn',

        // 關閉的效果
        closeEffect: 'fade', // 'elastic', 'fade' or 'none'
        closeSpeed: 250,
        closeEasing: 'swing',
        closeOpacity: true,
        closeMethod: 'zoomOut',

        // 切換至後一項的效果
        nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
        nextSpeed: 250,
        nextEasing: 'swing',
        nextMethod: 'changeIn',

        // 切換至前一項的效果
        prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
        prevSpeed: 250,
        prevEasing: 'swing',
        prevMethod: 'changeOut',

        // 小幫手初始狀態
        helpers: {
            overlay: true,
            title: true
        }
    });
});

/*[ Back to top ]
    ===========================================================*/
var windowH = $(window).height() / 2;

$(window).on('scroll', function() {
    if ($(this).scrollTop() > windowH) {
        $("#myBtn").css('display', 'flex');
    } else {
        $("#myBtn").css('display', 'none');
    }
});

$('#myBtn').on("click", function() {
    $('html, body').animate({ scrollTop: 0 }, 300);
});
/*[ 產品說明展開 ]
    ===========================================================*/


$('.openupbt').click(function() {
    $(this).prev().toggleClass('openup');

    if ($.trim($(this).text()) === '顯示完整資訊') { $(this).text('收合'); } else { $(this).text('顯示完整資訊'); }
});



/*[ +/- num product ]
===========================================================*/



(function($) {
    // USE STRICT
    "use strict";

    /*[ Slick1 ]
    ===========================================================*/
    var itemSlick1 = $('.slick1').find('.item-slick1');
    var action1 = [];
    var action2 = [];
    var action3 = [];
    var cap1Slide1 = [];
    var cap2Slide1 = [];
    var btnSlide1 = [];

    for (var i = 0; i < itemSlick1.length; i++) {
        cap1Slide1[i] = $(itemSlick1[i]).find('.caption1-slide1');
        cap2Slide1[i] = $(itemSlick1[i]).find('.caption2-slide1');
        btnSlide1[i] = $(itemSlick1[i]).find('.wrap-btn-slide1');
    }


    $('.slick1').on('init', function() {

        action1[0] = setTimeout(function() {
            $(cap1Slide1[0]).addClass($(cap1Slide1[0]).data('appear') + ' visible-true');
        }, 200);

        action2[0] = setTimeout(function() {
            $(cap2Slide1[0]).addClass($(cap2Slide1[0]).data('appear') + ' visible-true');
        }, 1000);

        action3[0] = setTimeout(function() {
            $(btnSlide1[0]).addClass($(btnSlide1)[0].data('appear') + ' visible-true');
        }, 1800);
    });


    $('.slick1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        appendDots: $('.wrap-slick1-dots'),
        dotsClass: 'slick1-dots',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick1'),
        prevArrow: '<button class="arrow-slick1 prev-slick1"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick1 next-slick1"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
    });

    $('.slick1').on('afterChange', function(event, slick, currentSlide) {
        for (var i = 0; i < itemSlick1.length; i++) {

            clearTimeout(action1[i]);
            clearTimeout(action2[i]);
            clearTimeout(action3[i]);


            $(cap1Slide1[i]).removeClass($(cap1Slide1[i]).data('appear') + ' visible-true');
            $(cap2Slide1[i]).removeClass($(cap2Slide1[i]).data('appear') + ' visible-true');
            $(btnSlide1[i]).removeClass($(btnSlide1[i]).data('appear') + ' visible-true');

        }

        action1[currentSlide] = setTimeout(function() {
            $(cap1Slide1[currentSlide]).addClass($(cap1Slide1[currentSlide]).data('appear') + ' visible-true');
        }, 200);

        action2[currentSlide] = setTimeout(function() {
            $(cap2Slide1[currentSlide]).addClass($(cap2Slide1[currentSlide]).data('appear') + ' visible-true');
        }, 1000);

        action3[currentSlide] = setTimeout(function() {
            $(btnSlide1[currentSlide]).addClass($(btnSlide1)[currentSlide].data('appear') + ' visible-true');
        }, 1800);
    });



    /*[ Slick2 ]
    ===========================================================*/
    $('.slick2').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick2'),
        prevArrow: '<button class="arrow-slick2 prev-slick2"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick2 next-slick2"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    /*[ Slick3 ]
    ===========================================================*/
    $('.slick3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        appendDots: $('.wrap-slick3-dots'),
        dotsClass: 'slick3-dots',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: false,
        customPaging: function(slick, index) {
            var portrait = $(slick.$slides[index]).data('thumb');
            return '<img src=" ' + portrait + ' "/><div class="slick3-dot-overlay"></div>';
        },
    });
    $(".scanning").show().delay(2000).fadeOut();
    $(".ans").hide().delay(2400).fadeIn();
})(jQuery);