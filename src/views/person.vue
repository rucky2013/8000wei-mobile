<template>
	<header class="bar bar-nav">
    <a class="button button-link button-nav pull-left">
    </a>
    <h1 class="title">个人中心</h1>
  </header>
<div class="content user">
  <div class="banner">
    <div class="logo">
        <div class="logo_img">
            <img src="http://www.anstnd.cn/logo.png" class="img-responsive" style="border:solid 1px #fff;border-radius: 50px;overflow:hidden;" width="64" height="64">
        </div>
        <div class="logo_txt">
            <span style="color:white;line-height: 3;"><i>八千味——小吃创业领先品牌</i></span>
        </div>
    </div>
  </div>
  <div class="list-block user-list">
  <div  v-if="idlog">
    <ul>
      <li>
        <a class="item-content item-link" v-link="{ name: 'profile', params: { idlog: idlog}}">
        <div class="item-media"><span class="icon icon-star"></sapn></div>
        <div class="item-inner">
          <div class="item-title">个人资料</div>
        </div>
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a class="item-content item-link" v-link="{ name: 'collect', params: { idlog: idlog}}">
        <div class="item-media"><span class="icon icon-star"></sapn></div>
        <div class="item-inner">
          <div class="item-title">收藏的课程</div>
        </div>
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a class="item-content item-link" v-link="{ name: 'learning', params: { idlog: idlog}}">
        <div class="item-media"><span class="icon icon-star"></sapn></div>
        <div class="item-inner">
          <div class="item-title">在学的课程</div>
        </div>
        </a>
      </li>
    </ul>
    <div class="card-content-inner">
        <a class="button button-big button-fill button-success prompt-title-ok-cancel" @click="remove">退出</a>
      </div>
    </div>
    <div v-else>
    <ul>
    <li class="list-block">
        <div class="item-content">
          <div class="item-media"><span class="icon icon-star"></sapn></div>
          <div class="item-inner">
            <div class="item-title label">邮箱</div>
            <div class="item-input">
              <input type="text" placeholder="E-mail" v-model="lname">
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ul>
    <li>
        <div class="item-content">
          <div class="item-media"><span class="icon icon-star"></sapn></div>
          <div class="item-inner">
            <div class="item-title label">密码</div>
            <div class="item-input">
              <input type="password" placeholder="Password" v-model="lpassword">
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="card-content">
      <div class="card-content-inner">
        <a class="button button-big button-fill button-success prompt-title-ok-cancel" @click="logon">登录</a>
      </div>
 <!--      <div class="card-content-inner">
        <a class="button button-big button-fill button-success prompt-title-ok-cancel" v-link="{path: '/person/login', replace: true}">登录</a>
      </div> -->
    </div>
  </div>
    <ul>
      <li>
        <a class="item-content powered">
        <div class="item-media"><span class="icon icon-star"></sapn></div>
        <div class="item-inner">
          <div class="item-title"><i>Powered by 8000wei.com ©2016 </i></div>
        </div>
        </a>
      </li>
    </ul>


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
      lname: '',
      lpassword: '',
      useId: ''
    }
  },
  methods: {
    logon () {
      if (this.lname === '') {
        $.alert('邮箱不能为空')
      }
      else if (this.lpassword === '') {
        $.alert('密码不能为空')
      }
      else if (this.lname !== 'anstnd@126.com') {
        $.alert('帐号或密码错误')
      }
      else if (this.lpassword !== '8000wei') {
        $.alert('帐号或密码错误')
      }
      // else {
      //   return this.$http.get('http://www.8000wei.com/app_dev.php/checklogin/' + this.lname + '/' + this.lpassword)
      //   .then(({data: {success}})=>{
      //     localStorage.setItem('key', success.id)
      //     this.useId = success.id
      //     this.$route.router.go({ name: 'myhome'})
      //   }, {
      //     headers: 'Access-Control-Allow-Origin: *'
      //   }).error($.alert('用户名或密码错误'))
      // }
      else {
        return this.$http.get('http://8000wei.com:8000/v1/userinfo/23')
        .then(({data: {code, success, result}})=>{
          localStorage.setItem('key', result.id)
          this.useId = result.id
          this.$route.router.go({ name: 'myhome'})
        }, {
          headers: 'Access-Control-Allow-Origin: *'
        }).error((message)=>{$.alert('用户名或密码错误')})
      }
    },
    remove () {
      localStorage.removeItem('key')
      this.$route.router.go({ name: 'myhome'})
    }
  },
  route: {
    data () {
      this.idlog = localStorage.getItem('key')
      return this.idlog
    }
  }
}
</script>
<style>
.banner {
  width: 100%;
  background-color: white;
  padding: 12.7999992px;
}
.banner .logo {
  background-color: #ed8e07;
  border-radius: 10px;
  width: 100%;
  height: 110px;
  padding: 20.2666654px 21.333332px 5.333333px;
  box-shadow: 0 .0rem .8rem rgba(0,0,0,.3);
}
.banner .logo .logo_img {
  margin-top: 0px;
  width: 58.666663px;
  height: 58.666663px;
  display: inline-block;
}
.banner .logo .logo_txt {
  margin-top: 7px;
  float: right;
  text-align: right;
}
.banner .logo .logo_txt .yue {
  color: #ffffff;
  font-size: 15.999999px;
}
.banner .logo .logo_txt .amount {
  display: block;
  margin-top: -6px;
  color: #ffffff;
  font-size: 45.8666638px;
}
.banner .in {
  width: 100%;
  height: 37.333331px;
  margin-top: 11.7333326px;
}
.banner .in .incomes {
  display: inline-block;
  width: 44%;
  height: 37.333331px;
  border-radius: 8px;
  text-align: center;
  line-height: 37.333331px;
  color: #ffffff;
  font-size: 12.7999992px;
  background-color: #ed8e07;
}
.banner .in .students {
  float: right;
  width: 44%;
  height: 37.333331px;
  border-radius: 8px;
  text-align: center;
  line-height: 37.333331px;
  color: #ffffff;
  font-size: 12.7999992px;
  background-color: #ed8e07 ;
}
.user-tab {
  background: #efeff4;
  height: 3rem;
  position: relative;
}
.user-tab .tab-item {
  height: 3rem;
  background-color: white;
}
.user-tab:before {
  background-color: white;
}
.user-list {
  margin: .7rem 0;
  height: 2.9rem;
}
.user-list ul {
  height: 2.9rem;
  /*box-shadow: 0 .01rem 0 .03rem rgba(0,0,0,.3);*/
}
.user-list li a {
  height: 2.9rem;
}
.user-list li {
  margin-top: .7rem;
  height: inherit;
}
.powered {
  font-size: 1em;
  color:gray;
}
</style>