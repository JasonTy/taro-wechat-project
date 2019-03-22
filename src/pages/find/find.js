import Taro from '@tarojs/taro';
import {View} from '@tarojs/components'
import './find.scss'

// 发现页
export default class FindIndex extends Taro.Component{
  render () {
    return (
      <View style={{backgroundColor: '#f4f3f5', width: '100%', height: '100%'}}>
        <View style={{backgroundColor: 'white', padding: '20px 0'}}>
          <View style={{margin: '0 5%', height: '200px'}}>
            <View className='at-row' style={{height: '100%', width: '100%'}}>
              <View className='at-col' style={{backgroundColor: '#f2e5c6', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}>
                <View style={{fontWeight: '350', fontSize: '48rpx', paddingLeft: '36px', paddingTop: '20px', height: '40px'}}>
                  社区
                </View>
                <View style={{paddingLeft: '36px', fontWeight: '100', fontSize: '20rpx', height: '80px'}}>共有80W+人参与晒花</View>
                <View style={{paddingLeft: '22px'}}>
                  <View style={{display: 'inline-block', height: '20px', width: '70px', lineHeight: '20px', fontWeight: '200', fontSize: '24rpx', border: '0.5rpx solid #978a6e', textAlign: 'center', borderRadius: '2px'}}>立即查看</View>
                </View>
              </View>
              <View className='at-col' style={{backgroundColor: '#f2e9dd', borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}></View>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'white', padding: '20px 0', marginTop: '5px'}}>
          <View style={{margin: '0 5%', height: '200px'}}>
            <View className='at-row' style={{height: '100%', width: '100%'}}>
              <View className='at-col' style={{backgroundColor: '#d4e0f1', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}>
                <View style={{fontWeight: '350', fontSize: '48rpx', paddingLeft: '36px', paddingTop: '20px', height: '40px'}}>
                  鲜花养护
                </View>
                <View style={{paddingLeft: '36px', fontWeight: '100', fontSize: '20rpx', height: '80px'}}>鲜花之美需精心呵护</View>
                <View style={{paddingLeft: '22px'}}>
                  <View style={{display: 'inline-block', height: '20px', width: '70px', lineHeight: '20px', fontWeight: '200', fontSize: '24rpx', border: '0.5rpx solid #978a6e', textAlign: 'center', borderRadius: '2px'}}>立即查看</View>
                </View>
              </View>
              <View className='at-col' style={{backgroundColor: '#a9b7cc', borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
