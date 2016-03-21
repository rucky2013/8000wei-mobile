<template>

	<header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/course', replace: true}">
    <span class="icon icon-left"></span>
    </a>
    <h1 class="title">{{$route.params.titlel}}</h1>
  </header>

<div class="content">

  <div class="list-block">
    <ul>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">价格:</div>
          <div class="item-after">免费</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="content-padded">
        <div class="item-inner">
        <div class="item-title button button-fill">简介:</div>
        </div>
            <p>我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白
            我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白</p>
        </div>
      </li>
    </ul>
  </div>
  <div class="list-block contacts-block">
  <div class="list-group">
      <ul>
        <li class="list-title button button-fill">课时列表：</li>
        <li v-link="{path: '/course/course_play', replace: true}">
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title">课时1</div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title" v-link="{path: '/course/course_play', replace: true}">课时2</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</div>
</div>
</template>

<script>
import $ from 'zepto'
export default {
  ready () {
    $.init()
  }
}
</script>