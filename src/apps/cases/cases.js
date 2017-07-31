export default function casesJs(){
// 产品块切换
$(".case-productLists>ul>li:nth-child(2)").addClass("case-productLists-show")
$(".case-productLists1:nth-child(1)").addClass("case-productLists1-show");
$(".case-productLists>ul>li:nth-child(2) span").addClass("glyphicon-triangle-top");
function productChange(dom1,dom2){
	$(dom1).click(function(){
		$(".case-productLists>ul>li span").removeClass("glyphicon-triangle-top");
		$(dom1+" span").addClass("glyphicon-triangle-top");
		$(".case-productLists>ul>li").removeClass("case-productLists-show");
		$(dom1).addClass("case-productLists-show");
		$(".case-productLists1").removeClass("case-productLists1-show");
		$(dom2).addClass("case-productLists1-show");
	});
} 
productChange(".case-productLists>ul>li:nth-child(2)",".case-productLists1:nth-child(1)");
productChange(".case-productLists>ul>li:nth-child(3)",".case-productLists1:nth-child(2)");
productChange(".case-productLists>ul>li:nth-child(4)",".case-productLists1:nth-child(3)");

// 筛选块点击
// function clickChange(click1){
// 	$(click1).click(function(){
// 		$(click1).removeClass("case-changeClick");
// 		$(this).addClass("case-changeClick");
// 	})
// }
// clickChange(".case-productLists ul li:nth-child(1)");
// clickChange(".case-typeLists ul li");
// clickChange(".case-industryLists ul li");
// clickChange(".case-cityLists ul li");
// clickChange(".case-productLists1 ul li");


// 申请试用select选择框
$(document).ready(function() {
    $(".js-example-basic-single").select2({
      placeholder: "公司类型"
    });
});
// 输入框验证
$(".g-tryout-info input").focus(function(){
    $(this).parent().addClass("tryoutInputFocus");
    $(this).parent().addClass("tryoutInputFocused");
    $(this).removeClass("tryoutInputError");
    $(this).next().html("");
});


$(".g-tryout-info p").click(function(){
    if($(this).next().focus()){
        return false;
    }
    $(this).next().focus();
})
$(".g-tryout-info span").click(function(){
    if($(this).prev().focus()){
        return false;
    }
    $(this).prev().focus();
})

 $(".g-tryout-info input").blur(function(){
    var inputContent =  $(this).val();
    $(this).parent().removeClass("tryoutInputFocused");
    if(inputContent==''){
        $(this).parent().removeClass("tryoutInputFocus");
    } 
    var userPhone = $("input[name='userPhone']").val();
    if(!isGlobal(userPhone)&&userPhone!=''){
        $("input[name='userPhone']").next().html("请输入正确的手机号码");
        $("input[name='userPhone']").addClass("tryoutInputError");
    }else{
        $("input[name='userPhone']").next().html("");
        $("input[name='userPhone']").removeClass("tryoutInputError");
    };
});
var isGlobal = function (val) {
	var ret = false;
	if (/^(86){0,1}1\d{10}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(886){1}0{0,1}[6,7,9](?:\d{7}|\d{8}|\d{10})$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(852){1}0{0,1}[1,5,6,9](?:\d{7}|\d{8}|\d{12})$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(60){1}1\d{8,9}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(65){1}[13689]\d{6,7}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(81){1}0{0,1}[7,8,9](?:\d{8}|\d{9})$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(82){1}0{0,1}[7,1](?:\d{8}|\d{9})$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(1){1}\d{10,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(1){1}\d{10}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(61){1}4\d{8,9}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(64){1}[278]\d{7,9}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(54){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(971){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(353){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(20){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(372){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(43){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(853){1}6\d{7}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(1242){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(507){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(55){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(375){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(359){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(32){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(48){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(501){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(45){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(49){1}1(\d{5,6}|\d{9,12})$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(7){1}[13489]\d{9,11}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(33){1}(\d{6}|\d{8,9})$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(63){1}[24579](\d{7,9}|\d{12})$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(358){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(57){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(31){1}6\d{8}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(996){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(855){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(974){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(370){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(352){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(40){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(960){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(976){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(51){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(212){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(52){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(27){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(234){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(47){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(351){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(46){1}[124-7](\d{8}|\d{10}|\d{12})$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(41){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(381){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(248){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(966){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(94){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(66){1}[13456789]\d{7,8}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(90){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(216){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(58){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(380){1}[3-79]\d{8,9}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(34){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(30){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(36){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(39){1}[37]\d{8,11}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(972){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(91){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(62){1}[2-9]\d{7,11}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(44){1}[347-9](\d{8,9}|\d{11,12})$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(1284){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(962){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(84){1}[1-9]\d{6,9}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(56){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){0,1}(977){1}\d{6,12}$/.test(val)) { ret = true; }
	else if (/^(00){1}\d{4,18}$/.test(val)) { ret = true; }
	return ret;
}
$(".g-tryout-submit").click(function(){
    var userName = $("input[name='userName']").val();
    console.log(userName);
    var userPhone = $("input[name='userPhone']").val();
    console.log(userPhone);
    var userCompany = $("select[name='userCompany']").val();
    console.log(userCompany);
    var userEmail = $("input[name='userEmail']").val();
    console.log(userEmail);
    if(!isGlobal(userPhone)){
        $("input[name='userPhone']").next().html("请输入正确的手机号码");
    }else{
        $("input[name='userPhone']").next().html("");
    };
    if(userName==''&&userPhone==''){
        $(".g-tryout-info span").html("必填项");
        $("input[name='userName']").addClass("tryoutInputError");
        $("input[name='userPhone']").addClass("tryoutInputError");
    }else if(userName==''){
        $("input[name='userName']").next().html("必填项");
        $("input[name='userName']").addClass("tryoutInputError");
    }else if(userPhone==''){
        $("input[name='userPhone']").next().html("必填项");
        $("input[name='userPhone']").addClass("tryoutInputError");
    }else if(isGlobal(userPhone)){
        console.log('success'); 
        // 发送数据
        $(".g-tryout-success").css("display","block");
    }

})


}