export default function enrollJs(){
// 重定向
if (window.location.hash !== "") {
    window.location.hash = "";
}; 
// fullPage
// $(document).ready(function() {
// 	$('.e-content-right').fullpage(); 
// });  

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
$('.e-content-right').fullpage({
    verticalCentered: true,
    'navigation': true,
    anchors: ['1', '2', '3', '4','5', '6','7','8','9','10'],
    loopBottom: true,        // 顶部轮滚
    onLeave: function(index, nextIndex, direction){  
          console.log(index)
          console.log('next'+nextIndex) 
            // // 底部
            if ( index===10 && nextIndex===1 )
            { 
                console.log("最后一页")
                $('.e-content').addClass('ifFooter') 
                return false;
            }else if ( index===10 && nextIndex===9 && $('.e-content').hasClass("ifFooter") )
            {
                lock();
                $('.e-content').removeClass('ifFooter')
                return false;
            }
            return flag;
    }
  }); 
  
}
 

