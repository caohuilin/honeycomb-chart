import * as React from 'react'
import { HoneycombChartComponent, IOption } from './Component/HoneycombChartCom'

interface Props {
  className: string
  option: IOption
}

interface State {
  width: number
  height: number
}

export class HoneycombChart extends React.Component<Props, State> {
  state = { width: 0, height: 0 }

  renderChart = () => {
    this.setState({
      width: window.document.body.clientWidth,
      height: window.document.body.clientHeight
    })
  }

  componentDidMount() {
    this.renderChart()
    window.addEventListener('resize', this.renderChart)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.renderChart)
  }

  render() {
    const { className, option } = this.props
    return (
      <HoneycombChartComponent
        className={className}
        key={`${this.state.width}-${this.state.height}`}
        option={option}
      />
    )
  }
}
