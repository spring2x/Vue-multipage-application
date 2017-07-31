export default function posterJs(){

// 轮播
function carousel(class1,class2,num){
    var lIndex = 0;
    var timer;
    $(".r-arr").click(function(){
    if (lIndex<num) {                                    
        lIndex++;   // lIndex = lIndex + 1;
    }
    else{
        lIndex=0; 
    }
    $(class1).eq(lIndex).addClass("hover").siblings().removeClass("hover");
        $(class2).eq(lIndex).fadeIn().siblings().fadeOut();// 选中除了前面的图片的其他所有图片让其隐藏;fadeIn,fadeOut(慢慢淡入淡出)
    });  
    $(class1).eq(lIndex).addClass("hover"); 
    $(class1).click(function(){
        $(this).addClass("hover").siblings().removeClass("hover");
        var nIndex = $(this).index();
        // console.log("ddd");
        $(class2).eq(nIndex).fadeIn(100).siblings().fadeOut(100);
        lIndex=nIndex;
    });
    function dingshi(){ 
        clearInterval(timer);
        timer = setInterval(function(){
            // (lIndex<num)?(lIndex++):(lIndex=0);  
            lIndex++ 
            lIndex = lIndex % num
            $(class1).eq(lIndex).addClass("hover").siblings().removeClass("hover");
            $(class2).eq(lIndex).fadeIn().siblings().fadeOut();
            },4000);
    };
    dingshi();//执行
}
carousel(".dot5 li",".big-img5 li",4); 

 

  
}
 

