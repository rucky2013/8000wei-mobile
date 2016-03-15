<template>
	<header class="bar bar-nav">
    <a class="button button-link button-nav pull-left">
    </a>
    <h1 class="title">资讯中心</h1>
   </header>
	
	<div class="content">
   	<slider :imgs="slider.imgs" :config="slider.config"></slider>
    <div class="buttons-tab fixed-tab" data-offset="44">
    <a href="#tab1" class="tab-link active button">最新</a>
    <a href="#tab2" class="tab-link button">行业试点</a>
    <a href="#tab3" class="tab-link button">成功案例</a>
    <a href="#tab4" class="tab-link button">创业故事</a>
  </div>
  <div class="content-block">
    <div class="tabs">
      <div id="tab1" class="tab active">
        <div class="content-block">
          <p>This is tab 1 content</p>
        </div>
      </div>
      <div id="tab2" class="tab">
        <div class="content-block">
          <p>This is tab 2 content</p>
        </div>
      </div>
      <div id="tab3" class="tab">
        <div class="content-block">
          <p>This is tab 3 content</p>
        </div>
      </div>
      <div id="tab4" class="tab">
        <div class="content-block">
          <p>This is tab 4 content</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'zepto'
import Slider from '../components/Slider'

export default {
  ready () {
    $.init()
  },
  data () {
    return {
      slider: {
        imgs: [
          {
            src: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg',
            target: 'www.baidu.com'
          },
          {
            src: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg',
            target: 'www.baidu.com'
          },
          {
            src: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg',
            target: 'www.baidu.com'
          },
          {
            src: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg',
            target: 'www.baidu.com'
          }
        ],
        config: {
          autoplay: 1200
        }
      }
    }
  },
  components: {
    Slider
  },
  route: {
    activate ({to, next}) {
      if ($.slider !== undefined) {
        $.slider.stopAutoplay()
        $.slider.startAutoplay()
      }
      next()
    }
  }
}

</script>