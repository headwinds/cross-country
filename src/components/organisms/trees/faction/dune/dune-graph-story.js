import React, { useEffect, useRef } from 'react';
import { useMachine } from '@xstate/react';
import { duneMachine } from './dune-machine';
import { SVG, Group, SubHeadline, Column, Paragraph, List, ListItem, Link, RelatedArticles } from '../../../../';
import * as d3 from 'd3';

export const DuneGraphStory = () => {
  const [state, send] = useMachine(duneMachine);
  console.log('DuneGraphStory state: ', state);
  const duneRef = useRef();

  const createSimulation = () => {
    const groupElement = d3.select(duneRef.current);

    const svg = d3.select('svg');
    const width = svg.attr('width');
    const height = svg.attr('height');

    const color = d3.scaleOrdinal(d3.schemeAccent);

    return d3
      .forceSimulation()
      .force(
        'link',
        d3.forceLink().id(function (d) {
          return d.name;
        })
      )
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2));
  };

  const createGraph = graph => {
    graph.links = graph.links.map(function (ele) {
      return {
        source: ele.source,
        target: ele.dest,
        value: +ele.value,
      };
    });

    const link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(graph.links)
      .enter()
      .append('line')
      .attr('stroke-width', function (d) {
        return Math.sqrt(d.value);
      });

    const node = svg.append('g').attr('class', 'nodes').selectAll('g').data(graph.nodes).enter().append('g');

    const circles = node
      .append('circle')
      .attr('r', 5)
      .attr('fill', function (d) {
        return color(d.name);
      })
      .call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));

    const lables = node
      .append('text')
      .text(function (d) {
        return d.name;
      })
      .attr('x', 6)
      .attr('y', 3);

    node.append('title').text(function (d) {
      return d.name;
    });

    const simulation = createSimulation();

    simulation.nodes(graph.nodes).on('tick', ticked);

    simulation.force('link').links(graph.links);

    function ticked() {
      link
        .attr('x1', function (d) {
          return d.source.x;
        })
        .attr('y1', function (d) {
          return d.source.y;
        })
        .attr('x2', function (d) {
          return d.target.x;
        })
        .attr('y2', function (d) {
          return d.target.y;
        });

      node.attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
    }
  };

  const onDataLoadedCallback = (error, graph) => {
    if (error) throw error;
  };

  const loadData = () => {
    d3.json('dune.json', onDataLoadedCallback);
  };

  useEffect(() => {
    if (duneRef.current) {
      //renderDune();
      console.log('dispatch event to the machine');
      send('FETCH_DATA');
    }
  }, []);

  const svgProps = {
    width: 600,
    height: 600,
    customStyle: {
      border: 'none',
      backgroundColor: `#f1f1f1`,
    },
  };

  return (
    <Column>
      <SubHeadline>A Few Factions from Dune</SubHeadline>
      <SVG {...svgProps}>
        <Group ref={duneRef} />
      </SVG>
    </Column>
  );
};

export default DuneGraphStory;
