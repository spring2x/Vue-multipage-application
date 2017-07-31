<template>
  <div class="home-bigcarousel">
    <Carousel autoplay  v-model="value"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :arrow="setting.arrow"
        :easing="setting.easing"
        :height="setting.height"
        class="home-bigcarousel-list">
        <Carousel-item v-for="item in bannerLists">
            <div class="home-bigcarousel-list-img" :style="{background:'url('+ item.ImagePath +') center top no-repeat'}">
              <a :href="item.ADUrl"></a>
            </div>
        </Carousel-item>
    </Carousel>
  </div>
</template>
<script>
import {Carousel,CarouselItem} from 'iview'
import axios from 'axios'
export default {
    data () {
        return {
            value: 0,
            setting:{
              autoplaySpeed: 4000,
              dots: 'inside',
              arrow: 'never',
              easing: 'fade-in',
              height: 455
            },
            bannerLists: [],
        }
    },
    components: {
      Carousel,
      CarouselItem
    },
    created(){
      this.getWebsiteAdsenseData();
    },
    methods: {
      getWebsiteAdsenseData(){
        const self = this;
        axios.get('/api/home_2017/GetWebsiteAdsenseData')
        .then(function(response) {
          self.bannerLists = response.data.ADSpaceAdverts;
        })
        .catch(function(error) {
          console.log(error);
        })
      }
    }
}
</script>

<style lang="scss">
.home-bigcarousel{
  width: 100%;
  height: 455px;
  &-list{
    &-img{
      height: 455px;
      & a{
        display: block;
        height: 100%;
        width: 100%;
      }
    }
  }

  & .ivu-carousel-dots{
    & li{
      width: 10px;
      height: 10px;
      border-radius: 5px;
      padding: 0;
      margin: -25px 10px 0px 0px;
      background-color: #E0E0E0;
      & button{
        display:none!important;
      }
    }
    & .ivu-carousel-active{
      background-color: #0AA1E5;
    }
  }
}




</style>

