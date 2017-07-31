<template>
    <companyLogo></companyLogo>
</template>
<script>
  import companyLogo from './companyLogo.vue'
  export default{
    props: {
      title: {
      },
      from: {
      },
      // isShow: Boolean
    },
    components: {
      companyLogo
    },
    data: () => ({

    }),
    updated() {
      // const self = this;
      // this.$nextTick(()=>{
      //   if(this.isShow){
      //     $(this.$el).find(".js-example-basic-single").off().select2({
      //       placeholder: "公司类型"
      //     }).on('change', function () {
      //       self.$root.$emit('changeCompanyType', this.value)
      //     });
      //   }  
      // })
    },
    methods: {
      // cancel(){
      //   this.$root.$emit('toggleApplyModal', false)
      // }
    }
  }
</script>
<style lang="scss">
  
</style>