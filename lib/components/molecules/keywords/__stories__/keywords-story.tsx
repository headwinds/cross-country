import * as React from "react";
import { Span, Paragraph } from "../../../";
import Keywords from "../keywords";

// can keywords and categories be the same?!
// there will be far more keywords than categories

const KeywordsStory = () => {
  const keywords = [
    "cabin",
    "carbon",
    "climate",
    "emissions",
    "greenhouse",
    "warming",
    "global",
    "temperature",
    "atmosphere",
    "methane",
    "dioxide",
    "pollution",
    "energy",
    "fossil",
    "fuel",
    "electricity",
    "solar",
    "wind",
    "power",
    "renewable",
    "nuclear",
    "hydroelectric",
    "geothermal",
    "biofuel",
    "coal",
    "oil",
    "gas",
    "deforestation",
    "agriculture",
    "industry",
    "transportation",
    "waste",
    "recycling",
    "sustainability",
    "sustainable",
    "ecosystem",
    "ecosystems",
    "ecology",
    "environment",
    "environmental",
    "conservation",
    "conservancy",
  ];

  return <Keywords keywords={keywords} />;
};

export default KeywordsStory;
