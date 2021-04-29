import React from 'react';
import { Row, Label } from '../../';

const defaultLabelStyle = {
  fontSize: 16,
  fontWeight: 600,
  textAlign: 'right',
  color: 'salmon',
  fontFamily: 'Helvetica Neue',
};
const defaultBarStyle = {
  width: () => 200,
  backgroundColor: 'salmon',
  color: 'white',
  alignItems: 'center',
  height: 30,
  fontWeight: 400,
  paddingRight: 4,
};
const defaultNumStyle = {
  marginLeft: 8,
  color: 'black',
  textAlign: 'left',
  width: 100,
  fontFamily: 'Helvetica Neue',
};

const Bar = ({
  labelStyle = defaultLabelStyle,
  barStyle = defaultBarStyle,
  numStyle = defaultNumStyle,
  label = 'hello bar',
  num = 200,
}) => (
  <Row customStyle={{ alignItems: 'center', marginLeft: 8, color: 'black' }}>
    <Row
      customStyle={{
        margin: 0,
        padding: 4,
        width: 220,
        justifyContent: 'flex-end',
      }}
    >
      <Label customStyle={labelStyle}>{label}</Label>
    </Row>
    <Row customStyle={barStyle}></Row>
    <Label customStyle={numStyle}>{num}</Label>
  </Row>
);

export default Bar;
