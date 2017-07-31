import topHead from '../../components/topHead.vue'
import bottom from '../../components/bottom.vue';
import applyForm from './applyForm.vue'

import './index.scss';

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
    const self = this;
    const name = location.hash.replace('#','');
    self.findTrueAddress(name)
    this.$nextTick(() => {
      this.spinShow  = false;

      window.addEventListener("hashchange",function(event){
        const name = location.hash.replace('#','');
        self.findTrueAddress(name)
      },false);
    });
    
  },
  methods: {
    findTrueAddress(name){
      if(name=='partner'){
        const iTo =  $('.partner').offset().top - 225;
        $('html,body').animate({scrollTop:iTo}, 800);
      }
    }

  },
  mounted() {


    }
});


