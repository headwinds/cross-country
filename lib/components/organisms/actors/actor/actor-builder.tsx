import React from "react";
import { Column, Carousel } from "../../..";
import Actor from "./actor";

/*
Allow for the creation of humanoid actors with sensitivity to both gender and race

Actors could apply costumes and have different body types
*/

const ActorBuilderStory = ({}) => {
  return (
    <Column>
      <Column>
        <Actor
          position={{
            x: 0,
            y: 0,
            z: 0,
          }}
          customSkinStyle={{
            backgroundColor: "grey",
          }}
        />{" "}
      </Column>
      <Column>
        <Carousel />
      </Column>
    </Column>
  );
};

export default ActorBuilderStory;
