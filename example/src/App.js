import React from 'react'

import { HoneycombChart } from 'honeycomb-chart'
import 'honeycomb-chart/dist/index.css'

class HoneycombChartExample extends React.Component {
  state = {
    option: {
      margin: {
        top: '5%'
      },
      series: [
        {
          name: 'max(node:node_memory_utilisation)',
          data: [
            {
              name: 'node=xs1968',
              value: 3.399,
              color: '#dddddd',
              line: [{ time: 1588405300000, value: 4.8888 }]
            },
            {
              name: 'node=xs1968',
              value: 3.399,
              color: '#dddddd',
              line: [{ time: 1588405300000, value: 4.8888 }]
            },
            {
              name: 'node=xs1968',
              value: 3.399,
              color: '#dddddd',
              line: [{ time: 1588405300000, value: 4.8888 }]
            }
          ]
        }
      ]
    }
  }

  render() {
    return (
      <HoneycombChart className='honeycom-chart' option={this.state.option} />
    )
  }
}

export default HoneycombChartExample
