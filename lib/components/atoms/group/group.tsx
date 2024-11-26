import React, { forwardRef } from "react";

export type GroupProps = {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  customClass?: string;
  dataTestId?: string;
};
const Group = forwardRef<SVGGElement, GroupProps>((props, ref) => {
  const { children } = props;
  return (
    <>
      <g {...props} ref={ref}>
        {children}
      </g>
    </>
  );
}) as React.FC<GroupProps>;

export default Group;

// note I wanted to avoid the extra nested svg but there is a react that it doesn't work recognize the g tag without it
// https://pganalyze.com/blog/building-svg-components-in-react
