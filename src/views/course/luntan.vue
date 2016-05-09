<template>
	<header class="bar bar-nav">
    	<a class="button button-link button-nav pull-left" v-link="{path: '/myhome', replace: true}">
    		<span class="icon icon-left"></span>
    	</a>
    	<h1 class="title">创 业 论 坛</h1>
  </header>
  
  <div class="content">
  <div class="buttons-tab">
    <a href="#tab1" class="tab-link active button icon icon-edit"> 日记</a>
      <a href="#tab2" class="tab-link button icon icon-message"> 经验</a>
      <a href="#tab3" class="tab-link button icon icon-clock"> 故事</a>
      <a href="#tab4" class="tab-link button icon icon-browser"> 热点</a>
  </div>

    <div class="tabs">
      <div id="tab1" class="tab active">
          <div class="card facebook-card" v-for="riji in rijis | orderBy 'id' +1">
            <div class="card-header no-border">
              <div class="facebook-avatar"><img src={{"http://www.8000wei.com/files/"+riji.user.smallAvatar.replace("public:","")}} width="30" height="30"></div>
              <div class="facebook-name">{{riji.user.nickname}}——<i>{{riji.title}}</i></div>
              <div class="facebook-date">{{Date(riji.createdTime)}}</div>
            </div>
          <div class="card-content content-padded" v-html='riji.content'></div>
          <div class="card-footer no-border">
            <a href="#" class="link">赞</a>
            <a href="#" class="link">评论</a>
            <a href="#" class="link">分享</a>
          </div>
        </div>
      </div>
      <div id="tab2" class="tab">
          <div class="card facebook-card" v-for="jingyan in jingyans | orderBy 'id' +1">
            <div class="card-header no-border">
              <div class="facebook-avatar"><img src={{"http://www.8000wei.com/files/"+jingyan.user.smallAvatar.replace("public:","")}} width="30" height="30"></div>
              <div class="facebook-name">{{jingyan.user.nickname}}——<i>{{jingyan.title}}</i></div>
              <div class="facebook-date">{{Date(jingyan.createdTime)}}</div>
            </div>
          <div class="card-content content-padded" v-html='jingyan.content'></div>
          <div class="card-footer no-border">
            <a href="#" class="link">赞</a>
            <a href="#" class="link">评论</a>
            <a href="#" class="link">分享</a>
          </div>
        </div>
      </div>
            <div id="tab3" class="tab">
          <div class="card facebook-card" v-for="gushi in gushis | orderBy 'id' +1">
            <div class="card-header no-border">
              <div class="facebook-avatar"><img src={{"http://www.8000wei.com/files/"+gushi.user.smallAvatar.replace("public:","")}} width="30" height="30"></div>
              <div class="facebook-name">{{riji.user.nickname}}——<i>{{gushi.title}}</i></div>
              <div class="facebook-date">{{Date(gushi.createdTime)}}</div>
            </div>
          <div class="card-content content-padded" v-html='gushi.content'></div>
          <div class="card-footer no-border">
            <a href="#" class="link">赞</a>
            <a href="#" class="link">评论</a>
            <a href="#" class="link">分享</a>
          </div>
        </div>
      </div>
      <div id="tab4" class="tab">
          <div class="card facebook-card" v-for="redian in redians | orderBy 'id' +1">
            <div class="card-header no-border">
              <div class="facebook-avatar"><img src={{"http://www.8000wei.com/files/"+redian.user.smallAvatar.replace("public:","")}} width="30" height="30"></div>
              <div class="facebook-name">{{redian.user.nickname}}——<i>{{redian.title}}</i></div>
              <div class="facebook-date">{{new Date(redian.createdTime)}}</div>
            </div>
          <div class="card-content content-padded" v-html='redian.content'></div>
          <div class="card-footer no-border">
            <a href="#" class="link">赞</a>
            <a href="#" class="link">评论</a>
            <a href="#" class="link">分享</a>
          </div>
        </div>
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
      rijis: [],
      jingyans: [],
      gushis: [],
      redians: []
    }
  },
  route: {
    data () {
      let rj = this.$http.get('http://8000wei.com:8000/v1/groups-threads/7')
      .then(({data: {code, success, result}})=>{
        this.rijis = result
      })
      let jy = this.$http.get('http://8000wei.com:8000/v1/groups-threads/8')
      .then(({data: {code, success, result}})=>{
        this.jingyans = result
      })
      let gs = this.$http.get('http://8000wei.com:8000/v1/groups-threads/9')
      .then(({data: {code, success, result}})=>{
        this.gushis = result
      })
      let rd = this.$http.get('http://8000wei.com:8000/v1/groups-threads/10')
      .then(({data: {code, success, result}})=>{
        this.redians = result
      })
      let lun = [rj, jy, gs, rd]
      return lun
    }
  }
}
</script>