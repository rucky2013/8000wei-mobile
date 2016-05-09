<template>
<div class="content profile">
  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/person', replace: true}">
    <span class="icon icon-left"></span>
    </a>
    <h1 class="title">个人资料</h1>
  </header>
  <div class="list-block">
    <ul>
      <li style="height: 3rem;">
        <div class="item-content" style="min-height: 3rem;">
          <div class="item-media"><img src={{"http://www.8000wei.com/files/"+personmsg.smallAvatar.replace("public:","")}} height="auto" style='width: 2.2rem;'></div>
          <div class="item-inner" style="min-height: 3rem;">
            <div class="item-title-row">
            </div>
            <div class="item-subtitle">头像</div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
            <div class="item-inner">
                <div class="item-title label">昵称</div>
                {{personmsg.nickname}}
            </div>
        </div>
      </li>
    </ul>
    <ul style="margin-top:.5rem;">
      <li>
        <div class="item-content">
            <div class="item-inner">
                <div class="item-title label">邮箱</div>
                {{personmsg.email}}
            </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import $ from 'zepto'
export default {
  ready () {
    $.init()
  },
  data () {
    return {
      idlog: '',
      personmsg: []
    }
  },
  route: {
    data (transition) {
      let idlog = transition.to.params.idlog
      return this.$http.get('http://8000wei.com:8000/v1/userinfo/' + idlog)
      .then(({data: {code, success, result}})=>{
        this.personmsg = result
      })
    }
  }
}
</script>

<style>
.profile .list-block {
  margin: 2.4rem 0 1rem 0;
  font-size: .65rem;
}
.profile .list-block .item-subtitle {
  font-size: .65rem;
}
.profile .list-block .item-input {
  margin-top: .06rem;
  margin-bottom: .06rem;
}
.profile .list-block input {
  font-size: .65rem;
}
.profile .list-block select {
  font-size: .65rem;
}
.profile .list-block textarea {
  font-size: .65rem;
}
.profile .list-block .item-title.label  {
  width: 30%;
}
.profile .submit-button {
  margin: 0 auto 2rem auto;
  width: 100%;
  padding: 0 .45rem;
}
.profile .submit-button button {
  background-color: #ed8e07;
  width: 100%;
  line-height: 2.1rem !important;
  height: 2.1rem !important;
}
</style>