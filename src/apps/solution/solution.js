export default function enrollJs(){
// 重定向

// fullPage
$(document).ready(function() {

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

  $('#pageContain').fullpage({
    verticalCentered: true,
    'navigation': true,
    anchors: ['1', '2', '3', '4','5', '6','7','8','9','10','11','12','13'],
    loopBottom: true,        // 顶部轮滚
    onLeave: function(index, nextIndex, direction){
        // // 底部
        if ( index===13 && nextIndex===1 )
        { 
            console.log("最后一页")
            $('.i-content').addClass('ifFooter')
            return false;
        }else if ( index===13 && nextIndex===12 && $('.i-content').hasClass("ifFooter") )
        {
            lock();
            $('.i-content').removeClass('ifFooter')
            return false;
        }
        return flag
    }
  }); 
});  


  
}
 

