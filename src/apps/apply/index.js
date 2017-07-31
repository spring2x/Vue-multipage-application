import topHead from '../../components/topHead.vue'
import bottom from '../../components/bottom.vue';
import applyForm from '../../components/applyForm.vue'

import getQueryString from '../../common/util'

import './index.scss'

const app = new Vue({
  el: '#app',
  components: {
    topHead,
    applyForm,
    bottom 
  },
  data: {
    spinShow: true,
    from: '',
  }, 
    
  created(){
    this.$nextTick(() => {
      this.spinShow  = false;
    });

    this.from = getQueryString('from') || '10002'
  },
  methods: {
    
  }

});


