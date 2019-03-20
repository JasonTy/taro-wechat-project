import Taro from '@tarojs/taro';
import { AtNoticebar } from 'taro-ui'

export default class NoticebarIndex extends Taro.Component{
  render () {
    return (
      <AtNoticebar icon='volume-plus' marquee single speed={80}>
        【重要通知】受两会影响，北京/承德/张家口在会议期间（3.03-3.20，将停发单独配送的剪刀/液体/粉剂等物品，3.23日恢复正常
      </AtNoticebar>
    )
  }
}
