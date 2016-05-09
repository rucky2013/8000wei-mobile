<template>
  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/person', replace: true}">
        <span class="icon icon-left"></span>
      </a>
    <h1 class='title'>在学的课程</h1>
  </header>
  <div class="content infinite-scroll">
  <div class="list-block media-list">
    <ul>
      <li v-for="learn in learns | orderBy 'id' -1" v-link="{ name: 'course_show', params: { cu_id: learn.course.id}}" class="course-wrap">
      <a href="#" class="item-link item-content">
         <div class="item-media"><img src={{"http://www.8000wei.com/files/"+learn.course.smallPicture.replace("public:","")}} style='width: 4.3rem;'></div>
           <div class="item-inner">
            <div class="item-title-row">
             <div class="item-title">{{learn.course.title}}</div>
            </div>
            <div class="item-text">目标：{{learn.course.goals.replace("|","").replace("|","")}}</div>
          </div>
           </a>
      </li>
    </ul>
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
      idlog: '',
      learns: []
    }
  },
  route: {
    data (transition) {
      let idlog = transition.to.params.idlog
      return this.$http.get('http://8000wei.com:8000/v1/course/learn/' + idlog)
      .then(({data: {code, success, result}})=>{
        this.learns = result
      })
    }
  }
}
</script>