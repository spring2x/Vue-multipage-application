export default function enrollJs(){
// 重定向
if (window.location.hash !== "") {
    window.location.hash = "";
}; 
// fullPage
  var timer;
  var flag    = true;
  function lock(){
      clearTimeout(timer);
      flag    = false;
      timer    = setTimeout(function()
      {
          flag= true;
      }, 200);                
  }
$('.i-content-right').fullpage({
    verticalCentered: true,
    'navigation': true,
    anchors: ['1', '2', '3', '4', '5', '6'],
    loopBottom: true,        // 顶部轮滚
    onLeave: function(index, nextIndex, direction){  
          console.log(index)
          console.log('next'+nextIndex)   
            // // 底部
            if ( index===6 && nextIndex===1 )
            { 
                console.log("最后一页")
                $('.i-content').addClass('ifFooter') 
                return false;
            }else if ( index===6 && nextIndex===5 && $('.i-content').hasClass("ifFooter") )
            {
                lock();
                $('.i-content').removeClass('ifFooter')
                return false;
            }
            return flag;
    }
  }); 


  
}
 

