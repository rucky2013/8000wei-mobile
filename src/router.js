import Home from './views/home'
import Article from './views/article'
import User from './views/user'
import More from './views/more'
import Myhome from './views/myhome'
import Course from './views/course'
import Message from './views/message'
import Person from './views/person'
import Feedback from './views/more/feedback'
import About from './views/myhome/about'
import Rank from './views/home/rank'
import Tasks from './views/home/tasks'
import Invite from './views/home/invite'
import Profile from './views/user/profile'
import Profit from './views/user/profit'
import ProfitRecord from './views/user/profitRecord'
import Withdraw from './views/user/withdraw'
import Course_show from './views/course/course_show'
import Course_play from './views/course/course_play'
import Luntan from './views/course/luntan'
import Login from './views/person/login'
import Enroll from './views/person/enroll'
import Content_show from './views/message/content_show'
import Mycourse from './views/person/mycourse'
import $ from 'zepto'

export default function (router) {
  router.map({
    '/home/:userId': {
      name: 'home',
      component: Home
    },
    '/home/rank': {
      component: Rank
    },
    '/home/tasks': {
      component: Tasks
    },
    '/home/invite': {
      component: Invite
    },
    '/article': {
      component: Article
    },
    '/user': {
      component: User
    },
    '/user/withdraw': {
      component: Withdraw
    },
    '/user/profile': {
      component: Profile
    },
    '/user/profit': {
      component: Profit
    },
    'more': {
      component: More
    },
    '/user/profit/record': {
      component: ProfitRecord
    },
    '/more/feedback': {
      component: Feedback
    },
    '/course': {
      component: Course
    },
    '/message': {
      component: Message
    },
    '/person': {
      component: Person
    },
    '/myhome': {
      component: Myhome
    },
    '/myhome/about': {
      name: 'about',
      component: About
    },
    '/course/course_show/:cu_id': {
      name: 'course_show',
      component: Course_show
    },
    '/course/course_play': {
      name: 'course_play',
      component: Course_play
    },
    '/course/luntan': {
      component: Luntan
    },
    '/person/login': {
      component: Login
    },
    '/person/enroll': {
      component: Enroll
    },
    '/message/content_show/:msg_id': {
      name: 'content_show',
      component: Content_show
    },
    '/person/mycourse/:myid': {
      name: 'mycourse',
      component: Mycourse
    }
  })
  router.redirect({
    '/': '/myhome'
  })
  router.beforeEach(function ({to, from, next}) {
    let toPath = to.path
    let fromPath = from.path
    console.log('to: ' + toPath + ' from: ' + fromPath)
    if (toPath.replace(/[^/]/g, '').length > 1) {
      router.app.isIndex = false
    }
    else {
      router.app.isIndex = true
    }
    next()
  })

  router.afterEach(function ({to}) {
    console.log(`成功浏览到: ${to.path}`)
    $.refreshScroller()
  })
}
