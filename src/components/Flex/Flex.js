import Taro from '@tarojs/taro';
import { View } from '@tarojs/components'
import './Flex.scss'

// Flex 布局
export default class FlexIndex extends Taro.Component{
  render() {
    return (
      <View style='margin-top: 30px;'>
        <View className='at-row at-row__align--start'>
          <View style='height:200px;' className='at-col'>
            <View style='height: 65%;position:relative;'>
              {/*<Image src={LeftImage} style='width:100%;height:100%' />*/}
              <View style={{width: '100%', height: '100%', backgroundColor: '#ebe9eb'}}></View>
              <View style='font-size:16rpx;font-weight:bolder;position:absolute;top:12px;left:20px;'>
                <View style='color:#5a595a'>HAVE A FLOWERDAY</View>
                <View style='font-size:20rpx'>订阅花</View>
              </View>
            </View>
            <View style='height: 35%;position:relative;'>
              {/*<Image src={LeftImage02} style='width:100%;height:100%' />*/}
              <View style={{width: '100%', height: '100%', backgroundColor: '#fcf0ed'}}></View>
              <View style='font-size:16rpx;font-weight:bolder;position:absolute;top:12px;left:20px;'>
                <View style='color:#5a595a'>GIF</View>
                <View style='font-size:20rpx'>当日达</View>
              </View>
            </View>
          </View>
          <View className='at-col' style='height:200px;'>
            <View className='at-row' style='height:50%'>
              <View className='at-col' style='position:relative'>
                {/*<Image src={Flower02} style='width:100%;height:100%' />*/}
                <View style={{width: '100%', height: '100%', backgroundColor: '#e0e8ee'}}></View>
                <View style='font-size:16rpx;font-weight:bolder;position:absolute;top:12px;left:20px;'>
                  <View style='font-size:20rpx'>花瓶/周边</View>
                </View>
              </View>
              <View className='at-col' style='position:relative'>
                {/*<Image src={Flower02} style='width:100%;height:100%' />*/}
                <View style={{width: '100%', height: '100%', backgroundColor: '#e1dece'}}></View>
                <View style='font-size:16rpx;font-weight:bolder;position:absolute;top:12px;left:20px;'>
                  <View style='font-size:20rpx'>绿植</View>
                </View>
              </View>
            </View>
            <View className='at-row' style='height:50%'>
              <View className='at-col' style='position:relative'>
                {/*<Image src={Flower02} style='width:100%;height:100%' />*/}
                <View style={{width: '100%', height: '100%', backgroundColor: '#f5eae2'}}></View>
                <View style='font-size:16rpx;font-weight:bolder;position:absolute;top:12px;left:20px;'>
                  <View style='font-size:20rpx'>生活</View>
                </View>
              </View>
              <View className='at-col' style='position:relative'>
                {/*<Image src={Flower02} style='width:100%;height:100%' />*/}
                <View style={{width: '100%', height: '100%', backgroundColor: '#bb9e93'}}></View>
                <View style='font-size:16rpx;font-weight:bolder;position:absolute;top:12px;left:20px;'>
                  <View style='font-size:20rpx'>礼品卡</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
