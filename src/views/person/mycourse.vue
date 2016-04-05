<template>
	<header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/myhome', replace: true}">
    <span class="icon icon-left"></span>
    </a>
    <h1 class="title">{{$route.params.myid}}</h1>
   </header>
   <div class="content">
  <div class="content-block-title">扫码或点击下载</div>
  <div class="card demo-card-header-pic">
    <div valign="bottom" class="card-header color-white no-border no-padding">
      <img class='card-cover' src="http://www.anstnd.cn/src/download.png" alt="">
    </div>
    <div class="card-content">
      <div class="card-content-inner">
        <a href="http://www.anstnd.cn/hi.apk" class="button button-big button-fill button-success">点此下载</a>
      </div>
    </div>
  </div>
  </div>
</template>