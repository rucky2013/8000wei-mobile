<template>
	<header class="bar bar-nav">
    <a class="button button-link button-nav pull-left">
    </a>
    <h1 class="title">课程中心</h1>
   </header>
	<v-tabs type="tab" class-name="article-tabs" >
    <v-tab name="timer-tasks" title="在线课程" status="active"
    action="refreshAll" distance="55" v-pull-to-refresh>
      <v-layer></v-layer>
      <div class="allTasks" v-link="{ path: '/course/course_show', replace: true}">
          <v-card-container>
            <card type="header">香干肉片</card>
            <card type="content">
              <card type="content-inner">
              香干肉片....
              </card>
            </card>
          </v-card-container>
      </div>
    </v-tab>
    <v-tab name="common-tasks" title="线下课程"
    action="refreshMine" distance="55" v-pull-to-refresh>
      <v-layer></v-layer>
      <div class="myTasks">
          <v-card-container v-for="task in tasks | orderBy 'id' -1">
            <card type="header">{{task.title}}</card>
            <card type="content">
              <card type="content-inner">
              {{task.content}}
              </card>
            </card>
          </v-card-container>
      </div>
    </v-tab>
  </v-tabs>
</template>

<script>
import VBar from '../components/Bar'
import VButton from '../components/Button'
import VIcon from '../components/Iconfont'
import VTabs from '../components/Tabs'
import VTab from '../components/Tab'
import VLayer from '../components/PullToRefreshLayer'
import VCardContainer from '../components/Card'
import Card from '../components/CardItem'
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
          content: '这里是第1个card，下拉刷新会出现第2个card'
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
    openPanel () {
      $.openPanel('#panel-demo')
    },
    refreshAll () {
      $.showIndicator()
      setTimeout(function () {
        console.log('refreshAll')
        var cardNumber = $(this.$el).find('.card').length
        var cardHTML = '<div class="card">' +
          '<div class="card-header">card' + cardNumber + '</div>' +
          '<div class="card-content">' +
          '<div class="card-content-inner">' +
          '这里是第' + cardNumber + '个card，下拉刷新会出现第' + (cardNumber + 1) + '个card。' +
          '</div>' +
          '</div>' +
          '</div>'
        $(this.$el).find('.allTasks').prepend(cardHTML)
        // 加载完毕需要重置
        $.pullToRefreshDone('.pull-to-refresh-content')
        $.hideIndicator()
      }.bind(this), 1500)
    },
    refreshMine () {
      $.showIndicator()
      setTimeout(function () {
        console.log('refreshMine')
        let num = this.length + 1
        let title = `card${num}`
        let content = `这里是第${num}个card，下拉刷新会出现第${num + 1}个card。`
        this.tasks.push({
          id: num,
          title: title,
          content: content
        })
        $.pullToRefreshDone('.pull-to-refresh-content')
        $.hideIndicator()
      }.bind(this), 1500)
    }
  },
  components: {
    VBar,
    VButton,
    VIcon,
    VTabs,
    VTab,
    VLayer,
    VCardContainer,
    Card
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
</style>