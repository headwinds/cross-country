import React from 'react';
import { Branches,Chart,Metrics } from '../../../';


/*
Keywords aka Tags
Filters
Metrics
*/

const HeadwindsHero = ({ onLoadedCallback, data = null }) => {

  const keywords = ["cabin", "carbon", "climate", "emissions", "greenhouse", "warming", "global", "temperature", "atmosphere", "methane", "dioxide", "pollution", "energy", "fossil", "fuel", "electricity", "solar", "wind", "power", "renewable", "nuclear", "hydroelectric", "geothermal", "biofuel", "coal", "oil", "gas", "deforestation", "agriculture", "industry", "transportation", "waste", "recycling", "sustainability", "sustainable", "ecosystem", "ecosystems", "ecology", "environment", "environmental", "conservation", "conservancy"];

  return <>
            <Metrics keywords={keywords} />
            <Chart data={data} />
            <Branches onLoadedCallback={onLoadedCallback} isTesting />
        </>;
};
export default HeadwindsHero;
