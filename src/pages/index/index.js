import Taro from '@tarojs/taro';
import {View} from '@tarojs/components'
import TabNewIndex from '../../components/TabNew/TabNew'
// import TabsIndex from '../../components/Tabs/Tabs'
import FlexIndex from '../../components/Flex/Flex'
import AtTabBarIndex from '../../components/AtTabBar/AtTabBar'
import MyIndex from '../my/my'

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
    if (value != this.state.currents) {
      this.setState({
        currents: value
      })
    }
  }

  componentDidMount() {

  }

  render () {
    return (
        <View>
          {this.state.currents === 0 && <TabNewIndex />}
          {this.state.currents === 1 && <FlexIndex />}
          {this.state.currents === 2 && <MyIndex />}
          <AtTabBarIndex onClick={this.handleClick} currents={this.state.currents} />
        </View>
    )
  }
}
