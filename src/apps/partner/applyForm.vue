<template>
  <div class="apply-form-box">
    <form class="apply-form" v-if="!isResult">
      <div class="input-wrap">
        <div class="input-label">公司名称*</div>
        <input v-model="formdata.Company" type="text" fv-required fv-requiredmsg="必填项">
        <div class="error-tip"></div>
      </div>
      <div class="select-wrap">
        <select class="js-example-basic-single">
          <option value="">所属行业*</option>
          <option value="公关会务">公关会务</option>
          <option value="酒店">酒店</option>
          <option value="旅行社">旅行社</option>
          <option value="技术供应商">技术供应商</option>
          <option value="其他">其他</option>
        </select>
      </div>
      <div class="input-wrap">
        <div class="input-label">姓名*</div>
        <input v-model="formdata.RealName" type="text" fv-required fv-requiredmsg="必填项">
        <div class="error-tip"></div>
      </div>
      <div class="input-wrap">
        <div class="input-label">手机*</div>
        <input v-model="formdata.Mobile" type="text" fv-required fv-requiredmsg="必填项" fv-pattern="^1\d{10}$" fv-patternmsg="请输入正确的手机号">
        <div class="error-tip"></div>
      </div>
      <!--<div class="select-wrap">
        <select class="js-example-basic-single">
          <option value="">公司类型</option>
          <option value="主办方">主办方</option>
          <option value="广告">广告</option>
          <option value="公关">公关</option>
          <option value="会务">会务</option>
          <option value="会展">会展</option>
          <option value="文化传媒">文化传媒</option>
          <option value="公益">公益</option>
          <option value="学校">学校</option>
          <option value="培训公司">培训公司</option>
        </select>
      </div>-->
      <!--<div class="input-wrap">
        <div class="input-label">输入您的邮箱*</div>
        <input v-model="formdata.Email" type="text" fv-required fv-requiredmsg="必填项" fv-pattern="(^\s*$)|(^.+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$)" fv-patternmsg="请输入正确的邮箱">
        <div class="error-tip"></div>
      </div>-->
      <div class="input-wrap">
        <div class="input-label">职位</div>
        <input v-model="formdata.PosStatusEx" type="text">
      </div>
      <div class="input-wrap">
        <div class="input-label">业务/产品简介*</div>
        <input v-model="formdata.ProductBrief" type="text" fv-required fv-requiredmsg="必填项">
        <div class="error-tip"></div>
      </div>
      <div class="input-wrap">
        <div class="input-label">典型案例*</div>
        <input v-model="formdata.ClassicCase" type="text" fv-required fv-requiredmsg="必填项">
        <div class="error-tip"></div>
      </div>
      <div class="input-wrap">
        <div class="input-label">覆盖城市*</div>
        <input v-model="formdata.CoveredCity" type="text" fv-required fv-requiredmsg="必填项">
        <div class="error-tip"></div>
      </div>
      <a href="javascript:;" class="submit-btn" @click="submitForm">{{!isAjax ? '提交' : '请稍后...'}}</a>
    </form>
    <div class="partner-success apply-success" v-if="isResult">
      <div class="success-img">
          <img src="../../images/custom/success-img.png" alt="">
          <h3>提交成功!</h3>
          <p>您的信息提交成功，客服将在24小时内与您联系。</p>
      </div>
      <div class="success-qrcode">
          <img src="../../images/custom/success-twocode.png" alt="">
          <p>扫描二维码，添加客服小欣，快速获取咨询和服务</p>
      </div>
    </div>    
  </div>
