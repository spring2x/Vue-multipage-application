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
        case 'dingshi':
          goToScroll = 'dingshi'
          break;
        case 'qiye':
          goToScroll = 'qiye'
          break;
        default:
          break;
      }

      if(goToScroll === 'dingshi'){
        const iTo =  $('.channel2').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'qiye'){
        const iTo =  $('.channel3').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }
    }

  },
  mounted() {


    }
});


