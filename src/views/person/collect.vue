<template>
  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/person', replace: true}">
        <span class="icon icon-left"></span>
      </a>
    <h1 class='title'>收藏的课程</h1>
  </header>
  <div class="content infinite-scroll">
  <div class="list-block media-list">
    <ul>
      <li v-for="coll in colls | orderBy 'id' -1" v-link="{ name: 'course_show', params: { cu_id: coll.course.id}}" class="course-wrap">
      <a href="#" class="item-link item-content">
         <div class="item-media"><img src={{"http://www.8000wei.com/files/"+coll.course.smallPicture.replace("public:","")}} style='width: 4.3rem;'></div>
           <div class="item-inner">
            <div class="item-title-row">
             <div class="item-title">{{coll.course.title}}</div>
            </div>
            <div class="item-text">目标：{{coll.course.goals.replace("|","").replace("|","")}}</div>
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
      colls: []
    }
  },
  route: {
    data (transition) {
      let idlog = transition.to.params.idlog
      return this.$http.get('http://8000wei.com:8000/v1/course/favor/' + idlog)
      .then(({data: {code, success, result}})=>{
        this.colls = result
      })
    }
  }
}
</script>