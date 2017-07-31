import topHead from '../../../components/topHead.vue'
import bottom from '../../../components/bottom.vue';
import applyForm from '../../../components/applyForm.vue'

import './index.scss';
import carousel1 from './carousel1.vue';  
import carousel2 from './carousel2.vue';  
import carousel3 from './carousel3.vue';  

const app = new Vue({ 
  el: '#app',
  components: {
    topHead,
    applyForm,
    bottom,
    carousel1,
    carousel2,
    carousel3
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


