import Taro from '@tarojs/taro';
import {View} from '@tarojs/components'
import TabsIndex from '../../components/Tabs/Tabs'
import FlexIndex from '../../components/Flex/Flex'
import AtTabBarIndex from '../../components/AtTabBar/AtTabBar'

export default class Index extends Taro.Component {
  // config = {
  //   navigationBarTitleText: '首页'
  // }

  constructor(props) {
    super(props)
    this.setState({
      currents: 0
    })
  }

  handleClick (value) {
    this.setState({
      currents: value
    })
  }

  componentDidMount() {

  }

  render () {
    return (
        <View>
          {this.state.currents === 0 && <TabsIndex />}
          {this.state.currents === 1 && <FlexIndex />}
          {this.state.currents === 2 && <FlexIndex />}
          <AtTabBarIndex onClick={this.handleClick} currents={this.state.currents} />
        </View>
    )
  }
}
