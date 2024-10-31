const Circle = ({
  cx = 100,
  cy = 100,
  radius = 50,
  fill = "gold",
  ...rest
}) => {
  return (
    <circle cx={cx} cy={cy} r={radius} style={{ fill }} {...rest}></circle>
  );
};

export default Circle;
