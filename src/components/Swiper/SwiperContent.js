import Taro from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import CountDown from '../CountDown/CountDown'
import TimerPng from '../../images/timer.png'
import {addIndex, diffIndex, asyncAdd } from '../../actions/swiperIndex'

@connect(({ swiperIndex }) => ({
  swiperIndex
}), (dispatch) => ({
  add (current) {
    dispatch(addIndex(current))
  },
  dec () {
    dispatch(diffIndex())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

// 首页产品滚动类容显示
export default class SwiperContent extends Taro.Component{
  constructor(props) {
    super(props)
    this.state = {
      content: [],
      currentIndex: 0
    }
  }
  componentDidMount () {
    this.setState({
      content: [{
        image: 'http://ci.xiaohongshu.com/2a6ab30b-d324-4f3a-ba54-ed12371f9d52?imageView2/2/w/1080/format/jpg',
        title: '闪购桃花',
        day: 2,
        hours: 20,
        minutes: 34,
        seconds: 0
      }, {
        image: 'http://ci.xiaohongshu.com/2a6ab30b-d324-4f3a-ba54-ed12371f9d52?imageView2/2/w/1080/format/jpg',
        title: '闪购桃花02',
        day: 2,
        hours: 24,
        minutes: 50,
        seconds: 0
      }]
    })
  }

  handleChange01 = (e) => {
    this.setState({
      currentIndex: e.detail.current
    })
  }

  render () {
    const contents = this.state.content
    return (
      <View style={{marginTop: '30px'}}>
        <View style={{padding: '0 20px', paddingBottom: '20px'}}>
          <View style='font-size:32rpx;font-weight:bolder;display:inline-block'>
            限时团购
          </View>
          <View style='color:#b9b8b9;font-size:26rpx;display:inline-block;padding-left:10px;padding-right:10px;'>
            /
          </View>
          <View style='color:#b9b8b9;font-size:26rpx;display:inline-block'>
            FLASH SALE
          </View>
          <View style={{float: 'right'}}>
            <View style={{display: 'inline-block', fontWeight: '800', fontSize: '28rpx'}}>{this.state.currentIndex + 1}</View>
            <View style={{display: 'inline-block', fontSize: '25rpx', color: '#b9b8b9'}}>/2</View>
          </View>
          <View style={{clear: 'both'}}></View>
        </View>
        <Swiper onChange={this.handleChange01}>
          {
            contents.map((obj, index) => {
              return (
                <SwiperItem key={index}>
                  <View style={{height: '100%', padding: '0 20px'}}>
                    <View style={{display: 'inline-block', width: '40%', float: 'left'}}>
                      <Image src={obj.image} style={{width: '90px', height: '90px'}} />
                    </View>
                    <View style={{display: 'inline-block', textAlign: 'right', float: 'left', width: '60%'}}>
                      <View style={{height: '20px'}}>
                        <View style={{position: 'relative', lineHeight: '18px', fontSize: '26rpx', display: 'inline-block', height: '20px', width: '160px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', backgroundColor: '#f4f3f5'}}>
                          <Image src={TimerPng} style={{width: '28rpx', height: '28rpx', position: 'absolute', top: '3px', left: '15px'}} />
                          <View style={{display:'inline-block', position: 'absolute', top: '1px', right: '4px'}}>
                            <CountDown day={obj.day} hours={obj.hours} minutes={obj.minutes} seconds={obj.seconds} />
                          </View>
                        </View>
                      </View>
                      <View style={{height: '20px', fontSize:'28rpx',fontWeight: 'bolder', lineHeight: '20px', marginTop: '20px'}}>{obj.title}</View>
                      <View style={{height: '20px', lineHeight: '20px', marginTop: '10px'}}>
                        <View style={{display: 'inline-block', fontSize: '23rpx', color: '#a8a7a8', textDecoration: 'line-through'}}>原价¥69.00</View>
                        <View style={{display: 'inline-block', fontSize: '26rpx', color: '#ed687f'}}>¥49.00</View>
                      </View>
                    </View>
                    <View style={{clear: 'both'}}></View>
                  </View>
                </SwiperItem>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
}
