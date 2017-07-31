import topHead from '../../../components/topHead.vue'
import bottom from '../../../components/bottom.vue';
import applyForm from '../../../components/applyForm.vue'

import './index.scss';
// import axios from 'axios';  

const app = new Vue({ 
  el: '#app',
  components: {
    topHead,
    applyForm,
    bottom
  },
  data: {
    name: 'Test',
    spinShow: true, 
    showHead: true,
  },
  created(){
    const self = this;
    const name = location.hash.replace('#','');
    self.findTrueAddress(name)
    this.$nextTick(() => {
      this.spinShow  = false;

      window.addEventListener("hashchange",function(event){
        const name = location.hash.replace('#','');
        self.findTrueAddress(name)
      },false);
    });
  },
  methods: {
    findTrueAddress(name){
      let goToScroll = '';
      switch(name){
        case 'weixin':
          goToScroll = 'weixin'
          break;
        case 'ipad':
          goToScroll = 'ipad'
          break;
        case 'sfz':
          goToScroll = 'sfz'
          break;
        case 'rfid':
          goToScroll = 'rfid'
          break;
        case 'zizhu':
          goToScroll = 'zizhu'
          break;
        case 'shouhuan':
          goToScroll = 'shouhuan'
          break;
        case 'ditan':
          goToScroll = 'ditan'
          break;
        default:
          break;
      }

      if(goToScroll === 'weixin'){
        const iTo =  $('.channel3-body-block:nth-child(2)').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'ipad'){
        const iTo =  $('.channel3-body-block:nth-child(1)').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'sfz'){
        const iTo =  $('.channel3-body-block:nth-child(7)').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'rfid'){
        const iTo =  $('.channel3-body-block:nth-child(3)').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'zizhu'){
        const iTo =  $('.channel3-body-block:nth-child(8)').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'shouhuan'){
        const iTo =  $('.channel3-body-block:nth-child(5)').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'ditan'){
        const iTo =  $('.channel3-body-block:nth-child(6)').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }

  }
},
  mounted() {


  }
  
});


