import React, { forwardRef } from 'react';

const Group = forwardRef((props, ref) => {
  const { children } = props;
  return (
    <svg>
      <g {...props} ref={ref}>
        {children}
      </g>
    </svg>
  );
});

export default Group;

// note I wanted to avoid the extra nested svg but there is a react that it doesn't work recognize the g tag without it
// https://pganalyze.com/blog/building-svg-components-in-react
