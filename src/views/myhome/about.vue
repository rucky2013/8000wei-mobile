<template>
<div class="content invite">
  <v-bar type="nav">
    <h1 class="title" v-text="title"></h1>
    <v-button types="nav link"
      class-name="pull-left"
      v-link="{path: '/myhome', replace: true}">
      <v-icon type="left"></v-icon>
    </v-button>
  </v-bar>
  <v-list>
    <li class="item-content">
      <div class="item-inner">
        <div class="item-title">QQ交流群：</div>
        <div class="item-after" style="color:green">414380897</div>
      </div>
    </li>
  </v-list>
  <v-content type="block">
    <div class="invite-card">
        <div class="invite-card-content">
            <div class="left_logo">
              <img src="../../assets/logo.png" height="256" width="256" class="img_full" style="border-radius: 50px">
            </div>
            <div class="center_code">
                
                <div class="wx_code">
                    <img src="../../assets/wechat.jpg" height="795" width="795" class="img_full">
                </div>
                <div class="code_down">
                    <span>关注微信公众号</span>
                    
                </div>
            </div>
            
        </div>
    </div>
  </v-content>
</div>
</template>

<script>
import VBar from '../../components/Bar'
import VContent from '../../components/Content'
import VButton from '../../components/Button'
import VIcon from '../../components/Iconfont'
import VList from '../../components/List'

export default {
  data () {
    return {
      title: '八千味教育投资有限公司'
    }
  },
  components: {
    VBar,
    VContent,
    VList,
    VButton,
    VIcon
  }
}
</script>

<style>
.invite .list-block {
  margin: 2.2rem 0 0 0;
}
.invite .content-block {
  margin: .75rem 0;
}
.invite-card {
  padding: .1rem;
}
.invite-card .invite-card-content {
  width: 100%;
  height: 380.2666429px;
  border: 1px solid #B2B2B2;
  border-radius: 8px;
  background-color: #ffffff;
  padding-top: 26.666665px;
}
.invite-card .left_logo {
  width: 3rem;
  height: 3rem;
  float: left;
  margin-left: .8rem;
}
.center_code {
  width: 100%;
  margin: 0 auto;
  padding-top: 1rem;
}
.img_full {
  width: 100%;
  height: 100%;
}
.card_text {
  color: #000000;
  font-size: .8rem;
  font-weight: 600;
  display: block;
  width: 100%;
  padding-left: 43%;
}
.center_code .code_down {
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  line-height: 20px;
}
.code_down span {
  color: #000000;
  font-size: .8rem;
  font-weight: 600;
  display: block;
  width: 100%;
  margin-bottom: .5rem;
}
.center_code .wx_code {
  margin: 0 auto;
  width: 50%;
  height: 50%;
}
.url {
  width: 95%;
  height: 2.8rem;
  font-size: .8rem;
  text-align: center;
  border: 1px dashed black;
  margin-left: .3rem;
  border-radius: .8rem;
  overflow: hidden;
}
</style>