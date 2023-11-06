import * as React from 'react';
import { useState } from 'react';
import styles from './gold-leaf-post.module.css';

import { Card, TextArea, Button, Form, Column, Paragraph } from '../../..';
import { GoldLeafPostProps } from './gold-leaf-post.types';

const initialState = {
  text: '',
};

const GoldLeafPost = ({ goldLeafModel = null, dataTestId = 'golf-leaf-view', onSaveClick }: GoldLeafPostProps) => {
  const [state, setState] = useState(initialState);
  const onTextChange = text => {
    setState({ ...state, text });
  };

  return (
    <Form>
      <Card
        customClass={styles.GoldLeafPost}
        dataTestId={dataTestId}
        customStyle={{ height: 'auto', width: 370, background: 'whitesmoke' }}
      >
        <TextArea onTextChange={onTextChange} value={state.text} />
        <Button onClick={onSaveClick}>Save</Button>
      </Card>
      <Card>
        About to send...
        <Column>
          <Paragraph>Text: {state.text}</Paragraph>
        </Column>
      </Card>
    </Form>
  );
};
export default GoldLeafPost;
