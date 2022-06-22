/// <reference path="../typings/globals/jquery/index.d.ts" />

$(window).scroll(function() {
    let scrolheight = $(window).scrollTop()

    let Homeheight = $('#Home').height()
    if (scrolheight > Homeheight) {
        $('.navbar').removeClass('bg-white')
        $('.navbar').addClass('bg-info')
            //note add transition to navbar in css
            //transition: all 1.5s;
            //fixwd arrowup
        $('.fixedarrowup').show(700)
    } else {
        $('.navbar').addClass('bg-white')
            //fixwd arrowup
        $('.fixedarrowup').hide(700)
    }

})

//another solution    applying  with specific point in page 
//  using offset()
// offset()  return object   Object { top: 691, left: 16 }
// $(window).scroll(function() {
//     let scrolheight = $(window).scrollTop()
//     let Teamheight = $('#Team').offset().top
//     console.log(Teamheight);
//     if (scrolheight > Teamheight) {
//         $('.navbar').removeClass('bg-info')
//         $('.navbar').addClass('bg-danger')
//             //note add transition to css
//             //transition: all 1.5s;
//     } else {
//         $('.navbar').addClass('bg-white')
//     }
// })
//
//

//fixwd arrowup animate
// smooth scroll with fixwd arrowup
$('.fixedarrowup').click(function() {
        $('body,html').animate({
            scrollTop: '0'
        }, 1200)
    })
    //smooth scroll with
$('.nav-link').click(function() {
    // console.log(this);
    let selectedli = $(this).attr('href')
    let selectedlioffset = $(selectedli).offset().top
    $('body,html').animate({
        scrollTop: selectedlioffset
    }, 1200)
})

//fixedpart    setting
//1 show-hide setting
$('.options').hide()
$('.islid').click(function() {
    $('.options').toggle(500)
})