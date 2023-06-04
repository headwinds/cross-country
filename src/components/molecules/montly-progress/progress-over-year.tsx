import * as React from 'react';
import { Column } from '../../';
import { ProgressProps } from './progress.types';

import * as d3 from 'd3';
import { detechOnline } from '../../../utils/golds/offline-util';
import ip_local from '../../../utils/golds/ip-util';
import PilotHeader from './pilot-header';
import Connection from './connection';

const getWeek = function () {
  const today = new Date();
  const onejan = new Date(today.getFullYear(), 0, 1);
  return Math.ceil(((today - onejan) / 86400000 + onejan.getDay() + 1) / 7);
};

import styles from './progress.css';

/**
 * tracks progress over a year and includes a particle effect
 */
const ProgressOverYear: React.FC<ProgressProps> = ({ foo }) => {
  return (
    <Column dataTestId="progress" customClass={styles.Progress}>
      {foo || 'plan & start building'}
    </Column>
  );
};

export default ProgressOverYear;

/*

import React from 'react'
import * as d3 from 'd3'
import {detechOnline} from '../../utils/offline-util';
import ip_local from "../../utils/ip-util";
import PilotHeader from "../pilot/pilot-header";
import Connection from "./connection";
const getWeek = function() {
  const today = new Date();
  const onejan = new Date(today.getFullYear(),0,1);
  return Math.ceil((((today - onejan) / 86400000) + onejan.getDay()+1)/7);
}
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ip: 'IP unknown',
      online: '' 
    }
  }
  componentDidMount(){
    this.drawGolds();
    const validIp = ip_local();
    const checkIp = ( typeof validIp === "object" ) ? String(validIp) : validIp;
    const ip = (checkIp === '') ? 'IP unknown' : checkIp;
    const online = (detechOnline()) ? "online" : "offline";
    this.setState({ip, online});
  }
  drawGolds(){
    const svg = d3.select("#goldsViz");
    const golds = svg.append("g").attr("id", "golds");
    // week { getWeek() } / 52
    const curWeekNum = getWeek();
    const weeks = d3.range(0,52);
    
    const gold = golds.selectAll("gold").data(weeks); 
    const getTransform = (d, i) => {
      const startY = 18; 
      const gap = 1; 
      let x = 2 * i + (gap * i); 
      let y = startY; 
      if (i >= 26) {
        const newI = i - 26;
        x = 2 * newI + (gap * newI);
        y = startY + 5;
      }  
      
      return "translate (" + x + "," + y + ")"; 
    }
    const getFill = (d, i) => {
      let color = "#666";
      if (i <= curWeekNum) {
        color = "darkgoldenrod";
      } 
      return color;
    }
    // ENTER
    
    const goldsEnter = gold
                        .enter()
                          .append("g")
                            .attr("transform", getTransform)
                            .append("rect")
                              .attr("width", 2)
                              .attr("height", 0)
                              .style("fill", getFill)
                            .transition()
                              .delay( (d,i) => { return i * 100 } )
                              .attr("height", 6)  
    // ENTER & MERGE
    gold
      .merge(goldsEnter)
        .attr("transform", getTransform);
    
    // EXIT
    gold.exit().remove(); 
  }
  render(){
    const { siteTitle } = this.props; 
    const {ip, online} = this.state;
    
    return (
      <div
        id="header"
        style={{
          background: 'whitesmoke',
          width: '100%',
          height: 60,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            margin: '0px',
            padding: '0px',
          }}
        >
          <h1 style={{ margin: 0 }}>
  
              <div style={{display: "flex", flexDirection:"row", justifyContent:"flex-start", alignItems: "center"}}>
                <div>
                  <PilotHeader title={siteTitle} />
                </div>
                <div style={{width: "165px"}}>
                  <svg id="goldsViz" height="80px"></svg>
                </div>
                <Connection ip={ip} online={online} />
              </div>
        
          </h1>
        </div>
      </div>
    )
  };
};
export default Header



*/
