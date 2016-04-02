<template>

  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left">
    </a>
    <h1 class="title">课程中心</h1>
  </header>
  <div class="content infinite-scroll">
  <div class="list-block media-list">
    <ul>
      <li v-for="task in tasks | orderBy 'id' -1" v-link="{ name: 'course_show', params: { cu_id: task.id}}" class="course-wrap">
      <a href="#" class="item-link item-content">
         <div class="item-media"><img src={{"http://www.8000wei.com/files/"+task.middlePicture.replace("public:","")}} style='width: 4.3rem;'></div>
           <div class="item-inner">
            <div class="item-title-row">
             <div class="item-title">{{task.title}}</div>
             <div class="item-after">￥{{task.price}}</div>
            </div>
            <div class="item-text">{{task.title}}</div>
          </div>
           </a>
      </li>
    </ul>
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
      tasks: []
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
      return this.$http.get('http://8000wei.com:8000/v1/course/latest/45')
      .then(({data: {code, success, result}})=>{
        this.tasks = result
      })
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