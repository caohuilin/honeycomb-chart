# honeycomb-chart

> 蜂窝图

[![NPM](https://img.shields.io/npm/v/honeycomb-chart.svg)](https://www.npmjs.com/package/honeycomb-chart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save honeycomb-chart
```

## Usage

```tsx
import React, { Component } from 'react'
import { HoneycombChart } from 'honeycomb-chart'
import 'honeycomb-chart/dist/index.css'

class Example extends Component {
  render() {
    return <HoneycombChart className='honeycomb-chart' option={option} />
  }
}
```

## Option

- margin 图表四周空白区域大小，可以为数字和百分数
  - top
  - left
  - right
  - bottom
- honeycomb 蜂窝配置
  - maxRadius 最大半径
  - minRadius 最小半径
  - distance 蜂窝间距占半径比例，小数表示
- group
  - honeycombNum 每个组每一行蜂窝数目
  - lineGroupNum 图表每一行图表组数
  - titleHeight 标题高度
- series Array 数据
  - name 组名称
  - data 蜂窝数据
    - name 蜂窝名称
    - value 值
    - color 颜色
    - line Array 变化数据
      - time 时间戳
      - value 值

```js
option: {
      margin: {
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '5%'
      },
      honeycomb: {
        maxRadius: 100,
        minRadius: 10,
        distance: 0.06
      },
      groups: {
        honeycombNum: 10,
        lineGroupNum: 3,
        titleHeight: 20
      },
      series: [
        {
          name: 'count',
          data: [
            {
              name: 'Pass of.',
              value: 1,
              color: '#1C7BDC',
              line: [{
                time: 1589791385130,
                value: 0,
              }, {
                time: 1589791404743,
                value: 1
              }]
            },
            {
              name: 'Whole.',
              value: 1,
              color: '#1C7BDC',
              line: []
            }
          ]
        }
      ]
    }
```

## License

MIT © [caohuilin](https://github.com/caohuilin)
