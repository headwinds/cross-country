import React from 'react'
import * as d3 from 'd3'
import helmet from './helmet.svg'
class PilotHeader extends React.Component {
  componentDidMount() {}
  render() {
    const { title } = this.props
    return (
      <section className="wrapper" style={{ paddingTop: 20, marginRight: 10 }}>
        <img src={helmet} width="50px" />
      </section>
    )
  }
}
export default PilotHeader
