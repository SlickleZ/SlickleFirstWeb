function check_if_in_view(element, window, className, forever) {
    var window_height = window.height();
    var window_top_position = window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each(element, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass(className);
        }
        if (forever === true) {
            if (!((element_bottom_position >= window_top_position) &&
                    (element_top_position <= window_bottom_position))) {
                $element.removeClass(className);
            }
        }
    });
}

{
    $(".java-db-content").click(function () {
        $(".java-db-content > .skill-list").slideToggle(250);
        $(".java-db-content > .skill-list").addClass("fadeSlideleft");
    });
    $(".java-game").click(function () {
        $(".java-game > .skill-list").slideToggle(250);
        $(".java-game > .skill-list").addClass("fadeSlideleft");
    });
    $(".esp32-color-sensor").click(function () {
        $(".esp32-color-sensor > .skill-list").slideToggle(250);
        $(".esp32-color-sensor > .skill-list").addClass("fadeSlideleft");
    });
}

$(".hobby").click(function () {
    $(".music-div").addClass("fadeSlideLeftTran");
    $(".game-div").addClass("fadeSlideRightTran");
});


$(".university > .school-img").click(function () {
    $(".university .school-name").toggleClass(function () {
        return $(this).is(".schoolNameSlideLeft, .EduSlideRight") ? 'schoolNameSlideLeft EduSlideRight' : 'schoolNameSlideLeft';
    });
    $(".university .program").toggleClass(function () {
        return $(this).is(".programNameSlideLeft, .EduSlideRight") ? 'programNameSlideLeft EduSlideRight' : 'programNameSlideLeft';
    });
    $(".university .duration").toggleClass(function () {
        return $(this).is(".durationsSlideLeft, .EduSlideRight") ? 'durationsSlideLeft EduSlideRight' : 'durationsSlideLeft';
    });
});

$(".sr-school > .school-img").click(function () {
    $(".sr-school .school-name").toggleClass(function () {
        return $(this).is(".schoolNameSlideLeft, .EduSlideRight") ? 'schoolNameSlideLeft EduSlideRight' : 'schoolNameSlideLeft';
    });
    $(".sr-school .program").toggleClass(function () {
        return $(this).is(".programNameSlideLeft, .EduSlideRight") ? 'programNameSlideLeft EduSlideRight' : 'programNameSlideLeft';
    });
    $(".sr-school .duration").toggleClass(function () {
        return $(this).is(".durationsSlideLeft, .EduSlideRight") ? 'durationsSlideLeft EduSlideRight' : 'durationsSlideLeft';
    });
});

$(".jr-school > .school-img").click(function () {
    $(".jr-school .school-name").toggleClass(function () {
        return $(this).is(".schoolNameSlideLeft, .EduSlideRight") ? 'schoolNameSlideLeft EduSlideRight' : 'schoolNameSlideLeft';
    });
    $(".jr-school .duration").toggleClass(function () {
        return $(this).is(".durationsSlideLeft, .EduSlideRight") ? 'durationsSlideLeft EduSlideRight' : 'durationsSlideLeft';
    });
});

$(".pri-school > .school-img").click(function () {
    $(".pri-school .school-name").toggleClass(function () {
        return $(this).is(".schoolNameSlideLeft, .EduSlideRight") ? 'schoolNameSlideLeft EduSlideRight' : 'schoolNameSlideLeft';
    });
    $(".pri-school .duration").toggleClass(function () {
        return $(this).is(".durationsSlideLeft, .EduSlideRight") ? 'durationsSlideLeft EduSlideRight' : 'durationsSlideLeft';
    });
});

$(".section1, .section2").css("height", "" + $(window).height());

$(".interest").click(function () {
    $(".data-eng > img").addClass("card1fromLeft");
    $(".data-eng > .interest-header").addClass("card2fromLeft");
    $(".data-eng > .interest-content").addClass("card3fromLeft");
    $(".drumming > img").addClass("card4fromLeft");
    $(".drumming > .interest-header").addClass("card5fromLeft");
    $(".drumming > .interest-content").addClass("card6fromLeft");
});

$(window).on('scroll resize', function () {
    check_if_in_view($("#intro"), $(window), "fadeSlideDown", true);
    check_if_in_view($("#scene"), $(window), "fadeSlideRightTran", true);
    check_if_in_view($(".desc"), $(window), "fadeSlideleft", true);
    check_if_in_view($(".name"), $(window), "card1fromLeft", false);
    check_if_in_view($(".birth"), $(window), "card2fromLeft", false);
    check_if_in_view($(".edu"), $(window), "card3fromLeft", false);
    check_if_in_view($(".experiences"), $(window), "card1fromRight", false);
    check_if_in_view($(".hobby"), $(window), "card2fromRight", false);
    check_if_in_view($(".interest"), $(window), "card3fromRight", false);
    check_if_in_view($(".link-facebook"), $(window), "facebook", false);
    check_if_in_view($(".link-instagram"), $(window), "instagram", false);
    check_if_in_view($(".link-gmail"), $(window), "mail", false);
    check_if_in_view($(".link-tell"), $(window), "tel", false);
    check_if_in_view($(".mottos"), $(window), "fadeSlideDown", false);
});


// trigger auto scroll event. If move this statement out, scroll manaul scroll to start the animation
$(window).trigger('scroll');