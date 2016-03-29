<template>
	<header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/person', replace: true}">
    <span class="icon icon-left"></span>
    </a>
    <h1 class="title">{{$route.params.myid}}</h1>
   </header>
</template>