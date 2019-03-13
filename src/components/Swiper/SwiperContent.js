import Taro from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'

// 首页产品滚动类容显示
export default class SwiperContent extends Taro.Component{
  constructor(props) {
    super(props)
    this.state = {
      banners: []
    }
  }
  componentDidMount () {
    this.setState({
      banners: []
    })
  }

  render () {
    const banners = this.state.banners
    return (
      <View>
        <Swiper circular style='height: 200px'>
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
