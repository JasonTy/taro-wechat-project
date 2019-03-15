import Taro from '@tarojs/taro'
import { AtCountdown } from 'taro-ui'

// 倒计时
export default class CountdownPage extends Taro.Component {
  constructor(props) {
    super(props)
    this.setState({
      day: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    })
  }

  componentDidMount () {
    this.setState(this.props)
  }

  onTimeUp () {
    Taro.showToast({
      title: '时间到',
      icon: 'success',
      duration: 2000
    })
  }

  render () {
    return (
      <AtCountdown
        isShowDay
        day={this.props.day || this.state.day}
        hours={this.props.hours || this.state.hours}
        minutes={this.props.minutes || this.state.minutes}
        seconds={this.props.seconds || this.state.seconds}
      />
    )
  }
}
