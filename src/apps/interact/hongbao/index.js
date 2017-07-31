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
    this.$nextTick(() => { 
      this.spinShow  = false;
    });
    
  },
  methods: {


  },
  mounted() {


    }
});


