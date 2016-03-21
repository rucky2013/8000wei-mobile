<template>
<div class="content">
  <slider :imgs="slider.imgs" :config="slider.config"></slider>
  <v-bar
    type="tab"
    :class-name="bar.className">
    <v-tab-item :options="bar"></v-tab-item>
  </v-bar>
<!-- 首页资讯 -->

 <div class="buttons-tab">
    <a href="#tab1" class="tab-link active button">最新</a>
  </div>

  <div id="tab1" class="tab active">
    <div class="list-block media-list myhome-msg">
      <ul class="list-container myhome-msg">
        <li class="item-content" v-link="{ name: 'content_show', params: {title: '2016年小吃创业趋势与指导'}}" style="cursor:pointer"><a href="">2016年小吃创业趋势与指导</a></li>
         <li class="item-content" v-link="{ name: 'content_show', params: {title: '2016年小吃创业趋势与指导'}}" style="cursor:pointer"><a href="">2016年小吃创业趋势与指导</a></li>
      </ul>
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
            src: 'http://www.anstnd.cn/banner1_.jpg',
            target: 'www.baidu.com'
          },
          {
            src: 'http://www.anstnd.cn/banner2_.jpg',
            target: 'www.baidu.com'
          },
          {
            src: 'http://www.anstnd.cn/banner3_.jpg',
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
            icon: 'clock',
            label: '创业'
          },
          {
            path: '/course/luntan',
            icon: 'friends',
            label: '论坛'
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
.myhome-msg{
  list-style-type: disc;
}
.myhome-msg li{
  margin-bottom: 1px slider #ededed;
}
.myhome-msg a{
  display: block;;
  color: black;
  font-size: 0.8em
}
</style>
