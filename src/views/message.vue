<template>
	<header class="bar bar-nav">
    <a class="button button-link button-nav pull-left">
    </a>
    <h1 class="title">资讯中心</h1>
   </header>
	<div class="content">
   	<mslider :imgs="mslider.imgs" :config="mslider.config"></mslider>
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
            <li class="item-content" v-for="msg in msgs1 | orderBy 'id' +1" v-link="{ name: 'content_show', params: {msg_id: msg.id}}" style="cursor:pointer"><a href="">{{msg.title}}</a></li>
          </ul>
        </div>
      </div>
      <div id="tab2" class="tab">
        <div class="list-block">
          <ul class="list-container myhome-msg">
            <li class="item-content" v-for="msg in msgs2 | orderBy 'id' -1" v-link="{ name: 'content_show', params: {msg_id: msg.id}}" style="cursor:pointer"><a href="">{{msg.title}}</a></li>
          </ul>
      </div>
      </div>
      <div id="tab3" class="tab">
        <div class="list-block">
          <ul class="list-container myhome-msg">
            <li class="item-content" v-for="msg in msgs3 | orderBy 'id' +2" v-link="{ name: 'content_show', params: {msg_id: msg.id}}" style="cursor:pointer"><a href="">{{msg.title}}</a></li>
          </ul>
      </div>
      </div>
      <div id="tab4" class="tab">
        <div class="list-block">
          <ul class="list-container myhome-msg">
            <li class="item-content" v-for="msg in msgs4 | orderBy 'id' -1" v-link="{ name: 'content_show', params: {msg_id: msg.id}}" style="cursor:pointer"><a href="">{{msg.title}}</a></li>
          </ul>
      </div>
    </div>
    </div>
    </div>

</template>

<script>
import $ from 'zepto'
import Mslider from '../components/Mslider'

export default {
  ready () {
    $.init()
  },
  data () {
    return {
      mslider: {
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
      msgs1: [],
      msgs2: [],
      msgs3: [],
      msgs4: []
    }
  },
  components: {
    Mslider
  },
  route: {
    activate ({to, next}) {
      if ($.mslider !== undefined) {
        $.mslider.stopAutoplay()
        $.mslider.startAutoplay()
      }
      next()
    },
    data ({to, next}) {
      let ms1 = this.$http.get('http://8000wei.com:8000/v1/article/category/4/latest/10')
      .then(({data: {code, success, result}})=>{
        this.msgs1 = result
      })
      let ms2 = this.$http.get('http://8000wei.com:8000/v1/article/category/5/latest/6')
      .then(({data: {code, success, result}})=>{
        this.msgs2 = result
      })
      let ms3 = this.$http.get('http://8000wei.com:8000/v1/article/category/7/latest/6')
      .then(({data: {code, success, result}})=>{
        this.msgs3 = result
      })
      let ms4 = this.$http.get('http://8000wei.com:8000/v1/article/category/6/latest/6')
      .then(({data: {code, success, result}})=>{
        this.msgs4 = result
      })
      let arr = [ms1, ms2, ms3, ms4]
      return arr
    }
  }
}

</script>