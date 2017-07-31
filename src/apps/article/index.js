import topHead from '../../components/topHead.vue'
import bottom from '../../components/bottom.vue';
import applyForm from '../../components/applyForm.vue'

import './index.scss';
import axios from 'axios';  

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
    newsCrumbs: {data:''}, 
    hotLists: [] 
  },
  created(){
    this.$nextTick(() => { 
      this.spinShow  = false;
    });
    const self = this;
    axios.all([
        // axios.get("/api/newsinfo_2017/GetPagePosition?articleCategoryId=810453606"), 
        axios.get("/LoadArticle_2017?pagesize=10&type=hot")
    ]).then(axios.spread(function(res1){    
        // console.log(res1);
        // console.log(res2);
        // console.log(res1.data.data);   
        // self.newsCrumbs.data = res1.data.data;       
        self.hotLists = res1.data;
      })) 
  },
  methods: {

  },
  mounted() {


  }
});


