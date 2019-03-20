import Taro from '@tarojs/taro';
import {View, OpenData} from '@tarojs/components'
import NoticebarIndex from '../../components/Noticebar/Noticebar'
import NavigationIndex from '../../components/Navigation/Navigation'
import './my.scss'

export default class MyIndex extends Taro.Component{
  render () {
    return (
      <View style={{position: 'relative'}}>
        <View style={{position: 'fixed', top: 0, left: 0, zIndex: 1000, width: '100%', height: 'auto'}}>
          <NoticebarIndex />
        </View>
        <View style={{height: '40px', width: '100%'}}></View>
        <View style={{position: 'relative', height: '300px'}}>
          <View className='backgroundImg' style={{height: '200px', width: '100%', background: 'url(https://jasonwechatimg.oss-cn-beijing.aliyuncs.com/004.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '100% 100%'}} >
          </View>
          {/*<View style={{backgroundColor: 'rgba(255,0,0,0.5)', width: '100%',  height: '200px',  borderBottomRightRadius: '30px', borderBottomLeftRadius: '30px'}}></View>*/}
          <View style={{position: 'absolute', top: '40px', left: '0px', width: '100%', height: '250px'}}>
            <View style={{margin: '0px 20px', height: '100%', backgroundColor:'white', borderRadius: '4px', boxShadow: '#e9e8ea 1px 1px 20px'}}>
              <View className='userInfo'>
                <View className='headImg'>
                  <OpenData type='userAvatarUrl'></OpenData>
                  <View style={{position: 'absolute', bottom: '0px', left: '0px', height: '24rpx', width: '100%', backgroundColor: 'black', opacity: '0.5'}}>
                  </View>
                  <View style={{position: 'absolute', bottom: '0px', left: '0px', height: '24rpx', width: '100%',  color: 'white', fontSize: '14rpx', textAlign: 'center', lineHeight: '24rpx'}}>编辑</View>
                </View>
                <OpenData type='userNickName'></OpenData>
              </View>
              <View style={{marginTop: '10px'}}>
                <View className='at-row at-row__align--center'>
                  <View className='at-col height120'>
                    <View className='iconPendingPayment' style={{display: 'inline-block', width: '30px', height: '30px'}}></View>
                  </View>
                  <View className='at-col height120'>
                    <View className='iconToBeShipped' style={{display: 'inline-block', width: '30px', height: '30px'}}></View>
                  </View>
                  <View className='at-col height120'>
                    <View className='iconEvaluated' style={{display: 'inline-block', width: '30px', height: '30px'}}></View>
                  </View>
                  <View className='at-col height120'>
                    <View className='iconComplete' style={{display: 'inline-block', width: '30px', height: '30px'}}></View>
                  </View>
                </View>
                <View className='at-row'>
                  <View className='at-col'>待付款</View>
                  <View className='at-col'>服务中</View>
                  <View className='at-col'>待评价</View>
                  <View className='at-col'>已完成</View>
                </View>
              </View>
              <View style={{textAlign: 'center', fontSize: '20rpx', fontWeight: '300', height: '50px', lineHeight: '50px'}}>
                <View style={{display: 'inline-block'}}>全部订单</View><View style={{display: 'inline-block', marginLeft: '4px'}}> > </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{margin: '0px 5%'}}>
          <NavigationIndex sTitle='无服务订单' title='收花日历' />
          <NavigationIndex sTitle='' title='近期福利' />
          <NavigationIndex sTitle='' title='我的服务' isShow={false} />
        </View>
      </View>
    )
  }
}
