import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import SwiperIndex from '../Swiper/Swiper'
import './Tabs.scss'

// 标签页
export default class TabsIndex extends Taro.Component{
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    return (
      <AtTabs
        current={this.state.current}
        scroll
        fontSize={12}
        tabList={[
          { title: '推荐'},
          { title: '单品花束' },
          { title: '混合花束' },
          { title: 'MINI花束' },
          { title: '礼品花束' },
          { title: '花瓶花剪' },
          { title: '居家生活' },
          { title: '绿植多肉' },
        ]}
        onClick={this.handleClick.bind(this)}
      >
        <AtTabsPane current={this.state.current} index={0}>
          <SwiperIndex />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={3}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={4}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={5}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={6}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页七的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={7}>
          <View style='font-size:18px;text-align:center;height:100px;'>标签页八的内容</View>
        </AtTabsPane>
      </AtTabs>
    )
  }
}
