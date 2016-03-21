<template>

<header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/message', replace: true}">
    <span class="icon icon-left"></span>
    </a>
    <h1 class="title">{{$route.params.title}}</h1>
 </header>
<div class="content">
	<div class="content-padded">
  		<p>我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白</p>
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