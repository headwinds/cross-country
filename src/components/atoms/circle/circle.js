const Circle = ({ cx = 100, cy = 100, r = 50, fill = 'gold' }) => {
  return <circle cx={cx} cy={cy} r={r} style={{ fill }}></circle>;
};

export default Circle;
