<template>
  <!--<div class="swiper-container">
    <div class="swiper-wrapper">-->
      <!--<div v-for="item in companyLists" class="swiper-slide blue-slide">
        <img :src="item" alt=""></div>-->
      <div class="logo-carousel">
        <ul class="logo-list">
          <li v-for="item in companyLists"><img :src="item" alt=""></li>
        </ul>
        <i class="prev"></i>
        <i class="next"></i>
      </div>
    <!--</div>
  </div>-->

</template>
<script> 
  import axios from 'axios';
  // import Vue from 'vue'
  // import VueAwesomeSwiper from 'vue-awesome-swiper'
  
  // 形成轮播组
  function logoArr(arr){
    var arrLength = arr.length;
    var arr2 = [];
    console.log(arrLength);
    for(var i=7;i>0;i--){
        arr2.push(arr[arrLength-i]);
    }
    for(var j=0;j<arrLength;j++){
        arr2.push(arr[j]);
    }
    for(var k=0;k<7;k++){
        arr2.push(arr[k]);
    }
    return arr2;
  }
  
     

  export default {
  components: {
    // swiper,
    // swiperSlide
  },
  data: () => ({
    companyLists: [],
    logoNum: []
  }),
  created() {
    const self = this;
    axios.get("/api/home_2017/GetCooperativePartnerData")
      .then(function(response) {
        // console.log(response.data.length);       
        self.companyLists = logoArr(response.data);
        self.logoNum = response.data;
        console.log(self.logoNum.length);
      });
    //   console.log('logoNum'+ this.logoNum.length);
    // logocarousel();
  },
  mounted() {
    //   console.log(this.companyLists)
    $(document).ready(function(){
      var logo_num = 0;
      var logo_length = $(".logo-list li").length;
    //   console.log(logo_length);
      function btn_next_click(){           
          if(!$(".logo-list").is(":animated")){
              logo_num++;
              $(".logo-list").animate({left:'-=165px'},'slow'); 
              var oDivLeft = logo_length-14;
            //   console.log(oDivLeft);
            //   if(logo_num==oDivLeft){
                if(logo_num==31){
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
    //   console.log(oDivRight);
      function btn_prev_click(){     
          if(!$(".logo-list").is(":animated")){
              logo_num--; 
              $(".logo-list").animate({left:'+=165px'},'slow');
              if(logo_num==-7){
                //   $(".logo-list").animate({left:oDivRight},0); 
                $(".logo-list").animate({left:'5115px'},0); 
                logo_num=0;

              }    
          }     
      }
      $(".prev").click(function(){   
          btn_prev_click()     
      })
  })
  }

  

  }
</script>
<style lang="scss">
.logo-carousel{
    width: 1160px;
    overflow: hidden;
    position: relative;
    height: 60px;
    margin: 30px auto 60px;
}
.logo-list{
    position: absolute;
    width: 7600px;
    overflow: hidden;
    padding-left: 2px;
    padding-right: 2px;  
    list-style: none;
    left: -1150px;
}
.logo-list li{
    position: relative;
    width: 165px;
    height: 60px;
    line-height: 60px;
    float: left;
    text-align: center;
}
// .logo-list li img{
//     height: 60px;
// }
.campany-logo{
    position: relative;
    z-index: 0;
}
.our-custom{
    font-size: 20px;
    font-weight: 600;
    width: 1160px;
    margin: 50px auto 30px;
}
.prev,.next{
    width: 30px;
    height: 60px;
    display: block;
    z-index: 99999;
    position: absolute;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center center;
}
.prev{
    background-image: url(../images/home/logo_icon_left_default.png);
    left: 0px;
}
.prev:hover{
    background-image: url(../images/home/logo_icon_left_selected.png);
}
.next{
    background-image: url(../images/home/logo_icon_right_default.png);
    right: 0px;
}
.next:hover{
    background-image: url(../images/home/logo_icon_right_selected.png);
}
</style>