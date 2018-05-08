
import san from 'san'
import {router} from 'san-router'
import San from './app.san'
console.log('webpack4')
router.add({rule: '/',Component: San, target: '#app'})
router.start()