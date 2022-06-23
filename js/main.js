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

//fixedpart   --------------------------------------- setting
//1 show-hide setting
$('.optionssetting').hide()
$('.islid').click(function() {
    $('.optionssetting').toggle(500)
})

//2  setting  change color
$('.ulcolor li').click(function(e) {
    // console.log($(this).css('background-color'));
    // console.log($(e.target).css('backgroundColor'));
    let selectecolor = $(this).css('background-color');
    $('p,i,h1').css({
            'color': selectecolor,
            'transition': 'all 1s'
        })
        // handel focuson clicked color 
    $(this).css('border', 'solid 2px yellow')
        // $(this).siblings().css('border', 'none')   not working
    $(this).siblings().css('border-style', 'none')
})

//3 setting change img
$('.optionssetting img').click(function() {
    let selectedsrc = $(this).attr('src')
    console.log(selectedsrc);
    console.log($('.carousel-item img').attr('src'));
    $('.carousel-item img').attr('src', selectedsrc)
    console.log($('.carousel-item img'));

})


//4- loading screen
$(document).ready(function() {
    // $('.loading').removeClass('d-flex').addClass('d-none')   //workig
    // $('.loading').replace('d-flex', 'd-none')  not working
    // use jq ui
    // note   time not working with slideup
    $('.loading').slideUp(500, function() {
        $('.loading').switchClass('d-flex', 'd-none', function() {
            $('body').removeClass('overflow-hidden')
        })
    })

})