import {Page} from 'iview'
import topHead from '../../components/topHead.vue'
import bottom from '../../components/bottom.vue';
import applyForm from '../../components/applyForm.vue'

import './index.css';
import axios from 'axios';
import casesJs from './cases.js';    

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
    chooseShow: {type:[],industry:[],product:[],city:[]},   
    choose: {type:[],industry:[],product:[],city:[]},  
    typeLists: [
      {
        id:"1",
        name:"国际大会"
      },
      {
        id:"2",
        name:"论坛峰会"
      },
      {
        id:"3",
        name:"品牌公关活动"
      },
      {
        id:"4",
        name:"新闻发布会"
      },
      {
        id:"5",
        name:"订货会"
      },
      {
        id:"6",
        name:"年会"
      },
      {
        id:"7",
        name:"百人小活动"
      },
      {
        id:"8",
        name:"学术会议"
      },
      {
        id:"9",
        name:"培训会"
      },
      {
        id:"10",
        name:"展览"
      },
      {
        id:"11",
        name:"用户大会"
      },
      {
        id:"12",
        name:"赛事"
      },
      {
        id:"13",
        name:"其他"
      }],
    industryLists: [
      {
        id:"1",
        name:"TMT",
      },
      {
        id:"2",
        name:"金融",
      },
      {
        id:"3",
        name:"汽车",
      },
      {
        id:"4",
        name:"医疗",
      },
      {
        id:"5",
        name:"快消",
      },
      {
        id:"6",
        name:"培训",
      },
      {
        id:"7",
        name:"社团",
      },
      {
        id:"8",
        name:"房产",
      },
      {
        id:"9",
        name:"政府",
      },
      {
        id:"10",
        name:"媒体",
      },
      {
        id:"11",
        name:"第三方",
      },
      {
        id:"12",
        name:"其他",
      }],
    productLists1: [
      {
        id:"1",
        name:"注册报名"
      },
      {
        id:"2",
        name:"会议微站"
      },
      {
        id:"3",
        name:"会议PC网站"
      },
      {
        id:"4",
        name:"微信公众号开发"
      },
      {
        id:"5",
        name:"微信签到"
      },
      {
        id:"6",
        name:"电子签到"
      },
      {
        id:"7",
        name:"闸机签到"
      },
      {
        id:"8",
        name:"现场制证"
      },
      {
        id:"9",
        name:"其他"
      }],
    productLists2: [
      {
        id:"10",
        name:"微信互动系统"
      },
      {
        id:"11",
        name:"天降红包"
      },
      {
        id:"12",
        name:"抽奖"
      },
      {
        id:"13",
        name:"3D互动墙"
      },
      {
        id:"14",
        name:"打赏系统"
      },
      {
        id:"15",
        name:"许愿树"
      },
      {
        id:"16",
        name:"嗨订货"
      },
      {
        id:"17",
        name:"签约上墙"
      },
      {
        id:"18",
        name:"企业红包"
      },
      {
        id:"19",
        name:"直播/点播"
      },
      {
        id:"20",
        name:"定时摇红包"
      },
      {
        id:"21",
        name:"其他"
      }],
    productLists3: [
      {
        id:"22",
        name:"年度活动管理"
      },
      {
        id:"23",
        name:"微信营销"
      },
      {
        id:"24",
        name:"微站管理"
      },
      {
        id:"25",
        name:"会员管理"
      },
      {
        id:"26",
        name:"分销管理"
      },
      {
        id:"27",
        name:"自动化营销"
      }],
    cityLists: [
      {
        id:"1",
        name:"上海"
      },
      {
        id:"2",
        name:"深圳"
      },
      {
        id:"3",
        name:"广州"
      },
      {
        id:"4",
        name:"杭州"
      },
      {
        id:"5",
        name:"成都"
      },
      {
        id:"6",
        name:"重庆"
      },
      {
        id:"7",
        name:"西安"
      },
      {
        id:"8",
        name:"武汉"
      },
      {
        id:"9",
        name:"郑州"
      },
      {
        id:"10",
        name:"长沙"
      },
      {
        id:"11",
        name:"珠海"
      },
      {
        id:"12",
        name:"厦门"
      },
      {
        id:"13",
        name:"天津"
      },
      {
        id:"14",
        name:"苏州"
      },
      {
        id:"15",
        name:"其他"
      }],
    caseLists: [],
    postData: {
      "pageindex":1,  
      "pagesize":5,
      "EventTypes":[], 
      "Industries":[],
      "ProductCategories":[],
      "Cities":[],
      "ArticleCategoryId":810453604
    },
    getDataLength: {num:0},
    getData: []
  },
  created(){
    this.$nextTick(() => { 
      this.spinShow  = false;
      casesJs();
    });
    this.getChangeData();
    this.getHomeChangeIndustry();
  },
  methods: {
    typeList(item){
      this.postData.pageindex = 1;
      // 点击不限数组置空
      // console.log(item==0);
      if(item==0){
        this.choose.type = [];
        this.chooseShow.type = [];
        this.postData.EventTypes = [];
        this.getChangeData();
      }else{
        // 点击其他内容向数组中添加
        var typeIndex = this.choose.type.indexOf(item.id)
        // console.log(typeIndex);
        if(typeIndex==-1){   
          this.choose.type.push(item.id);
          this.chooseShow.type.push(item.name);
          this.postData.EventTypes.push(item.name);
          this.getChangeData();
        }else{
          this.choose.type.splice(typeIndex,1);
          this.chooseShow.type.splice(typeIndex,1);
          this.postData.EventTypes.splice(typeIndex,1);
          this.getChangeData();
        }
      }      
      // console.log(this.choose);
      // console.log(this.chooseShow.type);
      // console.log(this.postData);
    },  
    industryList(item){     
      this.postData.pageindex = 1;
      // 点击不限数组置空
      if(item==0){
        this.choose.industry = [];
        this.chooseShow.industry = [];
        this.postData.Industries = [];
        this.getChangeData();
      }else{
        // 点击其他内容向数组中添加
        var industryIndex = this.choose.industry.indexOf(item.id)
        // console.log(industryIndex);
        if(industryIndex==-1){  
          this.choose.industry.push(item.id);
          this.chooseShow.industry.push(item.name);
          this.postData.Industries.push(item.name);
          this.getChangeData();
        }else{
          this.choose.industry.splice(industryIndex,1);
          this.chooseShow.industry.splice(industryIndex,1);
          this.postData.Industries.splice(industryIndex,1);
          this.getChangeData();
        } 
      }
      
    }, 
    productList(item){ 
      this.postData.pageindex = 1;
      // 点击不限数组置空
      if(item==0){
        this.choose.product = [];
        this.chooseShow.product = [];
        this.postData.ProductCategories = [];
        this.getChangeData();
      }else{
        // 点击其他内容向数组中添加
        var productIndex = this.choose.product.indexOf(item.id)
        if(productIndex==-1){   
          this.choose.product.push(item.id);
          this.chooseShow.product.push(item.name);
          this.postData.ProductCategories.push(item.name);
          this.getChangeData();
        }else{
          this.choose.product.splice(productIndex,1);
          this.chooseShow.product.splice(productIndex,1);
          this.postData.ProductCategories.splice(productIndex,1);
          this.getChangeData();
        } 
      }
        
    }, 
    cityList(item){
      this.postData.pageindex = 1;
      // 点击不限数组置空
      if(item==0){
        this.choose.city = [];
        this.chooseShow.city = [];
        this.postData.Cities = [];
        this.getChangeData();
      }else{
        // 点击其他内容向数组中添加
        var cityIndex = this.choose.city.indexOf(item.id)
        if(cityIndex==-1){   
          this.choose.city.push(item.id);
          this.chooseShow.city.push(item.name);
          this.postData.Cities.push(item.name);
          this.getChangeData();
        }else{
          this.choose.city.splice(cityIndex,1);
          this.chooseShow.city.splice(cityIndex,1); 
          this.postData.Cities.splice(cityIndex,1);
          this.getChangeData();
        }      
      }
      
    }, 
    deleteTypeList(index){ 
      this.postData.pageindex = 1;
      this.choose.type.splice(index,1);
      this.chooseShow.type.splice(index,1); 
      this.postData.EventTypes.splice(index,1);
      this.getChangeData();
    },
    deleteIndustryList(index){ 
      this.postData.pageindex = 1;
      this.choose.industry.splice(index,1);
      this.chooseShow.industry.splice(index,1); 
      this.postData.Industries.splice(index,1);
      this.getChangeData();
    },
    deleteProductList(index){ 
      this.postData.pageindex = 1;
      this.choose.product.splice(index,1);
      this.chooseShow.product.splice(index,1);
      this.postData.ProductCategories.splice(index,1); 
      this.getChangeData();
    },
    deleteCityList(index){ 
      this.postData.pageindex = 1;
      this.choose.city.splice(index,1);
      this.chooseShow.city.splice(index,1);  
      this.postData.Cities.splice(index,1);
      this.getChangeData();
    },
    emptyList(){
      this.postData.pageindex = 1;
      this.choose.type.splice(0,this.choose.type.length);
      this.chooseShow.type.splice(0,this.chooseShow.type.length);
      this.choose.industry.splice(0,this.choose.industry.length);
      this.chooseShow.industry.splice(0,this.chooseShow.industry.length);
      this.choose.product.splice(0,this.choose.product.length);
      this.chooseShow.product.splice(0,this.chooseShow.product.length);
      this.choose.city.splice(0,this.choose.city.length); 
      this.chooseShow.city.splice(0,this.chooseShow.city.length);

      this.postData.EventTypes = [];
      this.postData.Industries = [];
      this.postData.ProductCategories = []; 
      this.postData.Cities = [];
      this.getChangeData();
      // this.choose['type'] = '0'; 
      // this.choose['industry'] = '0';
      // this.choose['product'] = '0';
      // this.choose['city'] = '0'; 
      // this.chooseShow['type'] = '';  
      // this.chooseShow['industry'] = ''; 
      // this.chooseShow['product'] = ''; 
      // this.chooseShow['city'] = ''; 
    }, 
    pageChange: function(page){ 
      this.postData.pageindex = page;
      this.getChangeData();
    },
    getChangeData(){
        axios.post('/api/article_2017/GetArticleList', this.postData).then(response => response.data) 
          .then(data => {
            if(data.data){
              this.getDataLength.num = data.data.Total;
              this.getData = data.data.List;   
            }
            else{
              this.getDataLength.num = 0;
              this.getData = [];   
            }
            
          }); 
    },
    getHomeChangeIndustry(){
        if(location.search==""){
            return false;
        }
        function getQueryString(name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return unescape(r[2]);  
            }
            return null;
        }
        
        var searchValue = getQueryString("industry"); 
        if(searchValue != null) {
            this.choose.industry.push(searchValue);
            this.chooseShow.industry.push(this.industryLists[searchValue-1].name);
            this.postData.Industries.push(this.industryLists[searchValue-1].name);
        }
        var typesearchValue = getQueryString("type");
        if(typesearchValue != null) {
            console.log(typesearchValue);
            this.choose.type.push(typesearchValue);
            this.chooseShow.type.push(this.typeLists[typesearchValue-1].name);
            this.postData.EventTypes.push(this.typeLists[typesearchValue-1].name);
        }
        
    }

  },
  mounted() {
      // const self = this;
      
      
      // axios({
      //   method: 'post',
      //   url: 'http://192.168.1.123/api/article_2017/GetArticleList', 
      //   data: { 
      //     self.postData
      //   }
      // })
      // .then(function(response){
      //   console.log(response.data);
      // })

    }
});


