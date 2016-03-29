<template>
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
</template>
<script>
	import $ from 'zepto'
	export default {
		props:['list']
	}
</script>