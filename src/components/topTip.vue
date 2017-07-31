<template>
  <div class="top-tip">
    <div type="primary" class="newtip" v-if="isShowTip">
      <img src="../images/home/sound.png" alt="">
      重大升级通知：尊敬的客户，31会议助手PC版及手机版重大升级，为不影响您的正常使用，请于7月20日前完成升级操作。
      <a href="javascript:;"  @click="modal1 = true">查看详情</a>
      <!-- <img @click="ShowTip()" src="../images/home/close-small.png"/> -->
    </div>
    <Modal
      v-model="modal1"
      class="newtipmodal"
      title="31会议产品重大升级通知">
      <div class="modal-body"> 
        <div class="modal-body-notice">
          <p>尊敬的客户您好，<br>
            31会议助手PC【v5.7.0】及手机版【v7.3.4】近日完成重大升级，升级后的版本将可对用户使用权限进行细分管理。因本次升级要求强制更新，届<br>
            时历史版本软件将无法使用，为不影响您的正常使用，请于<span>7月20日22:00前完成离线数据同步，并下载最新版本软件完成升级。</span></p>
        </div>
        <div class="modal-body-guide">
          <div class="modal-body-guide-top">
            <h3>更新操作指南</h3>
            <p>在确保数据已经完成离线同步后，访问 <a href="http://www.31huiyi.com/download" target="_blank">http://www.31huiyi.com/download </a>选择 ‘ Windows版本  ’或者‘ 手机端 ’点击进行。手机端用户也可直接通过<span>苹果APP Store</span> 或 <span>安卓应用商店</span>搜索<span>「31会议助手」</span>完成下载升级。</p>
          </div>
          <div class="modal-channel2">
            <h3><img src="../images/download/download/channel21.png" alt=""></h3>
            <div class="channel2-text">
              <p>活动管理软件，拥有PC端和手机端两个版本，活动主办方方可通过该软件发布活动、收集注册报名信息、</p>
              <p>管理参会人、进行现场电子签到和接送机管理、实时查看和统计分析各项数据；</p>
              <p>参会人可通过该软件报名参加活动、支付购票、查看和使用电子票。</p>
            </div>
            <div class="channel2-download">
              <div class="channel2-download-left">
                <div class="channel2-download-left-content">
                  <p><img src="../images/download/download/channel22.png" alt=""> Windows 版本</p>
                  <p>Win2003/Win7/Win8<span>版本：v{{urls.versionUrl.versionId}}</span></p>
                  <p class="odd-edition"><a :href="urls.versionUrl.downloadUrl"><img src="../images/download/download/channel23.png" alt=""> 版本(v{{urls.versionUrl.versionId}})</a></p>
                  <p class="odd-edition"><a :href="urls.oldVersionUrl.downloadUrl"><img src="../images/download/download/channel23.png" alt=""> 旧版本(v{{urls.oldVersionUrl.versionId}})</a></p>
                  <p class="odd-edition"><a href="http://mow.31huiyi.com/newcorp/ldy/detail.html" target="_blank"><img src="../images/download/download/channel24.png"> 打印机安装说明（纸质胸牌）</a></p>
                  <p class="odd-edition"><a href="http://mow.31huiyi.com/newcorp/ldy/detail-card.html" target="_blank"><img src="../images/download/download/channel24.png"> 打印机安装说明（证卡）</a></p>
                  <a :href="urls.versionUrl.downloadUrl">立即下载</a>
                </div>
              </div>
              <div class="line"></div>
              <div class="channel2-download-right">
                <div class="channel2-download-right-content">
                  <div class="channel2-download-right1">
                    <p><img src="../images/download/download/channel25.png" alt="">手机端</p>
                    <p><img src="http://file.31huiyi.com/Uploads/Files/2015/11/27/635842147057322986.png" alt=""></p>
                    <p><a :href="urls.iosUrl.downloadUrl">iOS企业证书版本下载</a></p>
                    <p>(支持ios8.0以上版本系统)</p>
                  </div>
                  <div class="channel2-download-right2">
                    <a :href="urls.androidUrl.downloadUrl"><img src="../images/download/download/channel26.png" alt="">Android版</a>
                    <a href="https://itunes.apple.com/cn/app/31hui-yi-zhu-shou/id505056112?mt=8" target="_blank"><img src="../images/download/download/channel27.png" alt="">iPhone版</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="modal-body-font">
          <h3>更新价值 & 内容</h3>
          <p>在现场签到时，为保证数据安全，大会主办方会希望<span>针对签到工作人员的身份设置不同的权限</span>，例如：签到的工作人员只能进行现场注册签到打印操作；现场数据管理的主办方人员拥有可以查看、导出所有参会者数据的数据管理权限。</p>
          <p>鉴于此，本次系统升级<span>针对企业级用户成员账号权限进行了优化与细分</span>，在【成员管理-活动权限设置】中添加了更多权限设置功能。</p>
          <p>针对会前操作人员：可以设置编辑、设置签到点、设置胸牌样式、拓展屏样式、分配房间等权限；<br>
          针对现场签到工作人员：31 会议助手只允许用来签到，无法进行其他操作；<br>
          针对现场签到负责人员：可以设置该成员具有查看签到控制台、查看签到记录等权限。
          </p>
        </div>

        <div class="modal-body-bottom">
          <div class="modal-body-bottom-twocode">
            <img src="../images/home/get_ticket_code.png"/>
            <div class="modal-body-bottom-twocode-font">
              <p>网址：www.31huiyi.com<br>
                电话：400-690-3131<br>
                总部地址：上海市浦东新区向城路58号7楼A座
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer" slot="footer"> </div>
    </Modal>
  </div>
