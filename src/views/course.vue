<template>

  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left">
    </a>
    <h1 class="title">课程中心</h1>
  </header>
  <div class="content infinite-scroll">
  <div class="list-block media-list">
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
          title: '清油火锅',
          content: '四川的红油火锅有清油和红油之分，清油是用植物油熬制火锅料，红油火锅是用牛羊油加植物油熬制火锅底料，清油火锅香辣清香，红油火锅辣味更浓烈厚重，相对而言清油火锅，不易上火且健康',
          src: 'http://www.anstnd.cn/src/xingyou.jpg'
        },
        {
          id: 2,
          title: '香辣片片鱼',
          content: '片片鱼是一道传统汉族美食，主要材料是郫县豆瓣、鱼调料一包、花鲢鱼。',
          src: 'http://www.anstnd.cn/src/2xiangla.jpg'
        },
        {
          id: 3,
          title: '酸菜鱼',
          content: '酸菜鱼属川菜系，以其特有的调味和独特的烹调技法而著称，各地也有称之为“酸汤鱼”，主要以鲜草鱼为主料，配以四川泡菜煮制而成',
          src: 'http://www.anstnd.cn/src/3suancai.jpg'
        },
        {
          id: 4,
          title: '川香干锅鸭',
          content: '鸭、干辣椒、姜、蒜片、花椒、啤酒一瓶、葱、蒜、辣椒酱、香菜、芹菜，生冬瓜片豆腐干、小麻花及一些自己喜欢的配菜。',
          src: 'http://www.anstnd.cn/src/4chuanxiang.jpg'
        },
        {
          id: 5,
          title: '麻辣牛肉土豆粉',
          content: '土豆粉是一种著名的汉族小吃。起源于明朝宫廷，明亡后传入民间。因口味独特赢得世人称赞，流传至今，成为中华一代名吃。相传明朝御厨将土豆选料提粉、配料打芡、育香和面、沸水漏条、冷浴晾制，最终制成了土豆粉这一新面食。 土豆粉烹饪后，色泽鲜亮、柔软筋颤、滑润爽口。',
          src: 'http://www.anstnd.cn/src/5.jpg'
        },
        {
          id: 6,
          title: '关东煮 ',
          content: '关东煮（日语：おでん oden），是一种源自日本关东地区的料理 。关 东煮，日语本名御田（おでん），是一种源自日本关东地区的料理。通常材料包括鸡蛋、萝卜、土豆、海带、蒟蒻、鱼丸、竹轮（鱼肉或豆的制品）等，将这些材料 每一种都分别放在互不相通的铁格子锅（箱）里，用海带柴鱼熬制的高汤小火慢煮，煮好后有人喜吃原味，有人爱沾酱（芥末酱、辣椒酱',
          src: 'http://www.anstnd.cn/src/6.jpg'
        },
        {
          id: 7,
          title: '北京烤鸭',
          content: '烤鸭是具有世界声誉的北京著名菜式，由中国汉族人研制于明朝，在当时是宫廷食品。用料为优质肉食鸭北京鸭，果木炭火烤制，色泽红润，肉质肥而不腻，外脆里嫩。北京烤鸭分为两大流派，而北京最著名的烤鸭店也即是两派的代表。它以色泽红艳，肉质细嫩，味道醇厚，肥而不腻的特色，被誉为“天下美味”。',
          src: 'http://www.anstnd.cn/src/7.jpg'
        },
        {
          id: 8,
          title: '煲仔饭',
          content: '煲仔饭属于粤菜系。 煲仔饭的风味多达百余种，如腊味、冬菇滑鸡、豆豉排骨、猪肝、烧鸭、白切鸡等。其实煲仔饭也称瓦煲饭，瓦煲除了指一种盛器，还指一种烹饪方法，就是把淘好的米放入煲中，量好水量，加盖，把米饭煲至七成熟时加入配料，再转用慢火煲熟。用瓦做成的“煲”，在火候控制方面比较灵活，煲出来的饭也较为香口，齿间留香，回味无穷。',
          src: 'http://www.anstnd.cn/src/8.jpg'
        },
        {
          id: 9,
          title: '松花蛋',
          content: '松花皮蛋又称皮蛋、变蛋、灰包蛋等，是一种汉族传统风味蛋制品。口感鲜滑爽口，色香味均有独到之处。制作皮蛋的主要原料有生石灰、纯碱、食盐、红茶、植物灰。皮蛋可能是由北魏《齐民要术》记载的咸鸭蛋演化而来。明确记载皮蛋的，明孝宗十七年（1504）成书的，《竹屿山房杂部》。',
          src: 'http://www.anstnd.cn/src/9.jpg'
        },
        {
          id: 10,
          title: '汉中面皮凉皮.',
          content: '汉中面皮（Hanzhong Mianpi），是陕西南部汉中地区著名特色小吃。相传始于秦汉，一般是把大米浸泡后磨成米浆，上笼蒸成薄皮儿，趁热抹上菜籽油，切成条状，依个人口味调入油辣子、味精、精盐、醋、酱油、蒜泥等佐料，拌匀即可食用（当地多热食，称热面皮儿），亦可置于通风处降温后凉拌（当地称冷面皮或凉面皮）。配菜（底垫子）主要有黄豆芽、土豆丝、芹菜、菠菜等时令小蔬，口感软糯，香辣。不需即时食用时还可以晾干后油炸食用。也有烩，炒等吃法。',
          src: 'http://www.anstnd.cn/src/10.jpg'
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