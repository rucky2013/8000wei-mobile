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
            <img src="../assets/logo.png" class="img-responsive" style="border:solid 1px #fff;border-radius: 50px;overflow:hidden;" width="64" height="64">
            <div style="color:white;line-height: 1;">八千味</div>
        </div>
        <div class="logo_txt">
            <span class="yue">我的余额</span>
            <span class="amount timer count-title" id="count-number" data-to="300" data-speed="500" data-decimals="0">300</span>
        </div>
    </div>
  </div>
  <nav class="bar bar-tab user-tab">
    <a class="tab-item" v-link="{ name: 'mycourse', params: {myid: '在学课程'}}">
      <span class="icon icon-app"></span>
      <span class="tab-label">在学课程</span>
    </a>
    <a class="tab-item" v-link="{ name: 'mycourse', params: {myid: '收藏的课程'}}">
      <span class="icon icon-star"></span>
      <span class="tab-label">收藏课程</span>
    </a>
    <a class="tab-item" v-link="{ name: 'mycourse', params: {myid: '下载App'}}">
      <span class="icon icon-download"></span>
      <span class="tab-label">下载App</span>
    </a>
  </nav>
  <div class="list-block user-list">
    <ul>
      <li>
        <a class="item-content item-link" v-link="{ path: '/user/profile', replace: true}">
        <div class="item-media"><span class="icon icon-star"></sapn></div>
        <div class="item-inner">
          <div class="item-title">个人资料</div>
        </div>
        </a>
      </li>
    </ul>
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
    <div class="content-block">
    <div class="row">
      <div class="col-50"><a v-link="{ path: '/person/enroll', replace: true}" class="button button-big button-fill button-success">注册</a></div>
      <div class="col-50"><a v-link="{ path: '/person/login', replace: true}" class="button button-big button-fill button-success">登录</a></div>
    </div>
  </div>
  
</div>
</template>

<script>
export default {
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