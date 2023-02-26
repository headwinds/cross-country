import React, { useState } from 'react';
import { Column, Form, Button, Row, Tile, TextInput, Wisp } from '../../';
import styles from './giant-soup.module.css';
import { useMachine } from '@xstate/react';
import { giantSoupMachine } from './giant-soup-machine';

/*
However all the sand got into her backpack from this planet supposedly devoid of the substance, 
Aubrey was never certain and sighed as she never knew but simply sighed as she shook 
it out dumping her few possessions on her console on hershoebox of a trading ship. 
She rolled her fingers over the metalic items, each no larger than her finger: a silver 
compact torch the size of lipstick that was capable of cutting through her hull; 
a makeup device that could paint the face based on mood and surrounding palette; 
and a pocket disabler which as the name suggests was meant for quick escapes; 
She was much more about flight than fight but when cornered, she often had to improvise.   
*/

const GiantSoup = () => {
  const [state, send] = useMachine(giantSoupMachine);

  return (
    <Column className={styles.giantSoup} style={{ textAlign: 'left', margin: 20 }}>
      <Form>
        <Row>
          <TextInput
            value={state.context.firstName}
            onChange={e =>
              send({
                type: 'TYPING_FIRST_NAME',
                value: e.target.value,
              })
            }
          />
        </Row>
        <Row>
          <Wisp />
        </Row>
        <Row customClass={styles.send}>
          <Button
            onClick={e => {
              e.preventDefault();
              send('SUBMIT');
            }}
            customClass={styles.sendButton}
          >
            Send
          </Button>
        </Row>
      </Form>
    </Column>
  );
};

export default GiantSoup;
