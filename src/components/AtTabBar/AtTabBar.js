import Taro from '@tarojs/taro';
import { AtTabBar } from 'taro-ui';
import {View} from '@tarojs/components'

// 导航栏
export default class AtTabBarIndex extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  render () {
    return (
      <View>

        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'clock'},
            { title: '发现', iconType: 'camera' },
            { title: '我的', iconType: 'folder'}
          ]}
          iconSize={22}
          fontSize={10}
          color='#ccc'
          selectedColor='black'
          onClick={this.props.onClick.bind(this)}
          current={this.props.currents || this.state.current}
        />
      </View>
    )
  }
}
