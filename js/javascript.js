$(document).ready(function(){
    // пазл из овцы
    let rotat1 = 0;
    $(".pzl_1").click(function(){
        rotat1 +=90;
        $(this).css("transform", `rotate(${rotat1}deg)`)
    });

    let rotat2 = 0;
    $(".pzl_2").click(function(){
        rotat2 +=90;
        $(this).css("transform", `rotate(${rotat2}deg)`)
    });

    let rotat3 = 0;
    $(".pzl_3").click(function(){
        rotat3 +=90;
        $(this).css("transform", `rotate(${rotat3}deg)`)
    });

    let rotat4 = 0;
    $(".pzl_4").click(function(){
        rotat4 +=90;
        $(this).css("transform", `rotate(${rotat4}deg)`)
    });

    // двигаем овец
    $(".sheep1, .sheep2, .sheep3, .sheep4, .sheep5, .sheep6, .sheep7, .sheep8, .sheep9, .sheep10").draggable();
    $(".sheep11, .sheep12, .sheep13, .sheep14, .sheep15, .sheep16, .sheep17, .sheep18, .sheep19, .sheep20, .sheep21, .sheep22").draggable();

    // // двигаем листья
    // $(".leave1, .leave2, .leave3").draggable();

    $(".leave1, .leave2, .leave3").draggable({
        revert: "invalid", // возврат на исходное место, если не удалось переместить
        start: function(event, ui) {
            // показываем элемент при начале перетаскивания
            $(this).show();
        }
    });

    $(".eatingsheep").droppable({
        drop: function(event, ui) {
            // скрываем элемент при успешном перетаскивании
            ui.draggable.hide();
        }
    });

    // мигающие глаза
    $(".eyes1").click(function () {
        if ($('.eyes1').hasClass("bg1")) {
          $('.eyes1').removeClass("bg1");
          $('.eyes1').addClass("bg1_1");
        } else if ($('.eyes1').hasClass("bg1_1")) {
          $('.eyes1').removeClass("bg1_1");
          $('.eyes1').addClass("bg1");
        }
      });

      $(".eyes2").click(function () {
        if ($('.eyes2').hasClass("bg2")) {
          $('.eyes2').removeClass("bg2");
          $('.eyes2').addClass("bg2_2");
        } else if ($('.eyes2').hasClass("bg2_2")) {
          $('.eyes2').removeClass("bg2_2");
          $('.eyes2').addClass("bg2");
        }
      });

      $(".eyes3").click(function () {
        if ($('.eyes3').hasClass("bg3")) {
          $('.eyes3').removeClass("bg3");
          $('.eyes3').addClass("bg3_3");
        } else if ($('.eyes3').hasClass("bg3_3")) {
          $('.eyes3').removeClass("bg3_3");
          $('.eyes3').addClass("bg3");
        }
      });

      $(".eyes4").click(function () {
        if ($('.eyes4').hasClass("bg4")) {
          $('.eyes4').removeClass("bg4");
          $('.eyes4').addClass("bg4_4");
        } else if ($('.eyes4').hasClass("bg4_4")) {
          $('.eyes4').removeClass("bg4_4");
          $('.eyes4').addClass("bg4");
        }
      });

    // прыгающие овцы
    $(".greensheep").click(function(){
		$(this).addClass("greensheepjump");
	});

    $(".purplesheep").click(function(){
		$(this).addClass("greensheepjump");
	});

    $(".lightpinksheep").click(function(){
		$(this).addClass("greensheepjump");
	});

    $(".pinksheep").click(function(){
		$(this).addClass("pinksheepjump");
	});


});

