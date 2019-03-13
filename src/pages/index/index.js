import Taro from '@tarojs/taro';
import { AtTabBar } from 'taro-ui';
import {View} from '@tarojs/components'
import TabsIndex from '../../components/Tabs/Tabs'
import FlexIndex from '../../components/Flex/Flex'
import './index.scss'

export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    return (
      <View>
        <TabsIndex />
        <FlexIndex />
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'clock'},
            { title: '发现', iconType: 'camera' },
            { title: '我的', iconType: 'folder'}
          ]}
          iconSize={18}
          fontSize={12}
          color='#ccc'
          selectedColor='black'
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}
