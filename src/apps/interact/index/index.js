import topHead from '../../../components/topHead.vue'
import bottom from '../../../components/bottom.vue';
import applyForm from '../../../components/applyForm.vue'
import {Carousel, CarouselItem} from 'iview'

// import autoScroll from '../../../common/autoScroll'

import './index.scss';
import axios from 'axios';
// import sceneJs from './scene.js';

const app = new Vue({
  el: '#app',
  components: {
    topHead,
    applyForm,
    bottom,
    Carousel,
    CarouselItem
  },
  data: {
    name: 'Test',
    spinShow: true,
    showHead: true,
    mChannel3Arrs: [
      //3D开场大屏
      1,
      //幸运抽奖
      5,
      //现场互动
      3,
      //签约仪式
      1,
      //大屏订货
      8,
      //趣味游戏
      2,
      //现场调查
      2,
      //现金红包
      2,
      //其他
      2
    ],
    mChannel3Index: 1, 
    mChannel3Current: Array(13).fill(1),
  },
  created(){
    const self = this;
    const name = location.hash.replace('#','');
    self.findTrueAddress(name)
    this.$nextTick(() => {
      this.spinShow  = false;
      // autoScroll()

      window.addEventListener("hashchange", function (event) {
        const name = location.hash.replace('#','');
        self.findTrueAddress(name)
      },false);
    });
  },
  methods: {
    showChannel3Img(index){

      this.mChannel3Index = index;
    },
    findTrueAddress(name){
      let goToScroll = '';
      switch(name) {
        case 'hongbao': 
          this.mChannel3Index = 8
          goToScroll = 'interact'
          break;
        case 'hudong':
          this.mChannel3Index = 3
          goToScroll = 'interact'
          break;
        case 'choujiang':
          this.mChannel3Index = 2
          goToScroll = 'interact'
          break;
        case 'logwall':
          this.mChannel3Index = 1
          goToScroll = 'interact'
          break;
        case 'dashang':
          this.mChannel3Index = 3
          goToScroll = 'interact'
          break;
        case 'youxi':
          this.mChannel3Index = 6
          goToScroll = 'interact'
          break;
        case 'dinghuo':
          this.mChannel3Index = 5
          goToScroll = 'interact'
          break;
        case 'ibea':
          this.mChannel3Index = 9
          goToScroll = 'interact'
          break;
        case 'qyhongbao':
          this.mChannel3Index = 8
          goToScroll = 'interact'
          break;
        case 'zhibo':
          this.mChannel3Index = 9
          goToScroll = 'interact'
          break;
        case 'qianyue':
          this.mChannel3Index = 4
          goToScroll = 'interact'
          break;
        case 'diaocha':
          this.mChannel3Index = 7
          goToScroll = 'interact'
          break;
        case 'baobiao':
          goToScroll = 'baobiao'
        default: 
          break;
      }

      if(goToScroll === 'interact') {
        const iTo =  $('.m-channel3').offset().top - 50;
        $('html,body').animate({scrollTop:iTo}, 800);
      }
      else if(goToScroll === 'baobiao'){
        const iTo =  $('.m-channel1-img').offset().top -100;
        $('html,body').animate({scrollTop:iTo}, 800);
      }
      
    }
  },
  mounted() {
      // const self = this;
      // axios.all([
      //     axios.get("/corp2/corpData/caseLists.php")
      // ]).then(axios.spread(function(res1){     
      //     console.log(res1.data);
      //     self.caseLists = res1.data;
      //   }))
    }
});


