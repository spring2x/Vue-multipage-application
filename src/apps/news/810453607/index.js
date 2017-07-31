import {Page} from 'iview'
import topHead from '../../../components/topHead.vue'
import bottom from '../../../components/bottom.vue';
import applyForm from '../../../components/applyForm.vue'

import './index.css';
import axios from 'axios';  

const app = new Vue({ 
  el: '#app',
  components: {
    Page,
    topHead,
    applyForm,
    bottom
  },
  data: {
    name: 'Test',
    spinShow: true, 
    showHead: true,
    newsCrumbs: {data:''}, 
    postData: {
      "pageindex":1,  
      "pagesize":10,
      "ArticleCategoryId":810453607
    },
    getDataLength: {num:5},
    getData: [],
    hotLists: [] 
  },
  created(){
    this.$nextTick(() => { 
      this.spinShow  = false;
    });
    this.getChangeData();
    const self = this;
    axios.all([
        axios.get("/api/newsinfo_2017/GetPagePosition?articleCategoryId=810453607"), 
        axios.get("/LoadArticle_2017?pagesize=10&type=hot")
    ]).then(axios.spread(function(res1,res2){    
        // console.log(res1);
        // console.log(res2);
        // console.log(res1.data.data);   
        self.newsCrumbs.data = res1.data.data;       
        self.hotLists = res2.data;
      })) 
  },
  methods: {
    pageChange: function(page){ 
      this.postData.pageindex = page;
      this.getChangeData();
    },
    getChangeData(){
      axios.post('/api/article_2017/GetArticleList', this.postData).then(response => response.data) 
        .then(data => {
          // console.log(data);
          this.getDataLength.num = data.data.Total;
          this.getData = data.data.List;   
        }); 
    }


  },
  mounted() {


    }
});


