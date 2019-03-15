import {
  ADDINDEX,
  DIFFINDEX
} from '../constants/swiperIndex'

// SwiperIndex 更新
export const addIndex = () => {
  return {
    type: ADDINDEX
  }
}
export const diffIndex = () => {
  return {
    type: DIFFINDEX
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(addIndex())
    }, 2000)
  }
}
