import * as React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={3} y={3} width={23} height={24} rx={3} fill="#887F7F" />
    <path stroke="#F5F5F5" strokeWidth={2} d="M6 16h17M6 20h17M6 12h17M6 8h17" />
  </svg>
);

export default SvgComponent;
