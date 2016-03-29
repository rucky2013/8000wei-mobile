<template>

<header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/message', replace: true}">
    <span class="icon icon-left"></span>
    </a>
    <h1 class="title msg-title">{{$route.params.title}}</h1>
 </header>
<div class="content">
	<div class="content-padded">
  		<p>八千味小吃餐饮培训是国内领先的小吃创业辅导品牌，旨在为小吃行业创业人员提供课程培训及相关延伸服务，致力于打造以小吃创业资讯、教学培训、经营管理、分享交流为一体的小吃创业辅导平台，助力创业人才在小吃餐饮行业成功创业。</p>
	</div>
</div>

</template>

<script>
import $ from 'zepto'
export default {
  ready () {
    $.init()
  }
}
</script>
<style>
  .msg-title {
    font-size: .8em;
  }
</style>