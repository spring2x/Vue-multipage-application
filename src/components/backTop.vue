
<template>
  <Back-top :height="100" :bottom="240">
      <div class="top"></div>
  </Back-top>
</template>

<script>
  import { BackTop } from 'iview';
  import applyForm from './applyForm.vue'
  export default{
    // props: {
    //   title: {
    //     type: String,
    //     default: '开始申请试用'
    //   },
    //   isShow: Boolean
    // },
    components: {
      BackTop,
      applyForm
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
    // }
  }
</script>
<style scoped>
    .top{
        height: 25px;
        margin-right: -20px;
        width: 73px;
        padding: 10px;
        background-image: url(../images/home/rightSideBarArrow.png);
        background-color: #000000;
        background-repeat: no-repeat;
        background-position: 25px 6px;
        opacity: 0.15;
        border-radius: 3.24px;
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
    .top:hover{
        background-color: #000000;
        opacity: 0.3;
    }
</style>