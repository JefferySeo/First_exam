$(function(){
    //네비게이션 셋팅
    $('.gnb').hover(function(){
        $(this).find('.lnb').fadeToggle();
    });

    //슬라이드
    /*
    $('box').before('악');    append  prepend
    $('.slidein').append('img');    fdgsd(img)
    $('img')appendTo('.slidein')
    */

    setInterval(mySlide,3000);
    function mySlide(){
        $('.slidein').animate({
            'left': "-1200px"
        },500, function(){
            //slidein 안에있는 첫번째 이미지를
            $('.slidein img:first-child')
            //복제해서
            .clone()
            //slidein 박스의 뒤에 붙여라.
            .appendTo('.slidein');
            $('.slidein img:first-child').remove();
            $('.slidein').css('left',0);
        });
    }
}); // jquery