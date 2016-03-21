<template>

  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left">
    </a>
    <h1 class="title">课程中心</h1>
  </header>
  <div class="content infinite-scroll">
  <div class="list-block media-list">
    <ul>
      <li v-for="task in tasks | orderBy 'id' +1" v-link="{ name: 'course_show', params: { titlel: task.title }}" class="course-wrap">
      <a href="#" class="item-link item-content">
         <div class="item-media"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" style='width: 4rem;'></div>
           <div class="item-inner">
            <div class="item-title-row">
             <div class="item-title">{{task.title}}</div>
             <div class="item-after">$15</div>
            </div>
            <div class="item-text">{{task.content}}</div>
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
      tasks: [
        {
          id: 1,
          title: '香干牛肉',
          content: '香干牛肉香干牛肉香干牛肉香干牛肉香干牛肉香干牛肉香干牛肉'
        },
        {
          id: 2,
          title: '水煮肉片',
          content: '香干牛肉香干牛肉香干牛肉香干牛肉'
        },
        {
          id: 3,
          title: '水煮肉片',
          content: '香干牛肉香干牛肉香干牛肉香干牛肉'
        },
        {
          id: 4,
          title: '水煮肉片',
          content: '香干牛肉香干牛肉香干牛肉香干牛肉'
        },
        {
          id: 5,
          title: '水煮肉片',
          content: '香干牛肉香干牛肉香干牛肉香干牛肉'
        },
        {
          id: 6,
          title: '水煮肉片',
          content: '香干牛肉香干牛肉香干牛肉香干牛肉'
        }
      ]
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