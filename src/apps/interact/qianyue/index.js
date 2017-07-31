import topHead from '../../../components/topHead.vue'
import bottom from '../../../components/bottom.vue';
import applyForm from '../../../components/applyForm.vue'

import './index.scss';
import '../../../styles/animate.css'
import carousel from './carousel.vue'; 
const app = new Vue({ 
  el: '#app',
  components: {
    topHead,
    applyForm,
    bottom,
    carousel
  },
  data: {
    name: 'Test',
    spinShow: true, 
    showHead: true,
    shadow:false,
    shadow2:false
  },
  created(){
    this.$nextTick(() => { 
      this.spinShow  = false;
    }); 
    
  },
  methods: {
    hoverSmallImg:function(index){
      if(index=='1'){
        this.shadow = true;
      }else{
        this.shadow2 = true;
      }
    },
    leaveSmallImg:function(index){
      if(index=='1'){
        this.shadow = false;
      }else{
        this.shadow2 = false;
      }  
    }

  },
  mounted() {


    }
});


