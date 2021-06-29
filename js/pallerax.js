$(document).ready(function(){

    var introduct=$('.introduct >.introduct_1').offset().top;
    var introduct2=$('.introduct >.introduct_2').offset().top;
    var introduct3=$('.introduct >.introduct_3').offset().top;
    var work_title=$('#section3 > .work_title').offset().top;
    var work_subtitle=$('#section3 > .work_subtitle').offset().top;
    var about_me=$('.about_wrap > .about_me').offset().top;
    var skill_list=$('.skill_list > li').offset().top;
    
 
   
    

    $(window).scroll(function(){
    var scrollPos=$(window).scrollTop();
    if(scrollPos > introduct-($(window).height()/1)){
        $('.introduct > .introduct_1').css({
            'transform' : 'translateY(0px)'
        })
    }else{
        $('.introduct > .introduct_1').css({
            'transform' : 'translateY(-2100px)'
        })
    }


    if(scrollPos > introduct2-($(window).height()/1)){
        $('.introduct > .introduct_2').css({
            'transform' : 'translateY(0px)'
        })
    }else{
        $('.introduct > .introduct_2').css({
            'transform' : 'translateY(-1000px)'
        })
    }


    if(scrollPos > introduct3-($(window).height()/1)){
        $('.introduct > .introduct_3').css({
            'transform' : 'translateY(0px)'
        })
    }else{
        $('.introduct > .introduct_3').css({
            'transform' : 'translateY(-1500px)'
        })
    }

    if(scrollPos > work_title-($(window).height()/4)){
        $('#section3 > .work_title').css({
            'transform' : 'translateY(0px)'
        })
    }else{
        $('#section3 > .work_title').css({
            'transform' : 'translateY(-400px)'
        })
    }

    if(scrollPos >work_subtitle-($(window).height()/4)){
        $('#section3 > .work_subtitle').css({
            'transform' : 'translateY(0px)'
        })
    }else{
        $('#section3 > .work_subtitle').css({
            'transform' : 'translateY(-600px)'
        })
    }


    if(scrollPos > about_me-($(window).height()/1)){
        $('.about_wrap .about_title').css({
            'transform' : 'rotateY(0deg)'
        })
    }else{
        $('.about_wrap .about_title').css({
            'transform' : 'rotateY(180deg)'
        })
    }

    if(scrollPos > skill_list-($(window).height()/5)){
        $('.skill_list > li').css({
            'transform' : 'translateY(0px)'
        })
    }else{
        $('.skill_list > li').css({
            'transform' : 'translateY(-4000px)'
        })
    }

    if(scrollPos > about_me-($(window).height()/3)){
        $('.about_wrap > .about_me').css({
            'transform' : 'translateY(0px)'
        })
    }else{
        $('.about_wrap > .about_me').css({
            'transform' : 'translateY(-4000px)'
        })
    }

    
  


    });
});