<template>
  <header class="bar bar-nav">
      <a class="button button-link button-nav pull-left" v-link="{path: '/person', replace: true}">
        <span class="icon icon-left"></span>
      </a>
    <h1 class='title'>注册</h1>
  </header>
<div class="content">
  <div class="list-block">
    <ul>
      <!-- Text inputs -->
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-name"></i></div>
          <div class="item-inner">
            <div class="item-title label">姓名</div>
            <div class="item-input">
              <input type="text" placeholder="Your name">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-email"></i></div>
          <div class="item-inner">
            <div class="item-title label">邮箱</div>
            <div class="item-input">
              <input type="email" placeholder="E-mail">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-password"></i></div>
          <div class="item-inner">
            <div class="item-title label">密码</div>
            <div class="item-input">
              <input type="password" placeholder="Password" class="">
            </div>
          </div>
        </div>
      </li>

  <div class="content-block">
    <div class="row">
      <div class="col-50"><a href="#" class="button button-big button-fill button-danger">取消</a></div>
      <div class="col-50"><a href="#" class="button button-big button-fill button-success">提交</a></div>
    </div>
  </div>
</div>
</template>