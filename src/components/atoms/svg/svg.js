const SVG = ({
  width = 200,
  height = 200,
  children = null,
  customStyle = {
    border: 'none',
    backgroundColor: `#f1f1f1`,
  },
}) => {
  return (
    <svg style={customStyle} width={width} height={height}>
      {children}
    </svg>
  );
};

export default SVG;
