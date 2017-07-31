import topHead from '../../../components/topHead.vue'
import bottom from '../../../components/bottom.vue';
import applyForm from '../../../components/applyForm.vue'

import './index.scss';
import axios from 'axios'; 
import { Carousel,CarouselItem } from 'iview'

const app = new Vue({ 
  el: '#app',
  components: {
    topHead, 
    applyForm,
    bottom,
    Carousel,
    CarouselItem
  },
  data: { 
    name: 'Test',
    spinShow: true, 
    showHead: true,
    value: 0,
    setting:{
      autoplaySpeed: 4000,
      dots: 'inside',
      arrow: 'never'
    }
  },
  created(){
    this.$nextTick(() => { 
      this.spinShow  = false;
    });
  },
  methods: {

  },
  mounted() {


  }
});