</template>
<script>
  import { Message } from 'iview';
  import axios from 'axios';
  import '../../libs/validate/formValidate';
  export default {
    props: {
      from: {
        type: [String, Number],
        default: '10001'
      },
    },
    data: () => ({
      formdata: {
        Company: '',
        IndustryOwned: '',
        RealName: '',
        Mobile: '',
        PosStatusEx: '',
        ProductBrief: '',
        ClassicCase: '',
        CoveredCity: ''
      },
      isResult: false,
      isAjax: false,
    }),
    created(){
      this.$root.$on('changeCompanyType', (val)=>{
        this.formdata.CompanyType = val;
      })
    },
    mounted(){
      const self = this;
      $('.apply-form').formValidate();
      $('.input-wrap input').on('focus', function(){
        $(this).parent().removeClass('small').addClass('focus');
      }).on('blur', function(){
        $(this).parent().removeClass('focus');
        if(this.value !== ''){
          $(this).parent().addClass('small');
        }
      })
      this.$nextTick(()=>{
        $(this.$el).find(".js-example-basic-single").off().select2({
          placeholder: "所属行业*"
        }).on('change', function () {
          self.$root.$emit('changeCompanyType', this.value)
        });
      })
    },
    methods: {
      submitForm(e){
        const self = this;
        $(e.target).parents('form').trigger('submit', function(res){
          //验证通过
          if(!res.type){
            self.isAjax = true;
            axios.post("/api/submit_2017/submit_s", Object.assign({}, self.formdata, {ChannelManagementId: self.from}))
            .then(res => {
              self.isAjax = false;
              if(res.status !== 200){
                Message.error('网络异常，请稍后重试')
                return false
              }
              if(res.data.code !== 0){
                Message.error(res.data.msg)
              }
              else{
                Message.success('提交成功')
                self.isResult = true
              }
            })
          }
          else {
            Message.error('表单验证失败')
          }
        });
      }
    }
  }
</script>
<style lang="scss">
  
  .apply-form {
    .input-wrap{
      position: relative;
      height: 68px;
      .input-label {
        position: absolute;
        top: 15px;
        padding-left: 10px;
        color: #b1a6a6;
        font-size: 14px;
        transition: .2s top,fontSize;
        z-index: 1;
      }
      .error-tip{
        position: absolute;
        right: 10px;
        top: 15px;
        font-size: 12px;
        color: #f00;
        font-weight: bold;
      }
      input {
        width: 100%;
        height: 50px;
        font-size: 12px;
        margin-bottom: 25px;
        padding-top: 25px;
        padding-bottom: 5px;
        padding-left: 10px;
        border: 1px solid #c5cbd0;
        background: none;
        position: relative;
        z-index: 2;
        &.error{
          border-color: #ff0000;
        }
      }
      &.focus{
        input{
          border-color: #07a1ff;
        }
        .input-label{
          top: 5px;
          color: #07a1ff;
          font-size: 12px;
          font-weight: bold;
        }
      }
      &.small{
        .input-label{
          top: 5px;
          font-size: 12px;
          font-weight: bold;
          color: #000000;
        }
      }
    }
    
    .select-wrap {
      position: relative;
      margin-bottom: 25px;
      width: 100%;
      height: 50px;
      select {
        width: 100%;
        height: 50px;
        border: 1px solid #c5cbd0;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
      }
    }

    .submit-btn {
      display: block;
      width: 140px;
      height: 50px;
      line-height: 50px;
      cursor: pointer;
      text-align: center;
      border: none;
      color: #fff;
      margin: 0 auto;
      font-size: 16px;
      background: #07a1ff;
      text-decoration: none;
      &:hover{
        background: #0086d7;
      }
    }
  }

  .apply-form-box{
    position: relative;
  }

  /*提交成功后显示页面*/
  .partner-success {
    width: 100%;
    background: #fff;

    .success-img {
      padding-top: 50px!important;
      height: 300px!important;
      background: #fff;
      text-align: center;
      p{
        color: #999;
      }
    }
    .success-img h3 {
      margin-top: 5px;
    }
    .success-qrcode {
      padding-top: 60px!important;
      height: 300px!important;
      background: #f6f6f6;
      text-align: center;
    }
    .success-qrcode img {
      margin-bottom: 10px;
    }
  }

  .select2-search__field {
    display: none;
  }
  .select2-selection {
    border: 1px solid #c5cbd0 !important;
    height: 50px !important;
    border-radius: 0 !important;
    padding-top: 10px !important;
  }
  .select2-selection__arrow {
    margin-top: 10px !important;
  }

</style>
