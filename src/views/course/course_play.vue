<template>

	<header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/course'}">
    <span class="icon icon-left"></span>
    </a>
  </header>
  <div class="content">
   <video id="video_1" class="video-js vjs-default-skin" controls preload="auto" poster="http://www.anstnd.cn/banner1_.jpg"
      data-setup="{}">
    <!-- 三种播放格式-->
    <source src={{"http://7xpk3a.com2.z0.glb.qiniucdn.com/"+$route.params.cu_url}} type='video/mp4' />
    <!-- http://vjs.zencdn.net/v/oceans.mp4 -->
    <!-- 字幕 -->
    <track kind="captions" src="demo.captions.vtt" srclang="en" label="English"></track><!-- Tracks need an ending tag thanks to IE9 -->
    <track kind="subtitles" src="demo.captions.vtt" srclang="en" label="English"></track><!-- Tracks need an ending tag thanks to IE9 -->
    <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
  </video>

</div>
</template>
<script>
import $ from 'zepto'
export default {
  ready () {
    $.init()
  },
  methods: {
  }
}
</script>
<style>
#video_1 {
  width: 100%;
  height: 45%;
  margin-top: 20px
}
</style>