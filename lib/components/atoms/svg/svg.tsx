export interface SVGProps {
  width?: number;
  height?: number;
  children?: React.ReactNode;
  customStyle?: React.CSSProperties;
}

const SVG = ({
  width = 200,
  height = 200,
  children = null,
  customStyle = {
    border: "none",
    backgroundColor: `#f1f1f1`,
  },
}: SVGProps) => {
  return (
    <svg style={customStyle} width={width} height={height}>
      {children}
    </svg>
  );
};

export default SVG;
