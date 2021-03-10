//requires jQuery

// Fade the element when them out of screen (with threshold)
// {
//     $(window).scroll(function(){
//     var threshold = 200; // number of pixels before bottom of page that you want to start fading
//     var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
//     if( op <= -1 ){
//         $(".section1").hide();
//         $(".arrowBounce").hide();
//     } else {
//         $(".section1").show();
//     }
//     $(".section1").css("opacity", op); 
//     $(".arrowBounce").css("opacity", op-0.5); 
//     });
// }


function randItem(items) {
    return items[Math.floor(Math.random() * items.length)];
} {

    var messages = [
        "Hello and Greeting a stranger. I'm Slickle!",
        "Hey! What are you doing ?!",
        "It’s nice to meet you. Let's look around.",
        "What is the meaning of a smile?",
        "Roses are red, violets are blue, I'm schizophrenic, and so am I.</br>&nbsp;&nbsp;&nbsp;&nbsp;<b>Oscar Levant</b>",
        "Man cannot live by bread alone; he must have peanut butter.</br>&nbsp;&nbsp;&nbsp;&nbsp;<b>James A. Garfield</b>",
        "We are going to be best friends forever... besides you already know too much.",
        "Let me say something...",
        "People say nothing is impossible, but I do nothing every day.</br>&nbsp;&nbsp;&nbsp;&nbsp;<b>A. A. Milne</b>",
        "Sometimes when I close my eyes, I can't see.",
        "I'm multitasking: I can listen ignore and forget at the same time.",
        "Don't worry if plan A fails, there are 25 more letters in the alphabet.",
        "You never realize what you have until it's gone. Toilet paper is a good example.",
        "A cop pulled me over and told me \"Papers\", so I said \"Scissors, I win!\" and drove off",
        "You have Facebook? Yup. You have Whatsapp? Yup. You have love? Forgot to install it.",
        "In the morning I can't eat, I'm thinking of you. In the evening I can't eat, I'm thinking of you.</br>&nbsp;&nbsp;In the night I can't sleep.. I'm so hungry!",
        "Who says nothing is impossible? I've been doing nothing <b>for years</b>.",
        "When nothing is going right, go left!.",
        "I hate when people ask me what I'm doing tomorrow, I don't even know what I'm doing today.",
        "You wanna know who I'm in love with? Read the <b>first</b> word again.",
        "I thought about losing weight once, but I don't like losing.",
        "My wallet is like an onion, opening it makes me cry.",
        "When you fall, I will be there to catch you - With love, the floor.",
        "Why did Adele cross the road? To say 'Hello' from the other side.",
        "Today I laughed until my abs started hurting, so I can skip the gym."
    ];

    // Change text message part

    $(".section1 > .cat-intro").hover(function () {
        $(".message-div span").html(randItem(messages));
    });
}


{
    var nameModal = document.querySelector(".name-modal");
    var nameIcon = document.querySelector(".name");
    var closeName = document.querySelector(".name-modal .close");

    nameIcon.onclick = function () {
        nameModal.style.display = "block";
    };

    closeName.onclick = function () {
        nameModal.style.display = "none";
    };

    var birthModal = document.querySelector(".birth-modal");
    var birthIcon = document.querySelector(".birth");
    var closeBirth = document.querySelector(".birth-modal .close");

    birthIcon.onclick = function () {
        birthModal.style.display = "block";
    };

    closeBirth.onclick = function () {
        birthModal.style.display = "none";
    };

    var eduModal = document.querySelector(".edu-modal");
    var eduIcon = document.querySelector(".edu");
    var closeEdu = document.querySelector(".edu-modal .close");

    eduIcon.onclick = function () {
        eduModal.style.display = "block";
    };

    closeEdu.onclick = function () {
        eduModal.style.display = "none";
    };

    var skillModal = document.querySelector(".experiences-modal");
    var skillIcon = document.querySelector(".experiences");
    var closeSkill = document.querySelector(".experiences-modal .close");

    skillIcon.onclick = function () {
        skillModal.style.display = "block";
    };

    closeSkill.onclick = function () {
        skillModal.style.display = "none";
    };

    var hobbyModal = document.querySelector(".hobby-modal");
    var hobbyIcon = document.querySelector(".hobby");
    var closeHobby = document.querySelector(".hobby-modal .close");

    hobbyIcon.onclick = function () {
        hobbyModal.style.display = "block";
    };

    closeHobby.onclick = function () {
        hobbyModal.style.display = "none";
    };

    var interestModal = document.querySelector(".interest-modal");
    var interestIcon = document.querySelector(".interest");
    var closeInterest = document.querySelector(".interest-modal .close");

    interestIcon.onclick = function () {
        interestModal.style.display = "block";
    };

    closeInterest.onclick = function () {
        interestModal.style.display = "none";
    };

    window.onclick = function () {
        if (event.target == nameModal) {
            nameModal.style.display = "none";
        } else if (event.target == birthModal) {
            birthModal.style.display = "none";
        } else if (event.target == eduModal) {
            eduModal.style.display = "none";
        } else if (event.target == skillModal) {
            skillModal.style.display = "none";
        } else if (event.target == hobbyModal) {
            hobbyModal.style.display = "none";
        } else if (event.target == interestModal) {
            interestModal.style.display = "none";
        }
    };
}

{
    setInterval(updateTime, 20);
}

function updateTime() {
    var date = new Date();
    $(".date").html(date.toDateString());
    $(".time").html(formatNumber(date.getHours()) + " : " + formatNumber(date.getMinutes()) + " : " + formatNumber(date.getSeconds()));
    $(".greeting").html(sayHiAndChangeIcon(date.getHours()));
}

function sayHiAndChangeIcon(hour) {
    if (hour >= 5 && hour < 12) {
        $(".day-time-icon").attr("src", "./img/morning.svg");
        return "Good morning stranger!";
    } else if (hour >= 12 && hour < 18) {
        $(".day-time-icon").attr("src", "./img/afternoon.svg");
        return "Good afternoon stranger!";
    } else if (hour >= 18 && hour < 21) {
        $(".day-time-icon").attr("src", "./img/night.svg");
        return "Good evening stranger!";
    } else if (hour >= 21 && hour < 24) {
        $(".day-time-icon").attr("src", "./img/night.svg");
        return "Good night stranger!";
    } else {
        $(".day-time-icon").attr("src", "./img/midnight.svg");
        return "Good midnight stranger!";
    }
}

function formatNumber(number) {
    return (number < 10) ? '0' + number : number;
}
