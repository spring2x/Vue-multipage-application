import topHead from '../../components/topHead.vue'
import bottom from '../../components/bottom.vue';
import applyForm from '../../components/applyForm.vue'

import './index.css';
// import '../../libs/fullpage/index.js';
import axios from 'axios';
// import enrollJs from './enroll.js';

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
        p1:"专业大会模板",
        p2:"快速建设大会网站/微站" 
      },
      {
        id:"2",
        dataMenu:"3Page",
        link:"#3",
        p1:"一套内容，三屏联动",
        p2:"网站、微站、iPad"
      },
      {
        id:"3",
        dataMenu:"4Page",
        link:"#4",
        p1:"流程设计器",
        p2:"报名流程随需配"
      },
      {
        id:"4",
        dataMenu:"5Page",
        link:"#5",
        p1:"超强表单，随需配",
        p2:""
      },
      {
        id:"5",
        dataMenu:"6Page",
        link:"#6",
        p1:"会议支付",
        p2:"国际国内一键开通"
      },
      {
        id:"6",
        dataMenu:"7Page",
        link:"#7",
        p1:"参会人管理，超级大表",
        p2:"随需分拆"
      },
      {
        id:"7",
        dataMenu:"8Page",
        link:"#8",
        p1:"各类报表，随需生成",  
        p2:""
      }],
    caseLists: []
  },
  created(){
    const self = this;
    const name = location.hash.replace('#','');
    self.findTrueAddress(name)
    this.$nextTick(() => {
      this.spinShow  = false;    
      // enrollJs();

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
    findTrueAddress(name){
      let goToScroll = '';
      switch(name){
        case '1':
          goToScroll = '1'
          break;
        case '2':
          goToScroll = '2'
          break;
        case '3':
          goToScroll = '3'
          break;
        case '4':
          goToScroll = '4'
          break;
        case '5':
          goToScroll = '5'
          break;
        case '6':
          goToScroll = '6'
          break;
        case '7':
          goToScroll = '7'
          break;
        case '8':
          goToScroll = '8' 
          break;
        default:
          break;
      }
      if(goToScroll === '1'){
        const iTo =  $('.active').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === '2'){
        const iTo =  $('.e-channel2').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === '3'){
        const iTo =  $('.e-channel3').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === '4'){
        const iTo =  $('.e-channel4').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === '5'){
        const iTo =  $('.e-channel5').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === '6'){
        const iTo =  $('.e-channel6').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === '7'){
        const iTo =  $('.e-channel7').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === '8'){
        const iTo =  $('.e-channel8').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }
    }

  },
  mounted() {

    }
});


