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
    videomp4: false,
    twoCodeShow: {show1:false,show2:false}
  },
  created(){
    this.$nextTick(() => { 
      this.spinShow  = false;
    });
    
  },
  methods: {
    playvideo(){
      this.videomp4 = true;
    },
    hidevideo(){
      this.videomp4 = false;
    },
    twocode(index){
      switch(index){
        case 'show1':
        this.twoCodeShow.show1 = true;
        break;
        case 'hide1':
        this.twoCodeShow.show1 = false;
        break;
        case 'show2':
        this.twoCodeShow.show2 = true;
        break;
        case 'hide2':
        this.twoCodeShow.show2 = false;
        break;
        default:
        break;
      }
    }

  },
  mounted() {


    }
});


