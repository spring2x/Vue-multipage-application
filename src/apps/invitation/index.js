import topHead from '../../components/topHead.vue'
import bottom from '../../components/bottom.vue';
import applyForm from '../../components/applyForm.vue'

import './index.css';
// import '../../libs/fullpage/index.js';
import axios from 'axios';
// import invitationJs from './invitation.js';

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
    bgChangeCss: {color:""}, 
    bgChange: [
      {
        id:"1",
        dataMenu:"secondPage",
        link:"#2",
        p1:"海量模板，简单轻松制作"
      },
      {
        id:"2",
        dataMenu:"3Page",
        link:"#3",
        p1:"多渠道传播，活动轻松引流"
      },
      {
        id:"3",
        dataMenu:"4Page",
        link:"#4",
        p1:"流程设计器，报名流程随需配"
      }
    ],
    hoveSamllIndex: null,
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
        case '2':
          goToScroll = '2'
          break;
        case '3':
          goToScroll = '3'
          break;
        case '4':
          goToScroll = '4'
          break;
        default:
          break;
      }
      if(goToScroll === '2'){
        const iTo =  $('.i-channel2').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === '3'){
        const iTo =  $('.i-channel3').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === '4'){
        const iTo =  $('.i-channel4').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }
    }
  },
  mounted() {
      

    }
});


