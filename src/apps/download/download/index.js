import topHead from '../../../components/topHead.vue'
import bottom from '../../../components/bottom.vue';
import applyForm from '../../../components/applyForm.vue'

import './index.scss';
import upmodal from './modal.vue';
import axios from 'axios';  

const app = new Vue({ 
  el: '#app',
  components: {
    topHead,
    applyForm,
    bottom,
    upmodal
  },
  data: {
    name: 'Test',
    spinShow: true, 
    showHead: true,
    urls: {
      androidUrl: {},
      iosUrl: {},
      oldVersionUrl: {},
      versionUrl: {},
      wallDownloadUrl: {}
    }
  },
  created(){
    this.$nextTick(() => { 
      this.spinShow  = false;
    });
    this.getUrl();
  },
  methods: {  
    getUrl(){
      const self = this;
      axios.get('/download/urls')
      .then(function (response) {
        // console.log(response);
        self.urls.androidUrl = response.data.androidUrl;
        self.urls.iosUrl = response.data.iosUrl;
        self.urls.oldVersionUrl = response.data.oldVersionUrl;
        self.urls.versionUrl = response.data.versionUrl;
        self.urls.wallDownloadUrl = response.data.wallDownloadUrl;
        // console.log(self.urls);
      })
      .catch(function (error) {
        console.log(error);
      });
    },

  },
  mounted() {


    }
});


