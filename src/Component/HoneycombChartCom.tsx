import * as React from 'react'
import { isEqual } from 'lodash'
import {
  HoneycombChart,
  IHoneycombChartOption
} from '../Chart/HoneycombChartCore'
import { LineChartCom } from './LineChartCom'

import style from './styles.module.css'

export type IOption = Partial<IHoneycombChartOption>

interface Props {
  className: string
  option: IOption
}

interface IPosition {
  x: number
  y: number
}

interface IItem {}

interface State {
  showTooltip: boolean
  position: IPosition
  data: IItem
}

export class HoneycombChartComponent extends React.Component<Props, State> {
  ref: HTMLDivElement | null = null

  hexagonChart: HoneycombChart | null = null

  setRef = (ref: HTMLDivElement | null) => {
    this.ref = ref
  }

  state = {
    showTooltip: false,
    position: {
      x: 0,
      y: 0
    },
    data: {
      name: '',
      value: 0,
      color: '',
      line: []
    }
  }

  getOption(option: IOption) {
    const { margin, honeycomb, groups, series } = option
    return {
      margin: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        ...margin
      },
      honeycomb: {
        maxRadius: 100,
        minRadius: 10,
        distance: 0.06,
        ...honeycomb
      },
      groups: {
        honeycombNum: 6,
        lineGroupNum: 3,
        titleHeight: 20,
        ...groups
      },
      series: series || []
    }
  }

  addTooltip = (position: IPosition, data: IItem) => {
    this.setState({
      showTooltip: true,
      position,
      data
    })
  }

  removeTooltip = () => {
    this.setState({
      showTooltip: false
    })
  }

  render() {
    const { showTooltip, data, position } = this.state
    return (
      <div className={this.props.className}>
        <div className={style.chart} ref={this.setRef} />
        {showTooltip && (
          <div
            className={style.tooltip}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`
            }}
          >
            <div className={style.tooltipHeader}>
              <span
                className={style.tooltipIndicator}
                style={{ background: data.color }}
              ></span>
              {data.value}
            </div>
            <div className={style.tooltipContent}>{data.name}</div>
            <LineChartCom data={data.line} />
          </div>
        )}
      </div>
    )
  }

  componentDidMount() {
    if (this.ref) {
      this.hexagonChart = new HoneycombChart(
        this.ref,
        this.addTooltip,
        this.removeTooltip
      )
      this.hexagonChart.render(this.getOption(this.props.option))
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (!isEqual(nextProps.option, this.props.option)) {
    if (this.ref) {
      this.hexagonChart!.render(this.getOption(nextProps.option))
    }
    }
  }

  componentWillUnmount() {
    this.hexagonChart?.dispose()
  }
}
