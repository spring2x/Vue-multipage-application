
import topHead from '../../components/topHead.vue'
import bottom from '../../components/bottom.vue';
import './index.css'; 
import submitForm from './custom.js'; 
import applyForm from '../../components/applyForm.vue'

const app = new Vue({
  el: '#app',
  components: {  
    topHead,
    applyForm,
    bottom
    // 'top-head': topHead
    // 'bottom-footer':bottomFooter   
  },
  data: {
    name: 'Test',
    spinShow: true,
    showHead: true
  },
  created(){
    this.$nextTick(() => {
      this.spinShow  = false;
      submitForm();
    });
  },
  methods: {
    
  }
});







