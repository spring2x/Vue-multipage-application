import topHead from '../../../components/topHead.vue'
import bottom from '../../../components/bottom.vue';
import applyForm from '../../../components/applyForm.vue'

import './index.scss';
import party from './partyImg.vue';  

const app = new Vue({ 
  el: '#app',
  components: {
    topHead,
    applyForm,
    bottom,
    party
  },
  data: {
    name: 'Test',
    spinShow: true, 
    showHead: true,
    city:{show:'shanghai'}
  },
  created(){
    this.$nextTick(() => { 
      this.spinShow  = false;
    });
    
  },
  methods: {
    cityShow(index){
      switch(index){
        case 'shanghai':
        this.city.show = 'shanghai';
        break;
        case 'beijing':
        this.city.show = 'beijing';
        break;
        case 'shenzhen':
        this.city.show = 'shenzhen';
        break;

        case 'guangzhou':
        this.city.show = 'guangzhou';
        break;
        case 'wuhan':
        this.city.show = 'wuhan';
        break;
        case 'chongqing':
        this.city.show = 'chongqing';
        break;

        case 'chengdu':
        this.city.show = 'chengdu';
        break;
        case 'xian':
        this.city.show = 'xian';
        break;
        case 'zhuhai':
        this.city.show = 'zhuhai';
        break;

        case 'xiamen':
        this.city.show = 'xiamen';
        break;
        case 'suzhou':
        this.city.show = 'suzhou';
        break;
        case 'zhengzhou':
        this.city.show = 'zhengzhou';
        break;

        case 'tianjin':
        this.city.show = 'tianjin';
        break;
        case 'changsha':
        this.city.show = 'changsha';
        break;
        case 'hangzhou':
        this.city.show = 'hangzhou';
        break;

        case '0':
        this.city.show = '';
        break; 

        default:
        break;
      }
    }

  },
  mounted() {


    }
});


