import topHead from '../../../components/topHead.vue'
import bottom from '../../../components/bottom.vue';
import applyForm from '../../../components/applyForm.vue'
import axios from 'axios';

// import '../../../libs/fullpage/index.js';
import '../../../styles/animate.css'
import './index.scss';
  
const app = new Vue({
  el: '#app',
  components: { 
    topHead,
    applyForm,
    bottom
  },
  data: () => ({
    spinShow: true,
    hoveSamllIndex: null,
    activePageIndex: 1,
    isFooter: false
  }),
  created() {
    const self = this;

    this.$nextTick(() => {
      this.spinShow = false;
      // $('.i-content-right').fullpage({
      //   'navigation': true,
      //   loopBottom: true,
      //   onLeave: function(index, nextIndex, direction) {
      //     if (index === 5 && nextIndex === 1) {
      //       self.isFooter = true
      //       return false;
      //     } else if (index === 5 && nextIndex === 4 && self.isFooter) {
            
      //       setTimeout(function(){ 
      //         self.isFooter = false
      //       },100)
      //       return false;
      //     }
      //     else{
      //       self.activePageIndex = nextIndex
      //     } 
      //   },
      //   afterRender: function() {
      //     self.activePageIndex = 1
      //   }
      // });
    });
  },
  methods: {
    bgChangeClick(item) {
      console.log(item.id);
      this.bgChangeCss.color = item.id;
      console.log(this.bgChangeCss.color);
    },
    hoverSmallImg(index) {
      this.hoveSamllIndex = index;
    },
    leaveSmallImg(index) {
      this.hoveSamllIndex = null;
    }
  },
  mounted() {


  }
});
