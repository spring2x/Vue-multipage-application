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
    twoCode: {show1:false,show2:false}
  },
  created(){
    const self = this;
    const name = location.hash.replace('#','');
    self.findTrueAddress(name)
    this.$nextTick(() => {
      this.spinShow = false;

      window.addEventListener("hashchange",function(event){
        const name = location.hash.replace('#','');
        self.findTrueAddress(name)
      },false);
    })
    
  },
  methods: {
    findTrueAddress(name){
      let goToScroll = '';
      switch(name){
        case 'gundong':
        goToScroll = 'gundong'
        break;
        case 'yaoyiyao':
        goToScroll = 'yaoyiyao'
        break;
        case 'shuqian':
        goToScroll = 'shuqian'
        break;
        case 'fengkuang':
        goToScroll = 'fengkuang'
        break;
        default:
        break;
      }
      if(goToScroll === 'gundong'){
        const iTo = $(".channel3-content-list-block:nth-child(1)").offset().top - 75;
        $("html,body").animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'yaoyiyao'){
        const iTo = $(".channel3-content-list-block:nth-child(2)").offset().top - 75;
        $("html,body").animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'shuqian'){
        const iTo = $(".channel3-content-list-block:nth-child(3)").offset().top - 75;
        $("html,body").animate({scrollTop:iTo}, 800);
      }else if(goToScroll === 'fengkuang'){
        const iTo = $(".channel3-content-list-block:nth-child(4)").offset().top - 75;
        $("html,body").animate({scrollTop:iTo}, 800);
      }
    },
    twoCodeShow(index){
      switch (index){
        case 'show1':
        this.twoCode.show1 = true;
        break;
        case 'hide1':
        this.twoCode.show1 = false;
        break;
        case 'show2':
        this.twoCode.show2 = true;
        break;
        case 'hide2':
        this.twoCode.show2 = false;
        break;
        default:
        break;
      }
    }

  },
  mounted() {


    }
});


