<template>

<header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/message', replace: true}">
    <span class="icon icon-left"></span>
    </a>
    <h1 class="title msg-title">{{ctshow.title}}</h1>
 </header>

<div class="content">
	<div class="content-padded" v-html='ctshow.body'>
  		
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
      msg_id: '',
      ctshow: []
    }
  },
  route: {
    data (transition) {
      let msg_id = transition.to.params.msg_id
      return this.$http.get('http://8000wei.com:8000/v1/article/' + msg_id)
      .then(({data: {code, success, result}})=>{
        this.ctshow = result
      })
    }
  }
}
</script>
<style>
  .msg-title {
    font-size: .8em;
  }
</style>