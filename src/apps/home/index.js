import topHead from '../../components/topHead.vue'
import bottom from '../../components/bottom.vue';
import './index.css';
import axios from 'axios';
import outSideJs from './corp.js';
import logoArr from './logoArr.js';
import bigCarousel from './carousel.vue'; 

const app = new Vue({          
  el: '#app',
  components: {    
    topHead, 
    bottom,
    bigCarousel
  },
  data: {
    name: 'Home',
    spinShow: true,
    showHead: true,
    // bannerLists: [],
    dataLists: {
      OrganizerCount:[],
      Eventcount:[],
      AttendeeCount:[]
    },
    logoLists: {},
    caseLists: [],
    hotMeeting: []
  },
  created(){
    this.$nextTick(() => {
      this.spinShow  = false; 
      
    });
    this.getConferenceCount();
    this.getHotCasesData();
    this.getHotConferencesData();
    this.getHotCooperativePartnerData();
    outSideJs();
  },
  methods: {
    getConferenceCount(){
      const self = this;
      axios.get('/api/home_2017/GetConferenceCount')
        .then(function (response) {
          response.data.OrganizerCount.split(",").forEach(function(data,index,arr){  
            self.dataLists.OrganizerCount.push(+data);  
          });   
          response.data.Eventcount.split(",").forEach(function(data,index,arr){  
            self.dataLists.Eventcount.push(+data);  
          });   
          response.data.AttendeeCount.split(",").forEach(function(data,index,arr){  
            self.dataLists.AttendeeCount.push(+data);  
          });
          self.$nextTick(() => {
            self.rollNum();
          });  
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getHotCasesData(){
      const self = this;
      axios.get("/api/home_2017/GetHotCasesData")
        .then(function(response) {
          self.caseLists = response.data;
        })
        .catch(function(error) {
          console.log(error);
        })
    },
    getHotConferencesData(){
      const self = this;
      axios.get("/api/home_2017/GetHotConferencesData")
        .then(function(response) {
          self.hotMeeting = response.data;
        })
        .catch(function(error) {
          console.log(error);
        })
    },
    getHotCooperativePartnerData(){
      const self = this;
      axios.get("/api/home_2017/GetCooperativePartnerData")
        .then(function(response) {
          self.$nextTick(() => {
            logoArr(response.data); 
            self.logoLists = logoArr(response.data);
          });
        })
        .catch(function(error) {
          console.log(error);
        })
    },

    // getHomeData(){
    //   const self = this;
    //   axios.all([
    //       // axios.get("/api/home_2017/GetWebsiteAdsenseData"), 
    //       axios.get("/api/home_2017/GetConferenceCount"),
    //       axios.get("/api/home_2017/GetHotCasesData"),
    //       axios.get("/api/home_2017/GetHotConferencesData"),
    //       axios.get("/api/home_2017/GetCooperativePartnerData")
    //   ]).then(axios.spread(function(res1,res2,res3,res4){    
    //       // var bannerLength = res1.data.ADSpaceAdverts.length;  
    //       // var dataOrganizerCount = res2.data.OrganizerCount.split(",");
    //       // dataOrganizerCount.forEach(function(data,index,arr) {
    //       //   self.dataLists.OrganizerCount.push(+data);
    //       // });
    //       // self.dataLists.Eventcount = res2.data.Eventcount.split(",");
    //       // self.dataLists.AttendeeCount = res2.data.AttendeeCount.split(",");
    //       // self.bannerLists = res1.data.ADSpaceAdverts;  
    //       console.log(res1);
    //       res1.data.OrganizerCount.split(",").forEach(function(data,index,arr){  
    //         self.dataLists.OrganizerCount.push(+data);  
    //       });   
    //       res1.data.Eventcount.split(",").forEach(function(data,index,arr){  
    //         self.dataLists.Eventcount.push(+data);  
    //       });   
    //       res1.data.AttendeeCount.split(",").forEach(function(data,index,arr){  
    //         self.dataLists.AttendeeCount.push(+data);  
    //       });  
    //       console.log(self.dataLists.OrganizerCount[0]);   
    //       self.caseLists = res2.data;
    //       self.hotMeeting = res3.data;
    //       // console.log(res5.data[0]);
    //       // self.$nextTick(() => {
    //       //     outSideJs(bannerLength); 
    //       // });
    //       self.$nextTick(() => {
    //           logoArr(res4.data); 
    //           self.logoLists = logoArr(res4.data);
    //           self.rollNum();
    //       });

    //     }))
    // },
    
    rollNum(){
      $.fn.countTo = function(a) {
          a = a || {};
          return $(this).each(function() {
              var c = $.extend({},
              $.fn.countTo.defaults, {
                  from: $(this).data("from"),
                  to: $(this).data("to"),
                  speed: $(this).data("speed"),
                  refreshInterval: $(this).data("refresh-interval"),
                  decimals: $(this).data("decimals")
              },
              a);
              var h = Math.ceil(c.speed / c.refreshInterval),
              i = (c.to - c.from) / h;
              var j = this,
              f = $(this),
              e = 0,
              g = c.from,
              d = f.data("countTo") || {};
              f.data("countTo", d);
              if (d.interval) {
                  clearInterval(d.interval)
              }
              d.interval = setInterval(k, c.refreshInterval);
              b(g);
              function k() {
                  g += i;
                  e++;
                  b(g);
                  if (typeof(c.onUpdate) == "function") {
                      c.onUpdate.call(j, g)
                  }
                  if (e >= h) {
                      f.removeData("countTo");
                      clearInterval(d.interval);
                      g = c.to;
                      if (typeof(c.onComplete) == "function") {
                          c.onComplete.call(j, g)
                      }
                  }
              }
              function b(m) {
                  var l = c.formatter.call(j, m, c);
                  f.html(l)
              }
          })
      };
      $.fn.countTo.defaults = {
          from: 0,
          to: 0,
          speed: 1000,
          refreshInterval: 100,
          decimals: 0,
          formatter: formatter,
          onUpdate: null,
          onComplete: null
      };
      function formatter(b, a) {
          return b.toFixed(0)
      }
      $(".bai").data("countToOptions", {
          formatter: function(b, a) {
              return b.toFixed(2).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
          }
      });
      $(".rollnum").each(count);
      function count(a) {
          var b = $(this);
          a = $.extend({},
          a || {},
          b.data("countToOptions") || {});
          b.countTo(a)
      };
    }
  },
  computed: {
    dataList1(){
      return this.dataLists.OrganizerCount[1]
    }
  },
  mounted() {
    
  }
 

});


    