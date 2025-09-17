$(function () {
  let con1 = $("#con1").offset().top;
  let con2 = $("#con2").offset().top;
  let con3 = $("#con3").offset().top;
  let con4 = $("#con4").offset().top;
  console.log(con1, con2, con3, con4);

  $("#con1 .down").animate({ height: "100%" }, 900);
  $("#con1 .right").animate({ width: "100%" }, 700);

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
    } else if (scroll >= con3 && scroll < con4) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");
      //   $("#con3").addClass("on");
      $("#con3 li").addClass("plus");
    } else {
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");
    } // 조건1은 con1의 범위 내에 있다는 뜻 ->  나머지 조건들도 각각 con2, con3의 범위 내에 있다는 뜻, else는 나머지니까 con4 영역을 의미
  });

  $("#con3 li").on("mouseenter", function () {
    // $("#con3 li").stop().animate({ opacity: "0" });
    $("#con3 li").css({ "": "" });
    $(this).css({ opacity: "1" });
    $(this).show();
    // $(this).addClass("wid");
  });
  $("#con3 li").on("mouseleave", function () {
    $(this).removeClass("wid");
  });

  $("header li").on("click", function () {
    let i = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let target = $("section").eq(i).offset().top;
    $("html, body").animate({ scrollTop: target });
  });

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
});
