$(function () {
  let con1 = $("#con1").offset().top;
  let con2 = $("#con2").offset().top;
  let con3 = $("#con3").offset().top;
  let con4 = $("#con4").offset().top;
  console.log(con1, con2, con3, con4);

  //헤더
  $("header li").on("click", function () {
    let i = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("section").eq(i).offset().top;
    $("html, body").animate({ scrollTop: target });
  });

  //컨테이너_1st_선 움직임
  $("#con1 .down").animate({ height: "100%" }, 900);
  $("#con1 .right").animate({ width: "100%" }, 700);

  //컨테이너_1st_제목
  $("#con1 h2:first-child").addClass("up");
  $("#con1 h2:nth-child(2)").addClass("up");

  //스크롤 시 움직임
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    console.log("스크롤", scroll);

    if (scroll >= con2) {
      $("header").addClass("on");
    } else {
      $("header").removeClass("on");
    } // 이걸 scroll 이벤트 괄호 밖으로 빼면 실행이 안됨 -> 왜?? 그래도 실행돼야 하는거 아님???

    if (scroll >= con1 && scroll < con2) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(0).addClass("on");
    } else if (scroll >= con2 && scroll < con3) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(1).addClass("on");
      $("#con2").addClass("on");
      $("#con2 h3").animate(
        { transform: "translateY(0px)", opacity: "1" },
        1500,
        "easeOutElastic"
      );
    } else if (scroll >= con3 && scroll < con4) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");
      $("#con3 ul").addClass("on");
      $("#con3 h3").animate(
        { transform: "translateY(0px)", opacity: "1" },
        1000,
        "easeInOutBack"
      );
    } else {
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");
    } // 조건1은 con1의 범위 내에 있다는 뜻 ->  나머지 조건들도 각각 con2, con3의 범위 내에 있다는 뜻, else는 나머지니까 con4 영역을 의미
  });

  //컨테이너_3rd
  let con3Ready = false;
  $("#con3 ul").on("transitionend webkitTransitionEnd", function () {
    con3Ready = true;
  });
  $("#con3 li").on("mouseenter", function () {
    if (!con3Ready) return;

    $("#con3 li").hide();
    $(this).show();
    $(this).stop().animate({ width: "80%" });
    $(this).find("img").stop().animate({ width: "50%" }, 1000);
    $(this).find("div").stop().animate({ width: "50%", padding: "20px" }, 1000);
  });
  $("#con3 ul").on("mouseleave", function () {
    if (!con3Ready) return;

    $("#con3 li").css({ width: "calc(100% / 3)" });
    $("#con3 li").show();
    $(this).find("img").stop().animate({ width: "100%" });
    $(this).find("div").stop().css({ width: "0%", padding: "0px" });
  });

  //우측 내비바
  $("#navi li").on("click", function () {
    let i = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("section").eq(i).offset().top;
    $("html, body").animate({ scrollTop: target });
  });

  function navi() {
    let i = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("section").eq(i).offset().top;
    $("html, body").animate({ scrollTop: target });
  }

  //
  //
  //
  //
  //
  //

  let total = $(".play li").length;
  let i = 0;

  $(".arr .bar .left").text(i + 1);
  $(".arr .bar .right").text(total);

  function fade() {
    $(".play").animate({ "margin-left": "-50%" }, function () {
      $(".play li:first-child").appendTo(".play");
      $(".play").css({ "margin-left": "0px" });
    });

    // $(".play li").fadeOut();
    // $(".play li").eq(i).fadeIn();
    // $(".play li").hide();
    // $(".play li").eq(i).show();

    $(".arr .bar span")
      .stop()
      .animate({ width: (i + 1) * (300 / total) });
    $(".arr .bar .left").text(i + 1);
  }

  // stop = setInterval(function () {
  //   if (i == total - 1) {
  //     i = 0;
  //   } else {
  //     i++;
  //   }
  // }, 1000);

  $(".next").on("click", function () {
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    fade();
  });
  $(".prev").on("click", function () {
    if (i == 0) {
      i = total - 1;
    } else {
      i--;
    }
    fade();
  });
});
