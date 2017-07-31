<template>
<div class="channel4-party">
  <div class="party-img">
    <Carousel autoplay  v-model="value"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :arrow="setting.arrow">
        <Carousel-item>
            <div class="demo-carousel">
              <ul>
                <li><img src="../../../images/footerMenu/about/party1.jpg"/></li>
                <li><img src="../../../images/footerMenu/about/party2.jpg"/></li>
                <li><img src="../../../images/footerMenu/about/party3.jpg"/></li>
              </ul>
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
              <ul>
                <li><img src="../../../images/footerMenu/about/party4.jpg"/></li>
                <li><img src="../../../images/footerMenu/about/party5.jpg"/></li>
                <li><img src="../../../images/footerMenu/about/party6.jpg"/></li>
              </ul>
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
              <ul>
                <li><img src="../../../images/footerMenu/about/party7.jpg"/></li>
                <li><img src="../../../images/footerMenu/about/party8.jpg"/></li>
                <li><img src="../../../images/footerMenu/about/party9.jpg"/></li>
              </ul>
            </div>
        </Carousel-item>
        
    </Carousel>
    <div class="carousel-num" >
      {{value+1}}/3
    </div>
  </div>
</div>
</template>
<script>
import {Carousel,CarouselItem} from 'iview'
export default {
    data () {
        return {
            value: 0,
            setting:{
              autoplaySpeed: 4000,
              dots: 'none',
              arrow: 'always'
            }
        }
    },
    components: {
      Carousel,
      CarouselItem
    },
    methods: {
      
    }
}
</script>

<style lang="scss">
.channel4-party{
  width:675px;
  float:right;
  margin-right:25px;
  margin-top:50px;
  & .party-img{
    position:relative;
    & .carousel-num{
      position:absolute;
      top:-15px;
      right:0px;
    }
  }
  & .demo-carousel{
    width:695px;
    & ul li{
      margin-right:10px;
      width:225px;
      float:left;
      &:nth-child(3){
        margin-right:0px;
      }
    }
  }
}

.ivu-carousel-arrow{
  height:144px;
  width:31px;
  background-color:#F3F3F3;
  border-radius:3px;
  top:53%;
  &:hover{
    background-color:#F3F3F3;
  }
  &.left{
    left:-40px;
    background-image:url(../../../images/footerMenu/about/arrow2.png);
    background-repeat:no-repeat;
    background-size:10px 18px;
    background-position:10px 60px;
    & .ivu-icon{
      display:none;
    }
  }
  &.right{
    right:-40px;
    background-image:url(../../../images/footerMenu/about/arrow1.png);
    background-repeat:no-repeat;
    background-size:10px 18px;
    background-position:10px 60px;
    & .ivu-icon{
      display:none;
    }
  }
}



</style>

