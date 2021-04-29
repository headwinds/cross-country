import Bar from './bar';

const customLabelStyle = {
  fontSize: 16,
  fontWeight: 600,
  textAlign: 'right',
  color: '#299494',
  fontFamily: 'Helvetica Neue',
};

const votes = 200000;

const calcWidth = votes => {
  const maxWidth = 100;
  const maxVotes = 400000;
  const width = (votes * maxWidth) / maxVotes;

  return width;
};

const customBarStyle = {
  width: calcWidth(votes),
  backgroundColor: '#299494',
  color: 'white',
  alignItems: 'center',
  height: 30,
  fontWeight: 400,
  paddingRight: 4,
};

const BarStory = () => <Bar barStyle={customBarStyle} labelStyle={customLabelStyle} />;

export default BarStory;
