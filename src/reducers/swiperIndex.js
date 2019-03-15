import { ADDINDEX, DIFFINDEX } from '../constants/swiperIndex'

// SwiperIndex 更新
const INITIAL_STATE = {
  index: 0
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADDINDEX:
      return {
        ...state,
        index: state.index + 1
      }
    case DIFFINDEX:
      return {
        ...state,
        index: state.index - 1
      }
    default:
      return state
  }
}
