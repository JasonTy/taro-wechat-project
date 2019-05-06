import Taro from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'

// Swiper
export default class SwiperIndex extends Taro.Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      banners: []
    }
  }
  componentDidMount () {
    this.setState({
      banners: ['http://ci.xiaohongshu.com/2a6ab30b-d324-4f3a-ba54-ed12371f9d52?imageView2/2/w/1080/format/jpg', 'http://ci.xiaohongshu.com/6b326bc5-2f72-4afd-a6c2-155d9b3227f6?imageView2/2/w/1080/format/jpg']
    })
  }

  render () {
    const banners = this.state.banners
    return (
      <View style='height: 170px'>
        <Swiper indicatorDots circular autoplay>
          {
            banners.map((banner, index) => {
              return (
                <SwiperItem key={index}>
                  <Image src={banner} style={{width: '100%'}} />
                </SwiperItem>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
}