</template>

<script>
  import {Modal} from 'iview';
  import axios from 'axios';
  export default {
    data () {
      return {
        modal1: false,
        isShowTip: true,
        urls: {
          androidUrl: {},
          iosUrl: {},
          oldVersionUrl: {},
          versionUrl: {},
          wallDownloadUrl: {}
        }
      }
    },
    components: {
      Modal
    },
    created(){
      this.getUrl();
    },
    methods:{
      ShowTip(){
        this.isShowTip = false;
      },
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
    }
  }
</script>

<style lang="scss">
  .top-tip{
    width: 100%;
    height: 50px;
    background: #FFEEB6;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    color: #000000;
    letter-spacing: 0.58px;
    position: fixed;
    z-index: 4;
    & img:nth-child(1){
      margin-top: -3px;
      margin-right: 15px;
    }
    & a{
      text-decoration: underline;
      color: #0AA1E5;
    }
    & img:nth-child(3){
      position: absolute;
      right: 40px;
      top: 17px;
    }
  }
  .newtipmodal{
    & .ivu-modal{
      width: 1050px!important;
      top: 50px;
      height: calc(100% - 100px);
      &-content{
        border-radius: 0px;
        height: 100%;
        & .ivu-modal-close{
          background-image: url(../images/home/close-big.png);
          background-repeat: no-repeat;
          background-position: 0px 0px;
          display: inline-block;
          width: 22px;
          height: 22px;
          margin-top: 28px;
          margin-right: 15px;
          & i{
            display: none;
          }
        }
        & .ivu-modal-header{
          height: 95px;
          background: #F3F3F3;
          &-inner{
            font-size:24px;
            padding-left: 14px;
            height: 100%;
            line-height: 65px;
            color: #333333;
            letter-spacing: 1px;
            font-weight: bold;
          }
        }
        & .ivu-modal-body{
          height: calc(100% - 95px);
          overflow: auto;
          & .modal-body{
            &-notice{
              border-bottom: 1px dashed #999999;
              & p{
                font-size: 14px;
                color: #333333;
                letter-spacing: 0.58px;
                line-height: 38px;
                & span{
                  color: #FF8A0D;
                }
              }
            }
            &-guide{
              border-bottom: 1px dashed #999999;
              &-top{
                text-align: center;
                & h3{
                  font-size: 18px;
                  color: #333333;
                  letter-spacing: 0.75px;
                  line-height: 35px;
                  font-weight: bold;
                }
                & p{
                  font-size: 14px;
                  font-size: 14px;
                  color: #333333;
                  letter-spacing: 0.58px;
                  line-height: 38px;
                  & a{
                    color: #0AA1E5;
                  }
                  & span{
                    color: #FF8A0D;
                  }
                }
              }
            }
            &-font{
              border-bottom: 1px dashed #999999;
              & h3{
                text-align: center;
                font-size: 18px;
                color: #333333;
                letter-spacing: 0.75px;
                line-height: 35px;
                font-weight: bold;
              }
              & p{
                font-size: 14px;
                color: #000000;
                letter-spacing: 0.58px;
                line-height: 30px;
                &:nth-child(2){
                  margin-bottom: 30px;
                }
                &:nth-child(3){
                  margin-bottom: 30px;
                }
                & span{
                  color: #FF8A0D;
                }
              }
            }
            &-bottom{
              overflow: hidden;
              padding: 40px 0px 20px 330px;
              &-twocode{
                & img{
                  width: 84px;
                  float: left;
                }
                &-font{
                  float: left;
                  margin-left: 30px;
                  margin-top: 5px;
                  & p{
                    font-size: 14px;
                    color: #000000;
                    letter-spacing: 0.58px;
                    line-height: 24px;
                  }
                }
              }
            }
          }
        }
      }
    }

  }
  

  .modal-channel2{
    padding: 20px 0px 30px 0px;
    text-align: center;
    overflow: auto;
    & .channel2-text{
      & p{
        font-size: 14px;
      }
    }
    & .channel2-download-left{
      float: left;
      text-align: left;
      width: 49%;
      & .channel2-download-left-content{
        width: 240px;
        margin: 50px auto;
        &>a{
          display: inline-block;
          border-radius: 4px;
          width: 128px;
          height: 40px;
          line-height: 40px;
          color: #FFF;
          text-align: center;
          background-color: #0AA1E5;
          text-decoration: none;
        }
        p:nth-child(1){
          font-size: 24px;
          color: #333333;
          img{
            margin-right: 10px;
          }
        }
        p:nth-child(2){
          font-size: 14px;
          color: #666666;
        }
        p:nth-child(4){
          display: none;
        }
        & .odd-edition{
          
          a{
            font-size: 14px;
            color: #0AA1E5;
            line-height: 22px;
            text-decoration: none;
            img{
              margin-top: -3px;
              margin-right: 10px;
            }
          }
          a:visited{
            text-decoration: none;
          }
        }
      }
    }
    & .line{
      height: 235px;
      width: 2px;
      margin-top: 50px;
      float: left;
      background-color: #D8D8D8;
    }
    & .channel2-download-right{
      float: left;
      width: 49%;
      & .channel2-download-right-content{
        width: 350px;
        margin: 50px auto;
        & .channel2-download-right1{
          float: left;
          text-align: left;
          p:nth-child(1){
            font-size: 24px;
            img{
              margin-right: 20px;
            }
          }
          p:nth-child(2) img{
            width: 160px;
          }
          p:nth-child(3) a{
            font-size: 12px;
            color: #0AA1E5;
            text-decoration: none;
          }
          p:nth-child(3) a:visited{
            text-decoration: none;
          }
          p:nth-child(4){
            font-size: 12px;
          }
        }
        & .channel2-download-right2{
          float: left;
          a{
            margin-left: 25px;
            display: block;
            width: 128px;
            height: 40px;
            text-decoration: none;
            border-radius: 4px;
            line-height: 38px;
            img{
              margin-right: 10px;
            }
          }
          a:visited{
            text-decoration: none;
          }
          a:nth-child(1){
            margin-top: 100px;
            color: #FFF;
            background-color: #0AA1E5;
            border: 1px solid #0AA1E5;
          }
          a:nth-child(2){
            margin-top: 10px;
            color: #0AA1E5;
            background-color: #FFF;
            border: 1px solid #0AA1E5;
          }
        }
      }
      
    }
  }

  .ivu-modal-footer{
    display:none;
  }
</style>
