import React from 'react';
import Row from '../../atoms/row/row';
import Label from '../../atoms/text/label/label';

const defaultLabelStyle = {
  fontSize: 16,
  fontWeight: 600,
  textAlign: 'right',
  color: 'salmon',
  fontFamily: 'Helvetica Neue',
};
const defaultBarStyle = {
  width: 100,
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
  width: 50,
  fontFamily: 'Helvetica Neue',
};

const Bar = ({
  labelStyle = defaultLabelStyle,
  barStyle = defaultBarStyle,
  numStyle = defaultNumStyle,
  label = 'hello bar',
  num = 200,
}) => (
  <Row customStyle={{ alignItems: 'center', marginLeft: 8, color: 'black', flexWrap: 'nowrap' }}>
    <Row
      customStyle={{
        margin: 0,
        padding: 4,
        width: 100,
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
