import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import test from '../components/test.vue'
import Layout from '@/layout'
Vue.use(VueRouter)

const routes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '',
        component: Layout,
        children: [{
            path: '',
            name: 'home',
            component: () =>
                import ('@/views/home/home'),
            meta: {
                title: '首页',
                icon: 'home'
            }
        }]
    },
    {
        path: '/set', //url路径
        component: Layout,
        // 此处不用动，这个全局统一的一个布局文件
        children: [{
            path: 'set',
            name: 'set',
            component: () =>
                import ('@/views/set/set'),
            meta: {
                title: '属性设置',
                icon: '设置',
            },
        }]
    },

]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
let b = [{
    path: '/machine',
    component: Layout,
    meta: {
        title: '机器列表',
        icon: '设备列表'
    },
    children: []
}]
let a = []
for (let i = 0; i < 10; i++) {
    let routes = {
        path: String(i + 1),
        component: () =>
            import ('@/views/test/test'),
        name: "machine" + String(i + 1),
        meta: {
            title: '机器' + String(i + 1),
            icon: '机器', //配置选项可配置测试名称和图标
            hidden: true
        }
    }
    a.push(routes)
}
for (let i = 0; i < 10; i++)
    b[0].children.push(a[i])
console.log(b[0])
    //router.addRoutes(a)
router.addRoutes(b)
console.log(router.options.routes)
console.log(a)
router.options.routes.push(b[0])
    // for (let i = 0; i < 5; i++)
    //     router.options.routes.push(a[i])
console.log(router)
export default router