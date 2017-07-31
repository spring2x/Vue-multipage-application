<template>
  <Modal
    :value="isShow"
    :title="title"
    class="apply-form-modal"
    @on-cancel="cancel">
      <applyForm :from="from"></applyForm>
    <div slot="footer"></div>
  </Modal>
</template>
<script>
  import { Modal } from 'iview';
  import applyForm from './applyForm.vue'
  export default{
    props: {
      title: {
        type: String,
        default: '开始申请试用'
      },
      from: {
        type: [String, Number],
      },
      isShow: Boolean
    },
    components: {
      Modal,
      applyForm
    },
    data: () => ({

    }),
    updated() {
      const self = this;
      this.$nextTick(()=>{
        if(this.isShow){
          $(this.$el).find(".js-example-basic-single").off().select2({
            placeholder: "公司类型"
          }).on('change', function () {
            self.$root.$emit('changeCompanyType', this.value)
          });
        }  
      })
    },
    methods: {
      cancel(){
        this.$root.$emit('toggleApplyModal', false)
      }
    }
  }
</script>
<style lang="scss">
  .apply-form-modal{
    .ivu-modal-content{
      overflow: hidden;
    }
    .ivu-modal{
      width: 450px!important;
    }
    .ivu-modal-body{
      padding:25px;
    }
    .ivu-modal-header {
      background: #07a1ff;
      color: #fff;
      text-align: center;
      font-size: 22px;
      .ivu-modal-header-inner{
        color: #fff;
      }
    }
    .ivu-modal-close .ivu-icon-ios-close-empty{
      font-weight: bold;
      color: #fff;
    }
    .ivu-modal-footer{
      display: none;
    }
    @media screen and (max-width: 1440px) {
      .ivu-modal{
        top: 30px!important;
      }
    }
  }
</style>