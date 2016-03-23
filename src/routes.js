import App from './views/App.vue'
import Page1 from './views/Page1.vue'
import Page2 from './views/Page2.vue'


export function configRouter (router) {

  router.map({
    '/page1': {
      component: Page1
    },
    '/page2': {
      component: Page2
    }
  })
  
  router.redirect({
    '*': '/page1'
  })

}