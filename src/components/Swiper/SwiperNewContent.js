import Taro from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
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
export default class SwiperNewContent extends Taro.Component{
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

  handleChange = (e) => {
    this.setState({
      currentIndex: e.detail.current
    })
  }

  render () {
    const contents = this.state.content
    return (
      <View>
        <View style={{padding: '0 20px', paddingBottom: '20px'}}>
          <View style='font-size:32rpx;font-weight:bolder;display:inline-block'>
            新品专区
          </View>
          <View style='color:#b9b8b9;font-size:26rpx;display:inline-block;padding-left:10px;padding-right:10px;'>
            /
          </View>
          <View style='color:#b9b8b9;font-size:26rpx;display:inline-block'>
            NEW ARRIVAL
          </View>
          <View style={{float: 'right'}}>
            <View style={{display: 'inline-block', fontWeight: '800', fontSize: '28rpx'}}>{this.state.currentIndex + 1}</View>
            <View style={{display: 'inline-block', fontSize: '25rpx', color: '#b9b8b9'}}>/2</View>
          </View>
          <View style={{clear: 'both'}}></View>
        </View>
        <Swiper onChange={this.handleChange} circular style={{height: '300px'}}>
          <View style={{width: '80%', height: '100%', position: 'relative'}}>
          {
            contents.map((obj, index) => {
              return (
                  <SwiperItem key={index}>
                    <View style={{height: '100%', padding: '0 20px'}}>
                      <Image src={obj.image} style={{width: '300px', height: '300px'}} />
                    </View>
                  </SwiperItem>
              )
            })
          }
          </View>
        </Swiper>
      </View>
    )
  }
}
