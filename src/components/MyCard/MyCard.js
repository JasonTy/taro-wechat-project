import Taro from '@tarojs/taro';
import { View } from '@tarojs/components'
import './MyCard.scss'

// 我的卡片
export default class MyCardIndex extends Taro.Component{
  render () {
    return (
      <View>
        <View className='at-row'  style={{width: '100%'}}>
          <View className='at-col' style={{textAlign: 'center'}}>
            <View className='coupon' style={{display: 'inline-block', width: '30px', height: '30px'}}></View>
          </View>
          <View className='at-col' style={{textAlign: 'center'}}>
            <View className='customerService' style={{display: 'inline-block', width: '30px', height: '30px'}}></View>
          </View>
          <View className='at-col' style={{textAlign: 'center'}}>
            <View className='deliverGoods' style={{display: 'inline-block', width: '26px', height: '26px'}}></View>
          </View>
          <View className='at-col' style={{textAlign: 'center'}}>
            <View className='gift' style={{display: 'inline-block', width: '26px', height: '26px'}}></View>
          </View>
        </View>
        <View className='at-row' style={{width: '100%', height: '32px', marginTop: '10px'}}>
          <View className='at-col' style={{textAlign: 'center'}}>我的优惠券</View>
          <View className='at-col' style={{textAlign: 'center'}}>售前/后客服</View>
          <View className='at-col' style={{textAlign: 'center'}}>当日达订单</View>
          <View className='at-col' style={{textAlign: 'center'}}>分享有礼</View>
        </View>
        <View className='at-row'  style={{width: '100%'}}>
          <View className='at-col' style={{textAlign: 'center'}}>
            <View className='proposal' style={{display: 'inline-block', width: '30px', height: '30px'}}></View>
          </View>
          <View className='at-col' style={{textAlign: 'center'}}>
          </View>
          <View className='at-col' style={{textAlign: 'center'}}>

          </View>
          <View className='at-col' style={{textAlign: 'center'}}>

          </View>
        </View>
        <View className='at-row' style={{width: '100%', height: '120px', marginTop: '10px'}}>
          <View className='at-col' style={{textAlign: 'center'}}>产品建议</View>
          <View className='at-col' style={{textAlign: 'center'}}></View>
          <View className='at-col' style={{textAlign: 'center'}}></View>
          <View className='at-col' style={{textAlign: 'center'}}></View>
        </View>
      </View>
    )
  }
}
