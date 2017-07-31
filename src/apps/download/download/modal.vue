<template>
    <div class="modal-pop">
        <p type="primary" @click="modal1 = true">使用帮助</p>
        <Modal
            v-model="modal1"
            title="使用帮助">
            <div class="modal-body"> 
                <img src="http://31huiyi.com/Images/corp-img/help-info-con.png" />
                <div class="modal-body-block">
                    <ul>
                        <li><p>下载并安装完成后，右键单击微信墙本地服务软件，选择<span>以管理员身份打开</span></p></li>
                        <li><p>通过<span>31会议网的账号和密码</span>登录微信墙本地服务软件，选择并进入您要操作微信墙</p></li>
                        <li><p>确定您的微信墙<span>是否与配置妥当</span>，确认无误后点击进入投影大屏开始现场互动</p></li>
                        <li><p>当您需要多屏进行微信墙展示时，可以通过<span>复制大屏链接</span>，在浏览器中打开同一微信墙大屏用于显示其他功能</p></li>
                    </ul>
                </div>
            </div>
            <div class="modal-footer" slot="footer"> </div>
        </Modal>
    </div>
</template>
<script>
import {Modal} from 'iview'
export default {
    data () {
        return {
            modal1: false
        }
    },
    components: {
        Modal
    },
    methods: {
        // ok () {
        //     this.$Message.info('点击了确定');
        // },
        // cancel () {
        //     this.$Message.info('点击了取消');
        // }
    }
}
</script>
<style lang="scss">
.modal-pop{
    p{
        color:#0AA1E5;
        cursor:pointer;
    }
}

.ivu-modal{
    width:840px!important;
}

.modal-body-block{
    overflow:auto;
    ul li{
        float:left;
        width:25%;
        p{
            height: 158px;
            width: 160px;
            margin: auto;
            padding: 15px;
            font-size:14px;
            border: 1px solid #E6E6E6;
            span{
                color:#ff8400;
            }
        }
    }
}
 
.modal-body{
    padding-top:40px;
    padding-bottom:40px;
}

.ivu-modal-footer{
    display:none;
}

.ivu-modal-header-inner{
    font-weight:400;
    font-size:22px;
}

</style>