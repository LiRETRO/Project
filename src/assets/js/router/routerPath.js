import { isAbsolute } from 'path'

const Hello = () => import ('@/components/HelloWorld.vue')
const Layout = () => import ('@/components/Layout/Layout.vue')
const Home = () => import ('@/components/Home.vue')
const PublishBlog = () => import ('@/components/Layout/PublishBlog.vue')
const about = () => import ('@/views/about.vue')
const blog = () => import ('@/views/blog/blog.vue')
const blogDetail = () => import ('@/views/blog/blogDetail.vue')
const picture = () => import ('@/views/picture.vue')
const login = () => import ('@/views/userAction/login.vue')
const register = () => import ('@/views/userAction/register.vue')

export default [
  {
    path: '/',
    name: 'Hello',
    component: Hello,
    redirect: '/home',
    meta: {
      title: '欢迎'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    meta: {
      title: '主页'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          title: '主页'
        }
      },
      {
        path: '/about',
        name: 'about',
        component: about,
        meta: {
          title: '关于'
        }
      },
      {
        path: '/blog',
        name: 'blog',
        component: blog,
        meta: {
          title: '博客'
        }
      },
      {
        path: '/picture',
        name: 'picture',
        component: picture,
        meta: {
          title: 'picture'
        }
      },
      {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
          title: '登陆'
        }
      },
      {
        path: '/register',
        name: 'register',
        component: register,
        meta: {
          title: '注册'
        }
      },
      {
        path: '/publishBlog',
        name: 'privatePublish',
        component: PublishBlog,
        meta: {
          title: '发布博客'
        }
      },
    ]
  },
  {
    path: '/detail/:id',
    name: 'blogDetail',
    component: blogDetail,
    meta: {
      title: '正文'
    }
  }
]