<template>

  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left">
    </a>
    <h1 class="title">课程中心</h1>
  </header>
  <div class="content">
    <div class="buttons-tab fixed-tab" data-offset="44">
    <a href="#ta1" class="tab-link active button">火锅</a>
    <a href="#ta2" class="tab-link button">面粉</a>
    <a href="#ta3" class="tab-link button">烧烤</a>
    <a href="#ta4" class="tab-link button">全部课程</a>
  </div>
  <div class="tabs">
    <div id="ta1" class="tab active">
      <div class="list-block media-list">
        <ul>
          <li v-for="huo in huos | orderBy 'id' +1" v-link="{ name: 'course_show', params: { cu_id: huo.id}}" class="course-wrap">
            <a href="#" class="item-link item-content">
              <div class="item-media"><img src={{"http://www.8000wei.com/files/"+huo.middlePicture.replace("public:","")}} style='width: 4.3rem;'></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">{{huo.title}}</div>
                </div>
            <div class="item-text">目标：{{huo.goals.replace("|","").replace("|","")}}</div>
              </div>
           </a>
          </li>
        </ul>
      </div>
    </div>
    <div id="ta2" class="tab">
      <div class="list-block media-list">
        <ul>
          <li v-for="mian in mians | orderBy 'id' +1" v-link="{ name: 'course_show', params: { cu_id: mian.id}}" class="course-wrap">
            <a href="#" class="item-link item-content">
              <div class="item-media"><img src={{"http://www.8000wei.com/files/"+mian.middlePicture.replace("public:","")}} style='width: 4.3rem;'></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">{{mian.title}}</div>
                </div>
            <div class="item-text">目标：{{mian.goals.replace("|","").replace("|","")}}</div>
              </div>
           </a>
          </li>
        </ul>
        </div>
    </div>
        <div id="ta3" class="tab">
      <div class="list-block media-list">
        <ul>
          <li v-for="shao in shaos | orderBy 'id' -1" v-link="{ name: 'course_show', params: { cu_id: shao.id}}" class="course-wrap">
            <a href="#" class="item-link item-content">
              <div class="item-media"><img src={{"http://www.8000wei.com/files/"+shao.smallPicture.replace("public:","")}} style='width: 4.3rem;'></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">{{shao.title}}</div>
                </div>
            <div class="item-text">目标：{{shao.goals.replace("|","").replace("|","")}}</div>
              </div>
           </a>
          </li>
        </ul>
        </div>
    </div>
        <div id="ta4" class="tab">
      <div class="list-block media-list">
        <ul>
          <li v-for="all in alls | orderBy 'id' -1" v-link="{ name: 'course_show', params: { cu_id: all.id}}" class="course-wrap">
            <a href="#" class="item-link item-content">
              <div class="item-media"><img src={{"http://www.8000wei.com/files/"+all.middlePicture.replace("public:","")}} style='width: 4.3rem;'></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">{{all.title}}</div>
                </div>
            <div class="item-text">目标：{{all.goals.replace("|","").replace("|","")}}</div>
              </div>
           </a>
          </li>
        </ul>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import VBar from '../components/Bar'
import VButton from '../components/Button'
import $ from 'zepto'
export default {
  ready () {
    $.init()
  },
  data () {
    return {
      title: '课程中心',
      huos: [],
      mians: [],
      shaos: [],
      alls: []
    }
  },
  computed: {
    length () {
      return this.tasks.length
    }
  },
  methods: {
  },
  components: {
    VBar,
    VButton
  },
  route: {
    data ({to, next}) {
      let cu1 = this.$http.get('http://8000wei.com:8000/v1/course/category/11/latest/20')
      .then(({data: {code, success, result}})=>{
        this.huos = result
      })
      let cu2 = this.$http.get('http://8000wei.com:8000/v1/course/category/9/latest/20')
      .then(({data: {code, success, result}})=>{
        this.mians = result
      })
      let cu3 = this.$http.get('http://8000wei.com:8000/v1/course/category/7/latest/20')
      .then(({data: {code, success, result}})=>{
        this.shaos = result
      })
      let cu4 = this.$http.get('http://8000wei.com:8000/v1/course/latest/45')
      .then(({data: {code, success, result}})=>{
        this.alls = result
      })
      let cuarr = [cu1, cu2, cu3, cu4]
      return cuarr
    }
  }
}
</script>

<style>
.article {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.article-tabs .buttons-tab {
  z-index: 10;
  margin-top:2.2rem;
}
#common-tasks, #timer-tasks {
  top: 2rem;
}
.course-wrap .item-text{
  color: gray;
  font-size: 0.7em;
}
</style>