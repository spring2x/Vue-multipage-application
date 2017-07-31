export default function outSideJs(){
$(document).ready(function(){
    // hover图标切换
    function tab_icon(par_cls,chi_cls,pro,old_adr,new_adr){
        $(par_cls).mouseover(function(){
            $(chi_cls).attr(pro,new_adr);
        }).mouseout(function(){
            $(chi_cls).attr(pro,old_adr);
        })
    }

// 轮播
// function carousel(class1,class2,num){
//     var lIndex = 0;  
//     var timer;
//     $(class1).eq(lIndex).addClass("hover");
//     $(class1).click(function(){
//         $(this).addClass("hover").siblings().removeClass("hover");
//         var nIndex = $(this).index();
//         $(class2).eq(nIndex).fadeIn(300).siblings().fadeOut(300);
//         lIndex=nIndex;
//     });
//     function dingshi(){
//         clearInterval(timer);
//         timer = setInterval(function(){
//             lIndex++ 
//             lIndex = lIndex % num
//             $(class1).eq(lIndex).addClass("hover").siblings().removeClass("hover");
//             $(class2).eq(lIndex).fadeIn().siblings().fadeOut();
//         },4000);
//     };
//     dingshi();
// }

// carousel(".dot li",".big-img li",num);

// 公司logo轮播
    var logo_num = 0;
    var logo_length = $(".logo-list li").length;
    function btn_next_click(){           
        if(!$(".logo-list").is(":animated")){
            logo_num++;
            $(".logo-list").animate({left:'-=165px'},'slow'); 
            // console.log($(".logo-list").css('left'));
            // console.log(logo_num);
            var oDivLeft = logo_length-14;
            if(logo_num==oDivLeft){
                $(".logo-list").animate({left:'-1150px'},0); 
                logo_num=0;
            }     
        }
    }
    $(".next").click(function(){
        btn_next_click();     
    });
    var obj = setInterval(function(){btn_next_click()},5000);
    var oDivRight = -(logo_length-14)*165+'px';
    function btn_prev_click(){     
        if(!$(".logo-list").is(":animated")){
            logo_num--; 
            $(".logo-list").animate({left:'+=165px'},'slow');
            if(logo_num==-7){
                $(".logo-list").animate({left:oDivRight},0); 
                logo_num=0;

            }    
        }     
    }
    $(".prev").click(function(){   
        btn_prev_click()     
    })
    
})

    
}
