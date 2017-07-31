import topHead from '../../components/topHead.vue'
import bottom from '../../components/bottom.vue';
import applyForm from '../../components/applyForm.vue'
import './index.css';
// import '../../libs/fullpage/index.js';
import axios from 'axios';
import posterJs from './poster.js';

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
        p1:"带参海报轻松制作"
      },
      {
        id:"2", 
        dataMenu:"3Page",
        link:"#3",
        p1:"人人代言，裂变转发"
      }, 
      {
        id:"3",
        dataMenu:"4Page",
        link:"#4",
        p1:"多渠道便捷传播"
      },
      {
        id:"4",
        dataMenu:"5Page",
        link:"#5",
        p1:"传播业绩可查，报酬可算"
      }],
    caseLists: []
  },
  created(){
    const self = this;
    const name = location.hash.replace('#','');
    self.findTrueAddress(name)
    this.$nextTick(() => {
      this.spinShow  = false;    
      posterJs();

      window.addEventListener("hashchange",function(event){
        const name = location.hash.replace('#','');
        self.findTrueAddress(name)
      },false);
    });
  },
  mounted() {

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
        default:
          break;
      }
      if(goToScroll === '1'){
        const iTo =  $('.active').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === '2'){
        const iTo =  $('.p-channel2').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === '3'){
        const iTo =  $('.p-channel3').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === '4'){
        const iTo =  $('.p-channel4').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }else if(goToScroll === '5'){
        const iTo =  $('.p-channel5').offset().top - 75;
        $('html,body').animate({scrollTop:iTo}, 800);
      }
    }

  },
 
});


