import React from 'react'
import * as d3 from 'd3'
class Connection extends React.Component {
  componentDidMount() {
  }
  render() {
    const {online, ip} = this.props;
    const divLite = {padding: 0, margin: 0 }
    return (
        <div style={{marginTop: -2}}>
            <div style={divLite}>
            <span style={{fontSize: 10, color: "#999"}}>{online}</span>
            </div>
            <div style={{...divLite, marginTop: -8}}>
            <span style={{fontSize: 10, color: "#999"}}>{ip}</span>
            </div>
        </div>
    )
  }
}
export default Connection;
