import topHead from '../../components/topHead.vue'
import bottom from '../../components/bottom.vue';
import './index.css';

const app = new Vue({
  el: '#app',
  components: {
    topHead,
    bottom
  },
  data: {
    name: 'Test',
    spinShow: true,
    showHead: true    
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
        case 'qudao':
          goToScroll = 'qudao'
          break;
        case 'duoyuan':
          goToScroll = 'duoyuan'
          break;
        case 'yizhanshi':
          goToScroll = 'yizhanshi'
          break;
        case 'biaoqian':
          goToScroll = 'biaoqian'
          break;
        case 'zidong':
          goToScroll = 'zidong'
          break;
        case 'keshihua':
          goToScroll = 'keshihua'
          break;
        case 'guanli':
          goToScroll = 'guanli'
          break;
        default:
          break;
      }

      if(goToScroll === 'qudao'){
        const iTo =  $('.m-channel:nth-child(3)').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'duoyuan'){
        const iTo =  $('.m-interact:nth-child(4)').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'yizhanshi'){
        const iTo =  $('.m-channel:nth-child(5)').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'biaoqian'){
        const iTo =  $('.m-interact:nth-child(6)').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'zidong'){
        const iTo =  $('.m-channel:nth-child(7)').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'keshihua'){
        const iTo =  $('.m-interact:nth-child(8)').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'guanli'){
        const iTo =  $('.m-column').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }
    }
    
  }
});