import router from './router'

const whiteList = ['/login']
const loginPath = '/login'

router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.path)) {
    next()
  } else {
    const token = localStorage.getItem('access_token')
    if (!token) {
      next(loginPath)
    } else {
      next()
    }
  }
})
