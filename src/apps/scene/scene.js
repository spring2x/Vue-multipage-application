export default function sceneJs() {
  // 图标切换
  $(".m-channel3-list>li").click(function() {
    $(".m-channel3-block").removeClass("m-channel3-block-bgcolor");
    $(this).children("div").addClass("m-channel3-block-bgcolor");
    var imgIndex = $(this).index();
    console.log(imgIndex);
    $(".m-channel3-img").removeClass("m-channel3-imgshow");
    $(".m-channel3-img").removeClass("m-channel3-firstShow");
    $(".m-channel3-right").find(".m-channel3-img").eq(imgIndex).addClass("m-channel3-imgshow animated fadeInRight");
  });

  // 大型会议页切换
  $(".c-wisdom-carousel-list li").click(function() {
    $(".c-wisdom-carousel-list li").removeClass("c-wisdom-changeBorder");
    $(this).addClass("c-wisdom-changeBorder");
    var wisdomIndex = $(this).index();
    // console.log(wisdomIndex);
    $(".c-channel4-info").removeClass("c-wisdom-show");
    $(".c-channel4-info").removeClass("c-channel3-firstShow");
    $(".c-channel4-detail").find(".c-channel4-info").eq(wisdomIndex).addClass("c-wisdom-show animated fadeIn");
});
// console.log($(".c-wisdom-carousel-list li:nth-child(1)").position().right);
var click1 = 0;
$(".c-wisdom-next").click(function(){
    if(!$("c-wisdom-carousel-list").is(":animated")){
        if(click1<3){
            click1++;
            // console.log(click1);
        }       
        if(click1<3){
            // console.log(click1);
            $(".c-wisdom-carousel-list").animate({left:'-=124px'},'slow');
        }  
    }
})
$(".c-wisdom-prev").click(function(){
    if(!$("c-wisdom-carousel-list").is(":animated")){
        if(click1>0){
            click1--;
        }  
        if(click1<1){
            // console.log(click1);
            return false;
        }else{
            $(".c-wisdom-carousel-list").animate({left:'+=124px'},'slow');
        }
    }

  })

  // 轮播
  function carousel(class1, class2, num) {
    var lIndex = 0;
    var timer;
    $(".r-arr").click(function() {
      if (lIndex < num) {
        lIndex++; // lIndex = lIndex + 1;
      } else {
        lIndex = 0;
      }
      $(class1).eq(lIndex).addClass("hover").siblings().removeClass("hover");
      $(class2).eq(lIndex).fadeIn().siblings().fadeOut(); // 选中除了前面的图片的其他所有图片让其隐藏;fadeIn,fadeOut(慢慢淡入淡出)
    });
    $(class1).eq(lIndex).addClass("hover");
    $(class1).click(function() {
      $(this).addClass("hover").siblings().removeClass("hover");
      var nIndex = $(this).index();
      // console.log("ddd");
      $(class2).eq(nIndex).fadeIn(300).siblings().fadeOut(300);
      lIndex = nIndex;
    });

    function dingshi() {
      clearInterval(timer);
        timer = setInterval(function(){
            // (lIndex<num)?(lIndex++):(lIndex=0);  
            lIndex++ 
            lIndex = lIndex % num
            $(class1).eq(lIndex).addClass("hover").siblings().removeClass("hover");
            $(class2).eq(lIndex).fadeIn().siblings().fadeOut();
          }, 4000);
    };
    dingshi(); //执行
  }
  carousel(".dot5 li", ".big-img5 li", 6);
  carousel(".dot7 li", ".big-img7 li", 2);
  carousel(".dot8 li", ".big-img8 li", 2);
  carousel(".dot9 li", ".big-img9 li", 5);
  carousel(".dot10 li", ".big-img10 li", 7);

  // logo轮播
  var logo_num = 0;
  var logo_length = $(".logo-list li").length;

  function btn_next_click() {

    if (!$(".logo-list").is(":animated")) {
      logo_num++;
      $(".logo-list").animate({ left: '-=160px' }, 'slow');
      // console.log($(".logo-list").css('left'));
      // console.log(logo_num);
      if (logo_num == 32) {
        $(".logo-list").animate({ left: '-1120px' }, 0);
        logo_num = 0;
      }
    }
  }
  $(".next").click(function() {
    btn_next_click();
  });
  var obj = setInterval(function() { btn_next_click() }, 5000);

  function btn_prev_click() {

    if (!$(".logo-list").is(":animated")) {
      logo_num--;
      $(".logo-list").animate({ left: '+=160px' }, 'slow');
      // console.log($(".logo-list").css('left'));
      // console.log(logo_num);
      if (logo_num == -7) {
        $(".logo-list").animate({ left: '-5120px' }, 0);
        logo_num = 0;

      }
    }
  }
  $(".prev").click(function() {
    btn_prev_click()
  })

  // 申请试用select选择框
  $(document).ready(function() {
    $(".js-example-basic-single").select2({
      placeholder: "公司类型"
    });
  });
  // 输入框验证
  $(".g-tryout-info input").focus(function() {
    $(this).parent().addClass("tryoutInputFocus");
    $(this).parent().addClass("tryoutInputFocused");
    $(this).removeClass("tryoutInputError");
    $(this).next().html("");
  });


  $(".g-tryout-info p").click(function() {
    if ($(this).next().focus()) {
      return false;
    }
    $(this).next().focus();
  })
  $(".g-tryout-info span").click(function() {
    if ($(this).prev().focus()) {
      return false;
    }
    $(this).prev().focus();
  })

  $(".g-tryout-info input").blur(function() {
    var inputContent = $(this).val();
    $(this).parent().removeClass("tryoutInputFocused");
    if (inputContent == '') {
      $(this).parent().removeClass("tryoutInputFocus");
    }
    var userPhone = $("input[name='userPhone']").val();
    if (!isGlobal(userPhone) && userPhone != '') {
      $("input[name='userPhone']").next().html("请输入正确的手机号码");
      $("input[name='userPhone']").addClass("tryoutInputError");
    } else {
      $("input[name='userPhone']").next().html("");
      $("input[name='userPhone']").removeClass("tryoutInputError");
    };
  });
  var isGlobal = function(val) {
    var ret = false;
    if (/^(86){0,1}1\d{10}$/.test(val)) { ret = true; } else if (/^(00){0,1}(886){1}0{0,1}[6,7,9](?:\d{7}|\d{8}|\d{10})$/.test(val)) { ret = true; } else if (/^(00){0,1}(852){1}0{0,1}[1,5,6,9](?:\d{7}|\d{8}|\d{12})$/.test(val)) { ret = true; } else if (/^(00){0,1}(60){1}1\d{8,9}$/.test(val)) { ret = true; } else if (/^(00){0,1}(65){1}[13689]\d{6,7}$/.test(val)) { ret = true; } else if (/^(00){0,1}(81){1}0{0,1}[7,8,9](?:\d{8}|\d{9})$/.test(val)) { ret = true; } else if (/^(00){0,1}(82){1}0{0,1}[7,1](?:\d{8}|\d{9})$/.test(val)) { ret = true; } else if (/^(00){0,1}(1){1}\d{10,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(1){1}\d{10}$/.test(val)) { ret = true; } else if (/^(00){0,1}(61){1}4\d{8,9}$/.test(val)) { ret = true; } else if (/^(00){0,1}(64){1}[278]\d{7,9}$/.test(val)) { ret = true; } else if (/^(00){0,1}(54){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(971){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(353){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(20){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(372){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(43){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(853){1}6\d{7}$/.test(val)) { ret = true; } else if (/^(00){0,1}(1242){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(507){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(55){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(375){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(359){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(32){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(48){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(501){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(45){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(49){1}1(\d{5,6}|\d{9,12})$/.test(val)) { ret = true; } else if (/^(00){0,1}(7){1}[13489]\d{9,11}$/.test(val)) { ret = true; } else if (/^(00){0,1}(33){1}(\d{6}|\d{8,9})$/.test(val)) { ret = true; } else if (/^(00){0,1}(63){1}[24579](\d{7,9}|\d{12})$/.test(val)) { ret = true; } else if (/^(00){0,1}(358){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(57){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(31){1}6\d{8}$/.test(val)) { ret = true; } else if (/^(00){0,1}(996){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(855){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(974){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(370){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(352){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(40){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(960){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(976){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(51){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(212){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(52){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(27){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(234){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(47){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(351){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(46){1}[124-7](\d{8}|\d{10}|\d{12})$/.test(val)) { ret = true; } else if (/^(00){0,1}(41){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(381){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(248){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(966){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(94){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(66){1}[13456789]\d{7,8}$/.test(val)) { ret = true; } else if (/^(00){0,1}(90){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(216){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(58){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(380){1}[3-79]\d{8,9}$/.test(val)) { ret = true; } else if (/^(00){0,1}(34){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(30){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(36){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(39){1}[37]\d{8,11}$/.test(val)) { ret = true; } else if (/^(00){0,1}(972){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(91){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(62){1}[2-9]\d{7,11}$/.test(val)) { ret = true; } else if (/^(00){0,1}(44){1}[347-9](\d{8,9}|\d{11,12})$/.test(val)) { ret = true; } else if (/^(00){0,1}(1284){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(962){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(84){1}[1-9]\d{6,9}$/.test(val)) { ret = true; } else if (/^(00){0,1}(56){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){0,1}(977){1}\d{6,12}$/.test(val)) { ret = true; } else if (/^(00){1}\d{4,18}$/.test(val)) { ret = true; }
    return ret;
  }
  $(".g-tryout-submit").click(function() {
    var userName = $("input[name='userName']").val();
    console.log(userName);
    var userPhone = $("input[name='userPhone']").val();
    console.log(userPhone);
    var userCompany = $("select[name='userCompany']").val();
    console.log(userCompany);
    var userEmail = $("input[name='userEmail']").val();
    console.log(userEmail);
    if (!isGlobal(userPhone)) {
      $("input[name='userPhone']").next().html("请输入正确的手机号码");
    } else {
      $("input[name='userPhone']").next().html("");
    };
    if (userName == '' && userPhone == '') {
      $(".g-tryout-info span").html("必填项");
      $("input[name='userName']").addClass("tryoutInputError");
      $("input[name='userPhone']").addClass("tryoutInputError");
    } else if (userName == '') {
      $("input[name='userName']").next().html("必填项");
      $("input[name='userName']").addClass("tryoutInputError");
    } else if (userPhone == '') {
      $("input[name='userPhone']").next().html("必填项");
      $("input[name='userPhone']").addClass("tryoutInputError");
    } else if (isGlobal(userPhone)) {
      console.log('success');
      // 发送数据
      $(".g-tryout-success").css("display", "block");
    }

  })
}
