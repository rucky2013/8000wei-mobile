<template>
<div>
<div class="content home" action="refresh" distance="55" v-pull-to-refresh>
  <v-layer></v-layer>
  <slider :imgs="slider.imgs" :config="slider.config"></slider>
  <v-bar
    type="tab"
    :class-name="bar.className">
    <v-tab-item :options="bar"></v-tab-item>
  </v-bar>
    
  <div class="card-container">
    <v-card-container v-for="task in tasks | orderBy 'created' -1"
    :style="{backgroundColor: task.status === '1' ? 'white': 'rgb(224, 224, 224)' }" v-link="{ path: '/course/course_show', replace: true}">
      <card type="content">
        <list type="media">
            <li class="item-content">
              <item type="media">
                <img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="80">
              </item>
              <item type="inner">
                <item type="title-row">
                  <item type="text">{{task.title}}</item>
                  <item type="text">{{task.created | date 2}}</item>
                </item>
              </item>
            </li>
        </list>
      </card>
      <card type="footer" >
        <div style="color:gray">
        教师：{{task.advertiser}}
        <span style="margin-left: 1rem;padding: .1rem;border: 1px solid #929292;" :style="{color: task.status === '1' ? 'green': 'gray' }">{{task.status === '0' ? '已学' : '未学'}}</span>
        </div>
        <span :style="{color: task.status === '1' ? 'orange': 'gray',fontWeight:'bold'}">{{task.read_profit}} 元</span>
      </card>
    </v-card-container>
  </div>
</div>
</div>
</template>

<script>
import $ from 'zepto'
import Slider from '../components/Slider'
import VBar from '../components/Bar'
import VTabItem from '../components/BarTabItem'
import VLayer from '../components/PullToRefreshLayer'
import VCardContainer from '../components/Card'
import Btn from '../components/Button'
import Card from '../components/CardItem'
import VContent from '../components/Content'
import List from '../components/List'
import Item from '../components/ListItem'

export default {
  ready () {
    console.log('home ready')
    $.init()
  },
  data () {
    return {
      slider: {
        imgs: [
          {
            src: '//www.anstnd.cn/banner1_.jpg',
            target: 'www.baidu.com'
          },
          {
            src: '//www.anstnd.cn/banner2_.jpg',
            target: 'www.baidu.com'
          },
          {
            src: '//www.anstnd.cn/banner3_.jpg',
            target: 'www.baidu.com'
          }
        ],
        config: {
          autoplay: 1200
        }
      },
      bar: {
        items: [
          {
            path: '/message',
            icon: 'star',
            label: '热门'
          },
          {
            path: '/course',
            icon: 'computer',
            label: '我的课程'
          },
          {
            path: '/myhome/about',
            icon: 'phone',
            label: '关于'
          }
        ],
        activeClass: 'inactive',
        className: 'home-bar'
      },
      tasks: []
    }
  },
  computed: {
    length () {
      return this.tasks.length
    }
  },
  methods: {
    refresh () {
      setTimeout(function () {
        let num = this.length + 1
        let title = `标题${num}`
        let adv = `abc${num}`
        let point = 100 + num - 1
        this.tasks.push({
          id: num,
          title: title,
          adv: adv,
          point: point
        })
        $.pullToRefreshDone('.pull-to-refresh-content')
      }.bind(this), 1500)
    }
  },
  components: {
    Slider,
    VBar,
    VTabItem,
    VLayer,
    VCardContainer,
    Card,
    VContent,
    List,
    Item,
    Btn
  },
  route: {
    data ({to, next}) {
      return this.$http.get('tasks.json')
      .then(({data: {code, message, data}})=>{
        this.tasks = data
      })
    },
    activate ({to, next}) {
      console.log('route home activate')
      if ($.slider !== undefined) {
        $.slider.stopAutoplay()
        $.slider.startAutoplay()
      }
      next()
    }
  }
}
</script>

<style>
.home {
  top: -2.2rem !important;
}
.home-bar {
  background: #efeff4;
  height: 3.6rem;
  position: relative;
  box-shadow: 0 .01rem .05rem rgba(0,0,0,.3);
}
.home-bar .tab-item {
  height: 3.6rem;
  background-color: white;
}
</style>
