$(document).ready(function() {

    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4'],
        sectionsColor: ['white', '#303d4b', '#fff', '#303d4b'],
        navigation: {
            'position': 'right',
               'tooltips': ['Home', 'Project', 'About', 'Contact']
           },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });


    /*
    * Internal use of the demo website
    */
    $('#showExamples').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $('#examplesList').toggle();
    });

    $('html').click(function(){
        $('#examplesList').hide();
    });
});

$('.navbar-toggle').on('click',function(){
    $('body').removeClass('menu-is-closed').addClass('menu-is-opened');});
    $('.close-menu, .click-capture, .menu-list li a').on('click',function(){$('body').removeClass('menu-is-opened').addClass('menu-is-closed');
    $('.menu-list ul').slideUp(300);});
    $('.menu-list li a').on('click',function(){$('.menu-list li').removeClass('active');
    $(this).closest('li').addClass('active');});if($('.owl-carousel').length>0){$(".review-carousel").owlCarousel({responsive:{0:{items:1},720:{items:1,},1280:{items:1}},responsiveRefreshRate:0,nav:false,navText:[],animateIn:'fadeIn',dots:true});
}

if($('.pagepiling').length>0){
    $('.pagepiling').pagepiling({
        scrollingSpeed:280,loopBottom:true,anchors:['page1','page2','page3','page4'],afterLoad:function(anchorLink,index){if($('.pp-section.active').scrollTop()>0){$('.navbar').removeClass('navbar-white');}
else{$('.navbar').addClass('navbar-white');}}});
}