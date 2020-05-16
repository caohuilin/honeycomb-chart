import * as React from 'react'
import { LineChart, ILine } from '../Chart/LineChartCore'

interface Props {
  data: ILine[]
}
export class LineChartCom extends React.Component<Props, {}> {
  ref: HTMLDivElement | null = null
  lineChart: LineChart | null = null

  setRef = (ref: HTMLDivElement | null) => {
    this.ref = ref
  }

  render() {
    return <div className='tooltip-line' ref={this.setRef}></div>
  }

  componentDidMount() {
    if (this.ref) {
      this.lineChart = new LineChart(this.ref)
      this.lineChart.render(this.props.data)
    }
  }

  componentWillUnmount() {
    this.lineChart?.dispose()
  }
}
