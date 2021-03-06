import Taro from '@tarojs/taro';
import { View} from '@tarojs/components'
import './Navigation.scss'

// 我的中导航栏
export default class NavigationIndex extends Taro.Component{
  constructor (props) {
    super(props)
    this.setState({
      title: '',
      sTitle: '',
      isShow: true
    })
  }

  componentDidMount () {
    this.setState({
      title: this.props.title,
      sTitle: this.props.sTitle,
      isShow: this.props.isShow === null  ? true : this.props.isShow
    })
  }

  render () {
    return (
      <View style={{width: '100%', padding: '20px 0px'}}>
          <View style={{display: 'inline-block', float: 'left', fontWeight: '800', fontSize: '28rpx', height: '20px', lineHeight: '20px'}}>
            {this.props.title || this.state.title}
          </View>
        {this.state.isShow ?  <View style={{display: 'inline-block', float: 'right', height: '20px', lineHeight: '20px'}}>
          <View className='zhanKai' style={{display: 'inline-block', width: '10px', height: '10px'}}></View>
        </View> : null}

          <View style={{display: 'inline-block', float: 'right', fontWeight: '200', fontSize: '22rpx', height: '20px', lineHeight: '20px', marginRight: '8px'}}>
            {this.props.sTitle || this.state.sTitle}
          </View>
          <View style={{clear: 'both'}}></View>
      </View>
    )
  }
}
