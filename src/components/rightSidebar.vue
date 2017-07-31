<template>
  <div class="right-bottom-float">
      <ul>
          <li><a href="javascript:;" @click="function(){$root.$emit('toggleApplyModal', true, '欢迎申请试用', '右侧申请试用-5815582')}"><img src="../images/home/cooperative.png" alt=""><p>申请试用</p></a></li>
          <li class="online-service"><a href="http://webim.qiao.baidu.com/im/index?siteid=6252327&ucid=undefined&lastsubid=&from=%E4%B8%8A%E6%B5%B7%E5%98%89%E5%AE%9A&bid=df40bda5c9efda02a2d150a4&chattype=1&ref=http%3A%2F%2Fo2o.31huiyi.com%2F"><img src="../images/home/online_service.png" alt=""><p>在线客服</p></a></li>
          <li class="hot-line"><a href="javascript:;"><img src="../images/home/hot_line.png" alt=""><p><span>400-690-3131</span>&nbsp; 咨询热线</p></a></li>
      </ul>
  </div>
</template>

<script>
  import applyModal from './applyModal.vue';
  export default{
    // props: {
    //   title: {
    //     type: String,
    //     default: '开始申请试用'
    //   },
    //   isShow: Boolean
    // },
    components: {
      applyModal
    },
    data: () => ({

    }),
    // updated() {
    //   this.$nextTick(()=>{
    //     if(this.isShow){
    //       $(this.$el).find(".js-example-basic-single").select2({
    //         placeholder: "公司类型"
    //       });
    //     }  
    //   })
    // },
    // methods: {
    //   cancel(){
    //     this.$root.$emit('toggleApplyModal', false)
    //   }
    // },
    created() {
      this.$root.$on('toggleApplyModal', (state, title) => {
        this.isShowApplyModal = state
        this.title = title

      })
    },
  }
</script>
<style scoped>
/*右下角浮动菜单*/
.right-bottom-float{ 
    width: 83px;
    font-size: 14px;   
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 99999;
}
.right-bottom-float ul{
    padding: 0;
    list-style: none;
}
.right-bottom-float ul li{
    width: 73px;
    height: 73px;    
    float: right;
    border-radius: 3.24px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 2px;
}
.right-bottom-float ul li:nth-child(1){
    background: rgba(255,138,13,0.80);
}
.right-bottom-float ul li:nth-child(1):hover{
    background: #FF8A0D;
}
.right-bottom-float ul li:nth-child(2),.right-bottom-float ul li:nth-child(3){
    background: rgba(9,161,229,0.80);
}
.right-bottom-float ul li:nth-child(2):hover,.right-bottom-float ul li:nth-child(3):hover{
    background: #0AA1E5;
}
.right-bottom-float ul li a{
    text-decoration: none!important;
    padding-top: 10px; 
    padding-bottom: 10px;
    color: #ffffff;
    display: block;
}
.right-bottom-float ul li a img{
    width: 30.5px;
}
.right-bottom-float ul li p{
    margin: 0;
}
.right-bottom-float ul li:nth-child(3){
    overflow: hidden;
    float: right;
    transition:width 1s;
    -moz-transition:width 1s; /* Firefox 4 */
    -webkit-transition:width 1s; /* Safari and Chrome */
    -o-transition:width 1s;  /*Opera*/ 
}
.right-bottom-float ul li:nth-child(3):hover{
    border-top-left-radius: 5px;
    width: 295px;
}
.right-bottom-float ul li:nth-child(3) img{
    float: right;
    margin-right: 15px;
}
.right-bottom-float ul li:nth-child(3) a{
    padding-right:6px; 
    float: right;
    word-break: keep-all;
    white-space: nowrap; 
}
.right-bottom-float ul li:nth-child(1) a p{
    margin-top: 6px;
}
.right-bottom-float ul li:nth-child(2) a p{
    margin-top: 10px;
}
.right-bottom-float ul li:nth-child(3) a p{
    margin-top: 31px!important;
    padding-right: 3px;
}
.right-bottom-float ul li:nth-child(3) a p span{
    font-size: 25px;
    margin-right: 15px;
    position: relative;
    top: -17px;
}
</style>