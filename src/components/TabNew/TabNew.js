import Taro from '@tarojs/taro'
import { Swiper, SwiperItem, View } from '@tarojs/components'
import { AtTabs } from 'taro-ui'
import SwiperIndex from '../Swiper/Swiper'
import FlexIndex from '../Flex/Flex'
import SwiperContent from '../Swiper/SwiperContent'
import ProductListIndex from '../Product/ProductList'

// Tab 组件
export default class TabNewIndex extends Taro.Component{
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  handleChange = (e) => {
    this.setState({
      current: e.detail.current
    })
  }

  render () {
    return (
      <View>
        <View style={{position: 'relative', height: '42px'}}>
          <View style={{position: 'fixed', top: '0', left: '0', zIndex: '900', width: '100%'}}>
            <View style={{position: 'relative', width: '100%'}}>
              <AtTabs
                current={this.state.current}
                scroll
                fontSize={12}
                swipeable={false}
                tabList={[
                  { title: '推荐'},
                  { title: '单品花束' },
                  { title: '混合花束' },
                  { title: 'MINI花束' },
                  { title: '礼品花束' },
                  { title: '花瓶花剪' },
                  { title: '居家生活' },
                  { title: '绿植多肉' },
                ]}
                onClick={this.handleClick.bind(this)}
              >
              </AtTabs>
            </View>
          </View>
        </View>
        <View>
          <Swiper style={{height: '800px'}} onChange={this.handleChange} current={this.state.current}>
            <SwiperItem key={0}>
              <SwiperIndex />
              <FlexIndex />
              <SwiperContent />
            </SwiperItem>
            <SwiperItem key={1}>
              <ProductListIndex title='简花' sTitle='从简单中发现美好' />
            </SwiperItem>
            <SwiperItem key={2}>
              <ProductListIndex title='混合' sTitle='享受繁复之美' />
            </SwiperItem>
            <SwiperItem key={3}>
              <ProductListIndex title='MINI' sTitle='寻觅微处之美' />
            </SwiperItem>
            <SwiperItem key={4}>
              <ProductListIndex title='礼品花' sTitle='恰到好处的美好' />
            </SwiperItem>
            <SwiperItem key={5}>
              <ProductListIndex title='花瓶' sTitle='每束花都要有个家' />
            </SwiperItem>
            <SwiperItem key={6}>
              <ProductListIndex title='家居新品' sTitle='为生活增加技巧' />
            </SwiperItem>
            <SwiperItem key={7}>
              <ProductListIndex title='桌面小清新' sTitle='从指间诞生的绿意世界' />
            </SwiperItem>
          </Swiper>
        </View>
      </View>
    )
  }
}
