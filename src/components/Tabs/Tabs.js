import Taro from '@tarojs/taro'
import { AtTabs, AtTabsPane } from 'taro-ui'
import SwiperIndex from '../Swiper/Swiper'
import FlexIndex from '../Flex/Flex'
import SwiperContent from '../Swiper/SwiperContent'
import ProductListIndex from '../Product/ProductList'
import './Tabs.scss'

// 标签页
export default class TabsIndex extends Taro.Component{
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

  render () {
    return (
      <AtTabs
        current={this.state.current}
        scroll
        fontSize={12}
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
        <AtTabsPane current={this.state.current} index={0}>
          <SwiperIndex />
          <FlexIndex />
          <SwiperContent />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <ProductListIndex title='简花' sTitle='从简单中发现美好' />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <ProductListIndex title='混合' sTitle='享受繁复之美' />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={3}>
          <ProductListIndex title='MINI' sTitle='寻觅微处之美' />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={4}>
          <ProductListIndex title='礼品花' sTitle='恰到好处的美好' />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={5}>
          <ProductListIndex title='花瓶' sTitle='每束花都要有个家' />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={6}>
          <ProductListIndex title='家居新品' sTitle='为生活增加技巧' />
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={7}>
          <ProductListIndex title='桌面小清新' sTitle='从指间诞生的绿意世界' />
        </AtTabsPane>
      </AtTabs>
    )
  }
}
