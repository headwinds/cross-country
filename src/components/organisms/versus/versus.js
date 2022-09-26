import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { caveTrollMachine } from './cave-troll-machine';
import { useInterpret, useSelector, useMachine } from '@xstate/react';
import { Image, Tile, Column, Row, SubHeadline, Wrapper, Paragraph, Modal, Hunter, Troll, Stage, Button } from '../../';
import CaveTrollBoard from './cave-troll-board';
import c from '../../../constants/';
import styles from './cave-troll.scss';

/*

Clash of the Kings
"The numbers would be would be greatly against us," Ser Ottyn had objectected, "Craster said he was 
gathering a great host. Many thousands. Without Qhorin, we are only two hundred."
"Send two hundred wolves against ten thousand sheep, ser, and see what happens." said Smallwood confidently. 
"There are goats among these sheep, Thoren", warned Jarman Buckwell. "Aye, maybe a few lions.
Rattleshirt, Harma the Dogshead, Alfyn Crowskiller..."
P. 626 
Can 1000 Roaches break 100 Siege Tanks?【Daily StarCraft Brawl】
https://www.youtube.com/watch?v=YXYjEtN9Z14
https://www.youtube.com/watch?v=D5t9tlDKwVk <-- Cave Troll 1 lane choke
*/

const Versus = () => {

  return (
    <Column customStyle={{ width: 600 }}>
      <p>coming whenever the iron strikes... </p>
    </Column>
  );
};

Versus.propTypes = {};

export default Versus;
