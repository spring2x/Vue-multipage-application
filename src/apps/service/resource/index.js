import topHead from '../../../components/topHead.vue'
import bottom from '../../../components/bottom.vue';
import applyForm from '../../../components/applyForm.vue'
import './index.scss';
import axios from 'axios';
import { Page,Icon } from 'iview'

const app = new Vue({ 
  el: '#app',
  components: {
    Page,
    Icon,
    topHead,
    applyForm,
    bottom
  },
  data: {
    name: 'Test',
    spinShow: true, 
    showHead: true,
    searchValue: '',
    postArticleData: {
      PageSize: 15,
      PageNum: 1,
      CategoryName: ''
    },
    // chooseShow: {type:[],industry:[],product:[],city:[]},   
    choose: {service1:'-1',service2:'-1',service3:'-1',service4:'-1',service5:'-1',service6:'-1'}, 
    classifyShow: {
      service1:{
        isHide: true,
        isShow: false,
        iconDown: true,
        iconUp: false
      },
      service2:{
        isHide: true,
        isShow: false,
        iconDown: true,
        iconUp: false
      },
      service3:{
        isHide: true,
        isShow: false,
        iconDown: true,
        iconUp: false
      },
      service4:{
        isHide: true,
        isShow: false,
        iconDown: true,
        iconUp: false
      },
      service5:{
        isHide: true,
        isShow: false,
        iconDown: true,
        iconUp: false
      },
      service6:{
        isHide: true,
        isShow: false,
        iconDown: true,
        iconUp: false
      }
    },
    rightArrow: [true,true,true,true,true,true],
    service1: [
      {id:"0", name:"会场WiFi"},
      {id:"1", name:"照片直播"},
      {id:"2", name:"现场直播"},
      {id:"3", name:"会议速记"},
      {id:"4", name:"签到配置及调试服务"},
      {id:"5", name:"互动配置及调试服务"},
      {id:"6", name:"会前数据管理服务"},
      {id:"7", name:"会前证件制作"},
      {id:"8", name:"RFID闸机安装"},
      {id:"9",name:"签到一体机安装"},
      {id:"10",name:"配置标准数据报告"},
      {id:"11",name:"定制数据报告"},
      {id:"12",name:"抠图拍照"},
      {id:"13",name:"户外直播"},
      {id:"14",name:"照片直播设备"},
      {id:"15",name:"4G无线背包"},
      {id:"16",name:"直播盒子"},
      {id:"17",name:"WiFi现场布网"}
    ],
    service2: [
      {id:"0", name:"会前驻场服务"},
      {id:"1", name:"项目管理服务"},
      {id:"2", name:"会中现场支持服务"},
      {id:"3", name:"彩排服务"},
      {id:"4", name:"签到员/引导员"},
      {id:"5", name:"专属客户成功经理"},
      {id:"6", name:"远程培训服务"},
      {id:"7", name:"现场培训服务"}
    ],
    service3: [
      {id:"0", name:"网站建设"},
      {id:"1", name:"微站建设"},
      {id:"2", name:"微信公众号开发"},
      {id:"3", name:"邀请函H5开发"},
      {id:"4", name:"会议APP开发"},
      {id:"5", name:"小程序开发"}
    ],
    service4: [
      {id:"0", name:"3Dlogo墙"},
      {id:"1", name:"全息投影"},
      {id:"2", name:"VR虚拟现实"},
      {id:"3", name:"球幕投影"},
      {id:"4", name:"墙体投影"},
      {id:"5", name:"互动祝福感应墙"},
      {id:"6", name:"桌面投影"},
      {id:"7", name:"互动地面"},
      {id:"8", name:"雾幕水幕"},
      {id:"9",name:"数码橱窗"},
      {id:"10",name:"微信打印机"},
      {id:"11",name:"时间子弹"},
      {id:"12",name:"全息广告机"},
      {id:"13",name:"机器人"},
      {id:"14",name:"VR会议"},
      {id:"15",name:"全息投影"},
      {id:"16",name:"VR设备"},
      {id:"17",name:"体感游戏"},
      {id:"18",name:"启动仪式"},
      {id:"19",name:"广告机"},
      {id:"20",name:"现场拍照打印照片"},
      {id:"21",name:"手绘视频"},
      {id:"22",name:"3D投影"}
    ],
    service5: [
      {id:"0", name:"签到iPad"},
      {id:"1", name:"二维码/RFID手持机"},
      {id:"2", name:"商务签到电脑"},
      {id:"3", name:"签到用液晶显示器"},
      {id:"4", name:"摄像头"},
      {id:"5", name:"扫描枪"},
      {id:"6", name:"身份证扫描仪"},
      {id:"7", name:"RFID读写器"},
      {id:"8", name:"热敏桌面打印机"},
      {id:"9",name:"证卡打印机"},
      {id:"10",name:"激光打印机"},
      {id:"11",name:"微光盒子"},
      {id:"12",name:"液晶触摸屏"},
      {id:"13",name:"无障碍感应闸机"},
      {id:"14",name:"RFID扫描器"},
      {id:"15",name:"感应地毯及数据交换器"},
      {id:"16",name:"自助签到机机箱"},
      {id:"17",name:"电子印章签到"},
      {id:"18",name:"iPad手写拍照签到拼logo"},
      {id:"19",name:"触屏签到"}
    ],
    service6: [
      {id:"0", name:"标准热敏纸胸卡"},
      {id:"1", name:"定制热敏标签纸"},
      {id:"2", name:"卡套"},
      {id:"3", name:"吊绳"},
      {id:"4", name:"品牌手环"},
      {id:"5", name:"智能手环（RFID）"},
      {id:"6", name:"参会证件"},
      {id:"7", name:"不干胶贴纸"},
      {id:"8", name:"31标准背景版热敏纸"},
      {id:"9",name:"定制热敏胸卡贴纸"},
      {id:"10",name:"头像打印铜版纸"}
    ],
    caseLists: [],
    postData: {
      PageSize: 15,  
      PageNum: 1,
      CategoryName: ''
    },
    getDataLength: {num:0},
    getData: []
  },
  created(){
    this.$nextTick(() => { 
      this.spinShow  = false;
      var ulHeight =  $(".resource-right-classify-content-service:nth-child(3) ul").height();
      console.log(ulHeight);
      for(var i=1;i<=6;i++){
        var ulHeight = $(".resource-right-classify-content-service:nth-child("+i+") ul").height();
        if(ulHeight<40){
          this.rightArrow[i-1] = false;
        }else{
          this.rightArrow[i-1] = true;
        }
      }
    });
    // this.getChangeData();
    this.getHomeChangeIndustry();
  },
  methods: {
    serviceOne(item){
      this.postData.pageindex = 1;
      console.log(item);
      if(item==-1){
        this.choose.service1 = item;
      }else{
        this.choose.service2 = -1;
        this.choose.service3 = -1;
        this.choose.service4 = -1;
        this.choose.service5 = -1;
        this.choose.service6 = -1;
        this.choose.service1 = item.id;
        this.postData.CategoryName = item.name;   
      } 
    },  
    serviceTwo(item){
      this.postData.pageindex = 1;
      console.log(item);
      if(item==-1){
        this.choose.service2 = item;
      }else{
        this.choose.service1 = -1;
        this.choose.service3 = -1;
        this.choose.service4 = -1;
        this.choose.service5 = -1;
        this.choose.service6 = -1;
        this.choose.service2 = item.id;
        this.postData.CategoryName = item.name;  
      }   
    },   
    serviceThree(item){
      this.postData.pageindex = 1;
      console.log(item);
      if(item==-1){
        this.choose.service3 = item;
      }else{
        this.choose.service1 = -1;
        this.choose.service2 = -1;
        this.choose.service4 = -1;
        this.choose.service5 = -1;
        this.choose.service6 = -1;
        this.choose.service3 = item.id;
        this.postData.CategoryName = item.name; 
      }     
    },  
    serviceFour(item){
      this.postData.pageindex = 1;
      console.log(item);
      if(item==-1){
        this.choose.service4 = item;
      }else{
        this.choose.service1 = -1;
        this.choose.service2 = -1;
        this.choose.service3 = -1;
        this.choose.service5 = -1;
        this.choose.service6 = -1;
        this.choose.service4 = item.id;
        this.postData.CategoryName = item.name; 
      }   
    }, 
    serviceFive(item){
      this.postData.pageindex = 1;
      console.log(item);
      if(item==-1){
        this.choose.service5 = item;
      }else{
        this.choose.service1 = -1;
        this.choose.service2 = -1;
        this.choose.service3 = -1;
        this.choose.service4 = -1;
        this.choose.service6 = -1;
        this.choose.service5 = item.id;
        this.postData.CategoryName = item.name; 
      }   
    }, 
    serviceSix(item){
      this.postData.pageindex = 1;
      console.log(item);
      if(item==-1){
        this.choose.service6 = item;
      }else{
        this.choose.service1 = -1;
        this.choose.service2 = -1;
        this.choose.service3 = -1;
        this.choose.service4 = -1;
        this.choose.service5 = -1;
        this.choose.service6 = item.id;
        this.postData.CategoryName = item.name; 
      }  
    }, 
    classifyIsShow(index){
      switch (index){
        case 'service1':
        if(this.classifyShow.service1.isHide == true){
          this.classifyShow.service1.isHide = false;
          this.classifyShow.service1.isShow = true;
          this.classifyShow.service1.iconDown = false;
          this.classifyShow.service1.iconUp = true;
        }else{
          this.classifyShow.service1.isHide = true;
          this.classifyShow.service1.isShow = false;
          this.classifyShow.service1.iconDown = true;
          this.classifyShow.service1.iconUp = false;
        }
        break;
        case 'service2':
        if(this.classifyShow.service2.isHide == true){
          this.classifyShow.service2.isHide = false;
          this.classifyShow.service2.isShow = true;
          this.classifyShow.service2.iconDown = false;
          this.classifyShow.service2.iconUp = true;
        }else{
          this.classifyShow.service2.isHide = true;
          this.classifyShow.service2.isShow = false;
          this.classifyShow.service2.iconDown = true;
          this.classifyShow.service2.iconUp = false;
        }
        break;
        case 'service3':
        if(this.classifyShow.service3.isHide == true){
          this.classifyShow.service3.isHide = false;
          this.classifyShow.service3.isShow = true;
          this.classifyShow.service3.iconDown = false;
          this.classifyShow.service3.iconUp = true;
        }else{
          this.classifyShow.service3.isHide = true;
          this.classifyShow.service3.isShow = false;
          this.classifyShow.service3.iconDown = true;
          this.classifyShow.service3.iconUp = false;
        }
        break;
        case 'service4':
        if(this.classifyShow.service4.isHide == true){
          this.classifyShow.service4.isHide = false;
          this.classifyShow.service4.isShow = true;
          this.classifyShow.service4.iconDown = false;
          this.classifyShow.service4.iconUp = true;
        }else{
          this.classifyShow.service4.isHide = true;
          this.classifyShow.service4.isShow = false;
          this.classifyShow.service4.iconDown = true;
          this.classifyShow.service4.iconUp = false;
        }
        break;
        case 'service5':
        if(this.classifyShow.service5.isHide == true){
          this.classifyShow.service5.isHide = false;
          this.classifyShow.service5.isShow = true;
          this.classifyShow.service5.iconDown = false;
          this.classifyShow.service5.iconUp = true;
        }else{
          this.classifyShow.service5.isHide = true;
          this.classifyShow.service5.isShow = false;
          this.classifyShow.service5.iconDown = true;
          this.classifyShow.service5.iconUp = false;
        }
        break;
        case 'service6':
        if(this.classifyShow.service6.isHide == true){
          this.classifyShow.service6.isHide = false;
          this.classifyShow.service6.isShow = true;
          this.classifyShow.service6.iconDown = false;
          this.classifyShow.service6.iconUp = true;
        }else{
          this.classifyShow.service6.isHide = true;
          this.classifyShow.service6.isShow = false;
          this.classifyShow.service6.iconDown = true;
          this.classifyShow.service6.iconUp = false;
        }
        break;
        default:
        break;
      }
    },
    search(){
      console.log(this.searchValue);
    },
    pageChange: function(page){ 
      this.postData.pageindex = page;
      this.getChangeData();
    },
    // getArticle(){
    //   axios.post('/corpserviceresourcecategory_2017/getcategorylist',this.postData)
    // },
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

    }
});


