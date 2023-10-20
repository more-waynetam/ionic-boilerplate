import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import authMiddleware from '@/middlewares/authMiddleware';
import TabsPage from '../views/home/TabsPage.vue'
import LoginPage from '../views/auth/LoginPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/welcome/WelcomePage.vue')
  },
  {
    path: '/home/',
    component: TabsPage,
    meta: { auth: true },
    children: [
      {
        path: '',
        redirect: '/home/dashboard'
      },
      {
        path: 'dashboard',
        name:'dashboard',
        component: () => import('@/views/home/DashboardPage.vue')
      },
      {
        path: 'my-channels',
        name:'my-channels',
        component: () => import('@/views/home/MyChannelsPage.vue')
      },
      {
        path: 'tgs-channels',
        name:'tgs-channels',
        component: () => import('@/views/home/TgsChannelsPage.vue')
      },
      {
        path: 'profile',
        name:'profile',
        component: () => import('@/views/home/ProfilePage.vue')
      },
    ]
  },
  {
    path:'/profile/activity',
    name:'profile-activity',
    component: () => import('@/views/profile/ProfileActivityPage.vue')
  },
  {
    path:'/profile/settings',
    name:'profile-settings',
    component: () => import('@/views/profile/ProfileSettingsPage.vue')
  }
  ,{
    path:'/auth/login',
    name:'login',
    component: LoginPage
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(authMiddleware);

export default router
