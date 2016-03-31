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

    <div class="tabs">
      <div id="tab1" class="tab active">
        <div class="list-block myhome-msg">
          <ul class="list-container myhome-msg">
            <li class="item-content" v-for="msg in msgs | orderBy 'id' +1" v-link="{ name: 'content_show', params: {title: msg.title}}" style="cursor:pointer"><a href="">{{msg.title}}</a></li>
          </ul>
        </div>
      </div>
      <div id="tab2" class="tab">
        <div class="list-block">
          <ul class="list-container myhome-msg">
            <li class="item-content" v-for="msg in msgs | orderBy 'id' -1" v-link="{ name: 'content_show', params: {title: msg.title}}" style="cursor:pointer"><a href="">{{msg.title}}</a></li>
          </ul>
      </div>
      </div>
      <div id="tab3" class="tab">
        <div class="list-block">
          <ul class="list-container myhome-msg">
            <li class="item-content" v-for="msg in msgs | orderBy 'id' +2" v-link="{ name: 'content_show', params: {title: msg.title}}" style="cursor:pointer"><a href="">{{msg.title}}</a></li>
          </ul>
      </div>
      </div>
      <div id="tab4" class="tab">
        <div class="list-block">
          <ul class="list-container myhome-msg">
            <li class="item-content" v-for="msg in msgs | orderBy 'id' -1" v-link="{ name: 'content_show', params: {title: msg.title}}" style="cursor:pointer"><a href="">{{msg.title}}</a></li>
          </ul>
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
      },
      msgs: [
        {
          id: 1,
          title: '餐饮业如何做好节假日营销'
        },
        {
          id: 2,
          title: '餐饮老板注意了！中式连锁快餐关店潮来袭'
        },
        {
          id: 3,
          title: '拉面馆创业造就一个农民的幸福生活'
        },
        {
          id: 4,
          title: '杭州凡老头小吃店，炒螺蛳炒出两辆宝马两套房'
        },
        {
          id: 5,
          title: '冰芬茶语甜品店 美味不断诱惑不断'
        },
        {
          id: 6,
          title: '十平米饮品小店 日卖五百杯'
        },
        {
          id: 7,
          title: '餐饮店老板分享的宝贵经验'
        },
        {
          id: 8,
          title: '十几平米的鱼丸店月入十万的秘密'
        }
      ]
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