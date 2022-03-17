
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/notifications', component: () => import('pages/Notification.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },
      { path: '/lists', component: () => import('pages/lists.vue') },
      { path: '/bookmarks', component: () => import('pages/bookmarks.vue') },
      { path: '/messages', component: () => import('pages/messages.vue') },
      { path: '/login', component: () => import('pages/login.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
