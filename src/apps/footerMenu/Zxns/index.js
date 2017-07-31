import topHead from '../../../components/topHead.vue'
import bottom from '../../../components/bottom.vue';
import applyForm from '../../../components/applyForm.vue'

import './index.scss';
// import job from './jobDescription.vue';  

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
    iconShow: {
      sellShow: 'glyphicon-menu-up',
      sellHide: '',

      productShow: '',
      productHide: 'glyphicon-menu-down',

      preSaleShow: '',
      preSaleHide: 'glyphicon-menu-down',

      interactiveShow: '', 
      interactiveHide: 'glyphicon-menu-down',

      buyShow: '',
      buyHide: 'glyphicon-menu-down'
    },
    introduceShow: {
      sell: true,
      product: false,
      preSale: false,
      interactive: false,
      buy: false
    }
  },
  created(){
    this.$nextTick(() => {  
      this.spinShow  = false;  
    });
     
  },
  computed: {
    
  },
  methods: {
    iconChange(index) {
      switch(index){
        case 'sell':
        if(this.iconShow.sellShow == 'glyphicon-menu-up' && this.iconShow.sellHide == ''){
          this.iconShow.sellShow = '';
          this.iconShow.sellHide = 'glyphicon-menu-down';
          this.introduceShow.sell = false;
        }else if(this.iconShow.sellShow == '' && this.iconShow.sellHide == 'glyphicon-menu-down'){
          this.iconShow.sellShow = 'glyphicon-menu-up';
          this.iconShow.sellHide = '';
          this.introduceShow.sell = true;
        }
        break;

        case 'product':
        if(this.iconShow.productShow == '' && this.iconShow.productHide == 'glyphicon-menu-down'){
          this.iconShow.productShow = 'glyphicon-menu-up';
          this.iconShow.productHide = '';
          this.introduceShow.product = true;
        }else if(this.iconShow.productShow == 'glyphicon-menu-up' && this.iconShow.productHide == ''){
          this.iconShow.productShow = '';
          this.iconShow.productHide = 'glyphicon-menu-down';
          this.introduceShow.product = false;
        }
        break;

        case 'preSale':
        if(this.iconShow.preSaleShow == '' && this.iconShow.preSaleHide == 'glyphicon-menu-down'){
          this.iconShow.preSaleShow = 'glyphicon-menu-up';
          this.iconShow.preSaleHide = '';
          this.introduceShow.preSale = true;
        }else if(this.iconShow.preSaleShow == 'glyphicon-menu-up' && this.iconShow.preSaleHide == ''){
          this.iconShow.preSaleShow = '';
          this.iconShow.preSaleHide = 'glyphicon-menu-down';
          this.introduceShow.preSale = false;
        }
        break;

        case 'interactive':
        if(this.iconShow.interactiveShow == '' && this.iconShow.interactiveHide == 'glyphicon-menu-down'){
          this.iconShow.interactiveShow = 'glyphicon-menu-up';
          this.iconShow.interactiveHide = '';
          this.introduceShow.interactive = true;
        }else if(this.iconShow.interactiveShow == 'glyphicon-menu-up' && this.iconShow.interactiveHide == ''){
          this.iconShow.interactiveShow = '';
          this.iconShow.interactiveHide = 'glyphicon-menu-down';
          this.introduceShow.interactive = false;
        }
        break;

        case 'buy':
        if(this.iconShow.buyShow == '' && this.iconShow.buyHide == 'glyphicon-menu-down'){
          this.iconShow.buyShow = 'glyphicon-menu-up';
          this.iconShow.buyHide = '';
          this.introduceShow.buy = true;
        }else if(this.iconShow.buyShow == 'glyphicon-menu-up' && this.iconShow.buyHide == ''){
          this.iconShow.buyShow = '';
          this.iconShow.buyHide = 'glyphicon-menu-down';
          this.introduceShow.buy = false;
        }
        break;

        default:
        break;   
      }
      
    }

  },
  mounted() {


    }
});


