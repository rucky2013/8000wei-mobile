<template>

	<header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/course'}">
    <span class="icon icon-left"></span>
    </a>
    <h1 class="title">{{cushow.title}}</h1>
  </header>

<div class="content">
 
  <div class="list-block">
    <ul>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">价格 ：</div>
          <div class="item-after">￥{{cushow.price}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="content-padded">
        <div class="item-inner">
        <div class="item-title button button-fill">简介:</div>
        </div>
          <div class="content-padded" v-html='cushow.about'>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="list-block contacts-block">
  <div class="list-group">
      <div class="list-title button button-fill">课时列表：</div>
      <ul class="list-content">
          <li class="item-content" v-link="{name: 'course_play', params: {cu_url: culesson.media.qiniu_name + '.mp4'}}" v-for="culesson in culessons">
          <a href="#" class="item-link item-content">
            {{culesson.title}}
          </a>
          </li>
       </ul>
    </div>
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
      cu_id: '',
      cushow: [],
      culessons: []
    }
  },
  route: {
    data (transition) {
      let cu_id = transition.to.params.cu_id
      let cush = this.$http.get('http://8000wei.com:8000/v1/course/' + cu_id)
      .then(({data: {code, success, result}})=>{
        this.cushow = result
      })
      let cule = this.$http.get('http://8000wei.com:8000/v1/course/' + cu_id + '/lessons')
      .then(({data: {code, success, result}})=>{
        this.culessons = result
      })
      console.log(cule)
      let cuarr = [cush, cule]
      return cuarr
    }
  }
}
</script>