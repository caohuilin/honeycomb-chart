import * as React from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { HoneycombChartComponent, IOption } from './Component/HoneycombChartCom'
import { get } from 'lodash'

interface Props {
  className: string
  option: IOption
}

interface State {
  width: number
  height: number
}

export class HoneycombChart extends React.Component<Props, State> {
  ref: HTMLDivElement | null = null
  state = { width: 0, height: 0 }

  setRef = (dom: any) => {
    this.ref = dom
  }

  renderChart = (entries?: any) => {
    const element = get(entries, 0)
    if (element) {
      this.setState({
        width: element.clientWidth,
        height: element.clientHeight
      })
    }
  }

  resizeObserver = new ResizeObserver(this.renderChart)

  componentDidMount() {
    if (this.ref) {
      this.resizeObserver.observe(this.ref)
    }
  }

  componentWillUnmount() {
    if (this.ref) {
      this.resizeObserver.unobserve(this.ref)
    }
  }

  render() {
    const { className, option } = this.props
    return (
      <div style={{ width: '100%', height: '100%' }} ref={this.setRef}>
        <HoneycombChartComponent
          className={className}
          key={`${this.state.width}-${this.state.height}`}
          option={option}
        />
      </div>
    )
  }
}
