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
        <li class="item-content" v-for="msg in msgs | orderBy 'id' +1" v-link="{ name: 'content_show', params: {title: msg.title}}" style="cursor:pointer"><a href="">{{msg.title}}</a></li>
      </ul>
      <ul>
      <li v-for="task in tasks | orderBy 'id' +1" v-link="{ name: 'course_show', params: { cu_content: task.content,titlel: task.title}}" class="course-wrap">
      <a href="#" class="item-link item-content">
         <div class="item-media"><img src={{task.src}} style='width: 4.3rem;'></div>
           <div class="item-inner">
            <div class="item-title-row">
             <div class="item-title">{{task.title}}</div>
             <div class="item-after">￥0</div>
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
      msgs: [
        {
          id: 1,
          title: '餐饮业如何做好节假日营销',
          content: ''
        },
        {
          id: 2,
          title: '餐饮老板注意了！中式连锁快餐关店潮来袭',
          content: '',
          src: 'http://www.anstnd.cn/src/2xiangla.jpg'
        },
        {
          id: 3,
          title: '拉面馆创业造就一个农民的幸福生活',
          content: '',
          src: 'http://www.anstnd.cn/src/3suancai.jpg'
        },
        {
          id: 4,
          title: '杭州凡老头小吃店，炒螺蛳炒出两辆宝马两套房',
          content: '',
          src: 'http://www.anstnd.cn/src/4chuanxiang.jpg'
        }
      ],
      tasks: [
        {
          id: 1,
          title: '清油火锅',
          content: '四川的红油火锅有清油和红油之分，清油是用植物油熬制火锅料，红油火锅是用牛羊油加植物油熬制火锅底料，清油火锅香辣清香，红油火锅辣味更浓烈厚重，相对而言清油火锅，不易上火且健康',
          src: 'http://www.anstnd.cn/src/xingyou.jpg',
          cu_link: 'http://vjs.zencdn.net/v/oceans.mp4'
        },
        {
          id: 2,
          title: '香辣片片鱼',
          content: '片片鱼是一道传统汉族美食，主要材料是郫县豆瓣、鱼调料一包、花鲢鱼。',
          src: 'http://www.anstnd.cn/src/2xiangla.jpg',
          cu_link: 'http://vjs.zencdn.net/v/oceans.mp4'
        },
        {
          id: 3,
          title: '酸菜鱼',
          content: '酸菜鱼属川菜系，以其特有的调味和独特的烹调技法而著称，各地也有称之为“酸汤鱼”，主要以鲜草鱼为主料，配以四川泡菜煮制而成',
          src: 'http://www.anstnd.cn/src/3suancai.jpg',
          cu_link: 'http://vjs.zencdn.net/v/oceans.mp4'
        },
        {
          id: 4,
          title: '川香干锅鸭',
          content: '鸭、干辣椒、姜、蒜片、花椒、啤酒一瓶、葱、蒜、辣椒酱、香菜、芹菜，生冬瓜片豆腐干、小麻花及一些自己喜欢的配菜。',
          src: 'http://www.anstnd.cn/src/4chuanxiang.jpg',
          cu_link: 'http://vjs.zencdn.net/v/oceans.mp4'
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
  display: block;
  color: black;
  font-size: 0.8em
}
</style>
