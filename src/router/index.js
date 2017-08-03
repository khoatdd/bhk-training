import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import CourseDetail from '../components/courses/CourseDetail.vue'
import Schedule from '../components/schedule/Schedule.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/courses/:id',
            component: CourseDetail
        },
        {
            path: '/schedule',
            component: Schedule
        },
        // {
        //     path: '/course_register',
        //     component
        // }
    ]
})