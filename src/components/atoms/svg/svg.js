const SVG = ({
  width = 200,
  height = 40,
  children = null,
  customStyle = {
    border: '2px solid gold',
  },
}) => {
  return (
    <svg style={customStyle} width={200} height={40}>
      {children}
    </svg>
  );
};

export default SVG;
