const Circle = ({ cx = 100, cy = 100, radius = 50, fill = 'gold' }) => {
  return <circle cx={cx} cy={cy} r={radius} style={{ fill }}></circle>;
};

export default Circle;
