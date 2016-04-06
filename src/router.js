import Myhome from './views/myhome'
import Course from './views/course'
import Message from './views/message'
import Person from './views/person'
import About from './views/myhome/about'
import Course_show from './views/course/course_show'
import Course_play from './views/course/course_play'
import Luntan from './views/course/luntan'
import Login from './views/person/login'
import Enroll from './views/person/enroll'
import Content_show from './views/message/content_show'
import Mycourse from './views/person/mycourse'
import Collect from './views/person/collect'
import Profile from './views/person/profile'
import $ from 'zepto'

export default function (router) {
  router.map({
    '/course': {
      name: 'course',
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
    '/course/course_play/:cu_url': {
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
    },
    '/person/collect': {
      name: 'collect',
      component: Collect
    },
    '/person/profile': {
      name: 'profile',
      component: Profile
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
