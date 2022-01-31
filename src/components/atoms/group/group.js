import React, { forwardRef } from 'react';

const Group = forwardRef((props, ref) => {
  const { children } = props;
  return (
    <g {...props} ref={ref}>
      {children}
    </g>
  );
});

export default Group;
