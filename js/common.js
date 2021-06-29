$(document).ready(function () {

    /*welcome*/
    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;

    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
    typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
    if (typingBool == false) { // 타이핑이 진행되지 않았다면 
        typingBool = true;
        var tyInt = setInterval(typing, 200); // 반복동작 
    }

    function typing() {
        if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
            $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++;
        } else { //한문장이끝나면
            //다음문장으로.. 마지막문장이면 다시 첫번째 문장으로 
            if (liIndex >= liLength - 1) {
                liIndex = 0;
            } else {
                liIndex++;
            }

            //다음문장을 타이핑하기위한 셋팅
            typingIdx = 0;
            typingBool = false;
            typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

            //다음문장 타이핑전 1초 쉰다
            clearInterval(tyInt);
            setTimeout(function () {
                $(".typing").html('');
                tyInt = setInterval(typing, 100);
            }, 1000);
        }
    }
    //bg
    function init() {

        //bling_Stars

        var style = ["style1", "style2", "style3", "style4"];
        var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
        var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

        function getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        var bling_Star = "";
        var qtdebling_Stars = 250;
        var noite = document.querySelector(".star1");
        var widthWindow = window.innerWidth;
        var heightWindow = window.innerHeight;

        for (var i = 0; i < qtdebling_Stars; i++) {
            bling_Star += "<span class='bling_Star " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
                + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." + getRandomArbitrary(0, 9) + "s; left: "
                + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
        }

        noite.innerHTML = bling_Star;

        //meteoro

        var number = 5000;

        setTimeout(function () {
            move_stars();
        }, number);

        function move_stars() {
            setTimeout(move_stars, number);
            number = getRandomArbitrary(5000, 10000);
            var meteoro = "<div class='meteoro " + style[getRandomArbitrary(0, 4)] + "'></div>";
            document.getElementsByClassName('star2')[0].innerHTML = meteoro;
            setTimeout(function () {
                document.getElementsByClassName('star2')[0].innerHTML = "";
            }, 1000);
        }

    }
    window.onload = init;

    /*scroll*/
    $('a[href^="#"]').on('click', function (e) { /*$('a')*/

        e.preventDefault();
        var target = $($(this).attr('href'));
        // console.log(target)
        if (target.length) {   //만약에 1이라면 
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600)
        }
    })

    /*dotbtn*/
    var dot = $('#dot>ul>li');
    var cont = $('#container .section');

    /*스크롤내리면 다음페이지*/
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        for (var i = 0; i < cont.length; i++) {
            if (wScroll >= cont.eq(i).offset().top) {
                dot.removeClass('active');
                dot.eq(i).addClass('active');

            }
            if (wScroll >= cont.eq(i).offset().top - $(window).height() / 30) {
                cont.eq(i).addClass('show')
            } else {
                cont.eq(i).removeClass('show')
            }
        }

    })

    /*dot 페이지이동*/
    var dot = $('#dot>ul>li');
    var cont = $('#container > section');

    dot.click(function (e) {
        e.preventDefault();
        var num = $(this).index();
        var section = cont.eq(num)
        var offset = section.offset().top;
        $('html,body').animate({
            scrollTop: offset
        }, 600, 'easeInOutExpo')
    });

    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        for (var i = 0; i < cont.length; i++) {
            if (wScroll >= cont.eq(i).offset().top) {
                dot.removeClass('active');
                dot.eq(i).addClass('active');

            }
            if (wScroll >= cont.eq(i).offset().top - $(window).height() / 1) {
                cont.eq(i).addClass('show')
            } else {
                cont.eq(i).removeClass('show')
            }
        }

    })




    /*profile*/
    $('.more').on('click', function () {
        $('#section5 ').css({
            display: 'block'
        })
    });
    $('.close').on('click', function () {
        $('#section5 ').css({
            display: 'none'
        })
    });

    $('.more2').on('click', function () {
        $('#section5-2 ').css({
            display: 'block'
        })
    });
    $('.close2').on('click', function () {
        $('#section5-2 ').css({
            display: 'none'
        })
    });






});




