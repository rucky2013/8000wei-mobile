<template>
  <div class="page page-current">
      <v-bar type="tab"
        v-if="isIndex">
        <v-tab-item :options="options"></v-tab-item>
      </v-bar>
      <router-view transition="fade" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
import VBar from './components/Bar'
import VTabItem from './components/BarTabItem'

// 调整底部导航图标及地址

export default {
  ready () {
    this.options.items = [
      {
        path: '/myhome',
        icon: 'home',
        label: '首页'
      },
      {
        path: '/course',
        icon: 'star',
        label: '课程'
      },
      {
        path: '/message',
        icon: 'share',
        label: '资讯'
      },
      {
        path: '/person',
        icon: 'me',
        label: '个人'
      }
    ]
  },
  data () {
    return {
      isIndex: true,
      title: '首页',
      options: {
        items: [],
        activeClass: 'active'
      }
    }
  },
  components: {
    VBar,
    VTabItem
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
