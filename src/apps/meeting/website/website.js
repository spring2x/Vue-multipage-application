export default function websiteJs(){
// 重定向
if (window.location.hash !== "") {
    window.location.hash = "";
}; 
// fullPage 

$('.w-content-right').fullpage({
    verticalCentered: true,
    'navigation': true,
    anchors: ['1', '2', '3', '4','5', '6','7','8'],
    loopBottom: true,        // 顶部轮滚
    onLeave: function(index, nextIndex, direction){   
          console.log(index)
          console.log('next'+nextIndex)  
            // // 底部 
            if ( index===7 && nextIndex===1 )
            { 
                console.log("最后一页")
                $('.w-content').addClass('ifFooter') 
                return false;
            }else if ( index===7 && nextIndex===6 && $('.w-content').hasClass("ifFooter") )
            {
                $('.w-content').removeClass('ifFooter')
                return false;
            }
    }
  }); 
  
}
 

