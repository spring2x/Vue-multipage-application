import topHead from '../../components/topHead.vue'
import bottom from '../../components/bottom.vue';
import applyForm from '../../components/applyForm.vue'

import './animate.min.css';
import './index.css';
import './index.scss';
import './c-channel2.css'; 


import '../../libs/fullpage/jquery.fullPage.css';
import '../../libs/fullpage/jquery.easings.min.js';
import '../../libs/fullpage/scrolloverflow.min.js';
// import './fullPage.min.js';
import '../../libs/fullpage/jquery.fullPage.min.js';
// import solution from './solution.js';
const app = new Vue({
  el:      '#app',
  components: {
    topHead,
    applyForm,
    bottom 
  },
  data: {
    spinShow: true,
    bgChangeCss: {color:""}, 
    bgChange: [
      {
        id:"1",
        dataMenu:"secondPage",
        link:"#secondPage",
        p1:"海量模板，简单轻松制作"
      },
      {
        id:"2",
        dataMenu:"3Page",
        link:"#3Page",
        p1:"多渠道传播，活动轻松引流"
      },
      {
        id:"3",
        dataMenu:"4Page",
        link:"#4Page",
        p1:"流程设计器，报名流程随需配"
      }
    ],
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
    bgChangeClick(item){  
      console.log(item.id);     
      this.bgChangeCss.color = item.id;  
      console.log(this.bgChangeCss.color);  
    },
    hoverSmallImg(index){
      this.hoveSamllIndex = index;
    },
    leaveSmallImg(index){
      this.hoveSamllIndex = null;
    },
    findTrueAddress(name){
      let goToScroll = '';
      switch(name){
        case '9':
          goToScroll = '9'
          break;
        default:
          break;
      }

      if(goToScroll === '9'){
        const iTo =  $('.section-8').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }
    }
  }

});


