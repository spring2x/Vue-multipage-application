<template>
  <div class="party-img">
    <Carousel autoplay  v-model="value"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :arrow="setting.arrow">
        <Carousel-item>
            <div class="demo-carousel">
              <img src="../../../images/scene/huizhan/channel61.jpg"/>
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
              <img src="../../../images/scene/huizhan/channel62.jpg"/>
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
              <img src="../../../images/scene/huizhan/channel63.jpg"/>
            </div>
        </Carousel-item>   
    </Carousel>
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
              dots: 'outside',
              arrow: 'never'
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
.party-img{
  width:530px;
  & .demo-carousel{
    width:530px;
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

.ivu-carousel-dots{
  & li{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    padding: 0;
    margin: 10px 10px 0px 0px;
    background-color: #E0E0E0;
    & button{
      display:none!important;
    }
  }
  & .ivu-carousel-active{
    background-color: #0AA1E5;
  }
}


</style>

