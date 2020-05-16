import * as d3 from 'd3'

export interface ILine {
  /**
   * 时间，支持时间戳格式
   */
  time: number
  /**
   * 值
   */
  value: number
}

export class LineChart {
  _dom: HTMLElement
  _width: number
  _height: number
  _margin = { top: 5, left: 15, right: 5, bottom: 15 }
  _xScale: d3.ScaleTime<number, number> | null = null
  _YScale: d3.ScaleLinear<number, number> | null = null
  _svg: d3.Selection<SVGSVGElement, unknown, null, undefined> | null = null
  _bodyG: d3.Selection<SVGGElement, unknown, null, undefined> | null = null

  data: ILine[] = []

  constructor(dom: HTMLElement) {
    this._dom = dom
    const { clientWidth, clientHeight } = dom
    this._width = clientWidth
    this._height = clientHeight
  }

  quadrantHeight() {
    return this._height - this._margin.top - this._margin.bottom
  }

  quadrantWidth() {
    return this._width - this._margin.left - this._margin.right
  }

  getXAxisData = () => {
    return this.data.map((line) => line.time)
  }

  getYAxisData = () => {
    return this.data.map((line) => line.value)
  }

  renderSvg = () => {
    if (!this._svg) {
      this._svg = d3
        .select(this._dom)
        .append('svg')
        .attr('width', this._width)
        .attr('height', this._height)
    }
  }

  renderAxes = () => {
    const axesG = this._svg!.append('g').attr('class', 'axes')
    this.renderXAxis(axesG)
    this.renderYAxis(axesG)
  }

  renderXAxis = (
    axesG: d3.Selection<SVGGElement, unknown, null, undefined>
  ) => {
    const [min, max] = d3.extent(this.getXAxisData())
    this._xScale = d3
      .scaleTime()
      .domain([new Date(min!), new Date(max!)])
      .rangeRound([0, this.quadrantWidth()])
    const xAxis = d3.axisBottom(this._xScale).ticks(4).tickPadding(1)
    const { left, bottom } = this._margin
    axesG
      .append('g')
      .attr('class', 'x-axis')
      .style("font-size", "7px")
      .attr('transform', `translate(${left}, ${this._height - bottom})`)
      .call(xAxis)
    d3.selectAll('g.x g.tick')
      .append('line')
      .classed('grid-line', true)
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', 0)
      .attr('y2', -this.quadrantHeight())
  }

  renderYAxis = (
    axesG: d3.Selection<SVGGElement, unknown, null, undefined>
  ) => {
    const [min, max] = d3.extent(this.getYAxisData())
    this._YScale = d3
      .scaleLinear()
      .domain([min!, max!])
      .rangeRound([this.quadrantHeight(), 0])
    const yAxis = d3.axisLeft(this._YScale).ticks(3).tickPadding(1)
    const { left, top } = this._margin
    axesG
      .append('g')
      .attr('class', 'y-axis')
      .style("font-size", "7px")
      .attr('transform', `translate(${left}, ${top})`)
      .call(yAxis)
    d3.selectAll('g.y g.tick')
      .append('line')
      .classed('grid-line', true)
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', this.quadrantWidth())
      .attr('y2', 0)
  }

  renderBody = () => {
    if (!this._bodyG) {
      const { left, top } = this._margin
      this._bodyG = this._svg!.append('g')
        .attr('class', 'body')
        .attr('transform', `translate(${left}, ${top})`)
        .attr('clip-path', 'url(#body-clip)')
    }
    this.renderLine()
  }

  renderLine = () => {
    const _line = d3
      .line<{ time: number; value: number }>()
      .x((d) => this._xScale!(d.time))
      .y((d) => this._YScale!(d.value))
    const pathLines = this._bodyG!.selectAll('path.line').data([this.data])
    pathLines
      .enter()
      .append('path')
      .style('stroke', '#8accf2')
      .attr('fill', 'none')
      .attr('class', 'line')
      .transition()
      .attr('d', (d: any) => {
        return _line(d)
      })
  }

  render(data: ILine[]) {
    this.data = data
    this.renderSvg()
    this.renderAxes()
    this.renderBody()
  }

  dispose() {
    this._svg?.remove()
  }
}
