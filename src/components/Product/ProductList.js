import Taro from '@tarojs/taro';
import { View } from '@tarojs/components'
import './ProductList.scss'

// 商品列表
export default class ProductListIndex extends Taro.Component{
  constructor (props) {
    super(props)
    this.setState({
      title: '',
      sTitle: ''
    })
  }

  componentDidMount() {
    this.setState({
      title: this.props.title || '',
      sTitle: this.props.sTitle || ''
    })
  }

  render () {
    return (
      <View style={{margin: '20px 5%', height: '800px'}}>
        <View style={{letterSpacing: '6px', fontWeight: '400', fontSize: '60rpx', textAlign: 'center', width: '100%', height: '30px', lineHeight: '30px'}}>
          {this.state.title}
        </View>
        <View style={{textAlign: 'center', marginTop: '-4px'}}>
          <View style={{backgroundColor: 'black', opacity: '0.5', height: '1px', width: '34px', display: 'inline-block'}}></View>
        </View>
        <View style={{letterSpacing: '8px', fontWeight: '100',  fontSize: '27rpx', textAlign: 'center', width: '100%', height: '30px', lineHeight: '30px'}}>
          {this.state.sTitle}
        </View>
        <View style={{padding: '28px 0px'}}>
          <View className='at-row' style={{height: '200px', width: '100%'}}>
            <View className='at-col' style={{textAlign: 'left', position: 'relative'}}>
              <View className='flower01' style={{display: 'inline-block', height: '100%', width: '96%'}}></View>
            </View>
            <View className='at-col' style={{textAlign: 'right'}}>
              <View className='flower01' style={{display: 'inline-block', height: '100%', width: '96%'}}></View>
            </View>
          </View>
          <View className='at-row' style={{height: '30px', width: '100%'}}>
            <View className='at-col' style={{textAlign: 'left'}}>
              <View style={{display: 'inline-block', height: '100%', width: '96%', fontSize: '28rpx', fontWeight: '500'}}>
                简花PLUS
              </View>
            </View>
            <View className='at-col' style={{textAlign: 'right'}}>
              <View style={{display: 'inline-block', height: '100%', width: '96%', textAlign: 'left', fontSize: '28rpx', fontWeight: '500'}}>
                挚爱.进口
              </View>
            </View>
          </View>
          <View className='at-row' style={{height: '40px', width: '100%'}}>
            <View className='at-col' style={{textAlign: 'left'}}>
              <View style={{display: 'inline-block', height: '100%', width: '96%', fontSize: '23rpx', fontWeight: '500'}}>
                ¥169元/月
              </View>
            </View>
            <View className='at-col' style={{textAlign: 'right'}}>
              <View style={{display: 'inline-block', height: '100%', width: '96%', textAlign: 'left', fontSize: '23rpx', fontWeight: '500'}}>
                ¥169元/月
              </View>
            </View>
          </View>

          <View className='at-row' style={{height: '200px', width: '100%'}}>
            <View className='at-col' style={{textAlign: 'left', position: 'relative'}}>
              <View className='flower01' style={{display: 'inline-block', height: '100%', width: '96%'}}></View>
            </View>
            <View className='at-col' style={{textAlign: 'right'}}>
              <View className='flower01' style={{display: 'inline-block', height: '100%', width: '96%'}}></View>
            </View>
          </View>
          <View className='at-row' style={{height: '30px', width: '100%'}}>
            <View className='at-col' style={{textAlign: 'left'}}>
              <View style={{display: 'inline-block', height: '100%', width: '96%', fontSize: '28rpx', fontWeight: '500'}}>
                简花PLUS
              </View>
            </View>
            <View className='at-col' style={{textAlign: 'right'}}>
              <View style={{display: 'inline-block', height: '100%', width: '96%', textAlign: 'left', fontSize: '28rpx', fontWeight: '500'}}>
                挚爱.进口
              </View>
            </View>
          </View>
          <View className='at-row' style={{height: '40px', width: '100%'}}>
            <View className='at-col' style={{textAlign: 'left'}}>
              <View style={{display: 'inline-block', height: '100%', width: '96%', fontSize: '23rpx', fontWeight: '500'}}>
                ¥169元/月
              </View>
            </View>
            <View className='at-col' style={{textAlign: 'right'}}>
              <View style={{display: 'inline-block', height: '100%', width: '96%', textAlign: 'left', fontSize: '23rpx', fontWeight: '500'}}>
                ¥169元/月
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
