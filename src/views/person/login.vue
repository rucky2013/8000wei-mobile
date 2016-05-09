<template>
	<header class="bar bar-nav">
		<a class="button button-link button-nav pull-left" v-link="{path: '/person', replace: true}">
    		<span class="icon icon-left"></span>
    	</a>
  		<h1 class='title'>{{useId}}</h1>
	</header>
<div class="content">
  <div class="list-block">
    <ul>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-email"></i></div>
          <div class="item-inner">
            <div class="item-title label">邮箱</div>
            <div class="item-input">
              <input type="text" placeholder="E-mail" v-model="lname">
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
              <input type="password" placeholder="Password" v-model="lpassword">
            </div>
          </div>
        </div>
      </li>
    </ul>
  <div class="content-block">
    <div class="row">
      <div class="col-50"><a href="#" class="button button-big button-fill button-danger">取消</a></div>
      <div class="col-50"><a class="button button-big button-fill button-success" @click="plogin">登录</a></div>
    </div>
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
      lname: '',
      lpassword: '',
      useId: '',
      personmsgs: ''
    }
  },
  methods: {
    plogin () {
      if (this.lname !== '8000wei') {
        $.alert('帐号或密码错误')
      }
      // if (this.lname === '') {
      //   $.alert('邮箱不能为空')
      // }
      // else if (this.lpassword === '') {
      //   $.alert('密码不能为空')
      // }
      // else if (this.lname !== '8000wei') {
      //   $.alert('帐号或密码错误')
      // }
      return this.$http.get('http://www.8000wei.com/app_dev.php/checklogin/' + this.lname + '/' + this.lpassword)
      .then(({data: {success}})=>{
        this.useId = success.id
      })
      //  $.ajax({

      //     type:'POST',
      //     url:'https://cnodejs.org/api/v1/accesstoken',
      //     data:{accesstoken:self.token},
      //     dataType: 'json',
      //     success:function(res){
      //         localStorage.loginname = res.loginname;
      //         localStorage.avatar_url = res.avatar_url;
      //         localStorage.userId = res.id;
      //         localStorage.token = self.token;
      //         let redirect = decodeURIComponent(self.$route.query
      //             .redirect || '/');
      //         self.$route.router.go(redirect);
      //     },
      //     error:function(res){
      //         var error = JSON.parse(res.responseText);
      //         self.alert.txt = error.error_msg;
      //         self.alert.show = true;
      //         self.alert.hideFn();
      //         return false;
      //     }
      // })
    }
  },
  route: {
  }
}
</script>