import topHead from '../../components/topHead.vue'
import bottom from '../../components/bottom.vue';
import applyForm from '../../components/applyForm.vue'

import './index.css';
import axios from 'axios';
import sceneJs from './scene.js';
// import autoScroll from '../../common/autoScroll'

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
    showHead: true
  },
  created(){
    this.$nextTick(() => {
      this.spinShow  = false; 
      sceneJs();
      // autoScroll();
    });
  },
  methods: {
    
  }

});


