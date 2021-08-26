import React, { Component } from 'react'

import './style.scss'
const detailShowList = [
  [
    {
      img: require('../../../assets/piano/img1.png').default,
      text: '德国无氧无污染天然酵化镜面漆',
    },
    {
      img: require('../../../assets/piano/img2.png').default,
      text: '高端内置缓降器',
    },
    {
      img: require('../../../assets/piano/img3.png').default,
      text: '白松复合实木白键',
    },
  ],
  [
    {
      img: require('../../../assets/piano/img1.png').default,
      text: '德国无氧无污染天然酵化镜面漆',
    },
    {
      img: require('../../../assets/piano/img2.png').default,
      text: '高端内置缓降器',
    },
    {
      img: require('../../../assets/piano/img3.png').default,
      text: '白松复合实木白键并逐键加铅',
    },
  ],
  [
    {
      img: require('../../../assets/piano/img1.png').default,
      text: '德国无氧无污染天然酵化镜面漆',
    },
    {
      img: require('../../../assets/piano/img2.png').default,
      text: '高端内置缓降器和三角同款',
    },
    {
      img: require('../../../assets/piano/img3.png').default,
      text: '白松复合实木白键并逐键加铅',
    },
  ],
]

const productDetail = [
  {
    img: require('../../../assets/piano/121B.png').default,
    from: '中国',
    color: '黑色亮光',
    size: '1500mm*1210mm*610mm',
    musicWire: '德国“ROSLAU”勒斯劳琴弦',
    plank: '高级镀铬踏板',
    hammer: '红木芯德国进口毛毡',
    key: '白松复合实木白键',
    nail: null,
    number: '121B',
    trait: null,
    mark: '翻砂蝶形铁骨工艺，一次成型',
    soundboard: '云杉实木复合精制音板',
    oilPaint: '德国无氧无污染天然酵化镜面漆',
    slowDescent: '高端内置缓降器',
    action: '雷诺式击弦机',
    MovingRod: '高级防锈合金联动装置',
  },
  {
    img: require('../../../assets/piano/123B.png').default,
    from: '中国',
    color: '黑色亮光',
    size: '1530mm*1230mm*610mm',
    musicWire: '德国“ROSLAU”勒斯劳琴弦',
    plank: '高级镀铜踏板',
    hammer: '红木芯德国进口毛毡',
    key: '白松复合实木白键并逐键加铅',
    nail: null,
    number: '123B7',
    trait: null,
    mark: '全框铁骨翻砂工艺，一次成型，保证更大拉力',
    soundboard: '云杉实木复合精制音板',
    oilPaint: '德国无氧无污染天然酵化镜面漆',
    slowDescent: '高端内置缓降器',
    action: '雷诺式击弦机',
    MovingRod: '品质天然实木联动装置',
  },
  {
    img: require('../../../assets/piano/126B.png').default,
    from: '中国',
    color: '黑色亮光',
    size: '1530mm*1260mm*610mm',
    musicWire: '德国“ROSLAU”勒斯劳琴弦',
    plank: '高级镀铜拉丝踏板',
    hammer: '红木芯德国进口毛毡',
    key: '白松复合实木白键并逐键加铅',
    nail: null,
    number: '126B',
    trait: null,
    mark: '全框铁骨工艺，一次成型，保证更大拉力',
    soundboard: '云杉实木复合精制音板',
    oilPaint: '德国无氧无污染天然酵化镜面漆',
    slowDescent: '高端内置缓降器和三角同款',
    action: '雷诺式击弦机',
    MovingRod: '品质天然实木联动装置',
  },
]

export default class ProductDetail extends Component {
  state = {
    pianoDetailList: [],
  }
  render() {
    const { product } = this.props
    const data = productDetail[product]
    const detailList = detailShowList[product]
    return (
      <div className="productDetail">
        <img
          src={require('../../../assets/piano/piano-title.png').default}
          alt=""
          className="piano-title-1"
        />
        <div className="piano-detail-container">
          <div>
            {detailList.map((item, index) => {
              return (
                <p key={index}>
                  <img src={item.img} alt="" />
                  <span>{item.text}</span>
                </p>
              )
            })}
          </div>
          <div>
            <img src={data.img} style={{ marginTop: '45px' }} alt="" />
          </div>
        </div>

        <div className="piano-title-2">
          <p>
            <span>JZS</span>-{data.number}钢琴
          </p>
          <p className="subtitle">
            <span>立式经典</span>
          </p>
        </div>
        <p className="piano-title-2-subtitle">
          高品质打造钢琴之最，聆听生活之美
        </p>

        <div className="piano-detail-parameter">
          <span>品牌</span>
          <span>JUZISHU</span>
          <div
            className="text"
            style={{ display: data.trait ? 'block' : 'none' }}
          >
            外形特点：{data.trait}
          </div>
          <div className="text">配置详情：</div>
          <p>
            产地<span>{data.from}</span>
          </p>
          <p>
            马克<span>{data.mark}</span>
          </p>
          <p>
            音板<span>{data.soundboard}</span>
          </p>
          <p>
            油漆<span>{data.oilPaint}</span>
          </p>
          <p>
            缓降<span>{data.slowDescent}</span>
          </p>
          <p>
            颜色<span>{data.color}</span>
          </p>
          <p>
            尺寸<span>{data.size}</span>
          </p>
          <p>
            琴弦<span>{data.musicWire}</span>
          </p>
          <p style={{ display: data.plank ? 'block' : 'none' }}>
            踏板<span>{data.plank}</span>
          </p>
          <p>
            榔头<span>{data.hammer}</span>
          </p>
          <p>
            琴键<span>{data.key}</span>
          </p>
          <p style={{ display: data.nail ? 'block' : 'none' }}>
            弦轴钉<span className="padding">{data.nail}</span>
          </p>
          <p>
            击弦机<span className="padding">{data.action}</span>
          </p>
          <p>
            联动杆<span className="padding">{data.MovingRod}</span>
          </p>
          <p>（颜色、尺寸以实物为准）</p>
        </div>
      </div>
    )
  }
}
