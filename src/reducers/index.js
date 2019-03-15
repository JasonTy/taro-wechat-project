import { combineReducers } from 'redux'
import counter from './counter'
import swiperIndex from './swiperIndex'

export default combineReducers({
  counter,
  swiperIndex
})
