import Taro from '@tarojs/taro'
import { AtCountdown } from 'taro-ui'

// 倒计时
export default class CountdownPage extends Taro.Component {
  constructor(props) {
    super(props)
    this.setState({
      day: this.props.day || 0,
      hours: this.props.hours || 0,
      minutes: this.props.minutes || 0,
      seconds: this.props.seconds || 0
    })
  }

  clearTimer () {
    if (this.timer) {
      clearInterval(this.timer)
    }
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
        day={this.state.day}
        hours={this.state.hours}
        minutes={this.state.minutes}
        seconds={this.state.seconds}
        onTimeUp={this.onTimeUp.bind(this)}
      />
    )
  }
}
