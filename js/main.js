/// <reference path="../typings/globals/jquery/index.d.ts" />

$(window).scroll(function() {

    let scrolheight = $(window).scrollTop()
    console.log(scrolheight);
    let Homeheight = $('#Home').height()
    if (scrolheight > Homeheight) {
        $('.navbar').removeClass('bg-white')
        $('.navbar').addClass('bg-info')
            //note add transition to css
            //transition: all 1.5s;
    } else {
        $('.navbar').addClass('bg-white')
    }
})

//another solution    applying  with specific point in page 
//  using offset()
// offset()  return object   Object { top: 691, left: 16 }
$(window).scroll(function() {
    let scrolheight = $(window).scrollTop()
    let Teamheight = $('#Team').offset().top
    console.log(Teamheight);
    if (scrolheight > Teamheight) {
        $('.navbar').removeClass('bg-info')
        $('.navbar').addClass('bg-danger')
            //note add transition to css
            //transition: all 1.5s;
    } else {
        $('.navbar').addClass('bg-white')
    }
})