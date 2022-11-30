import * as React from 'react';

const SvgComponent = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <defs>
      <path
        d="M3.15 40h33.7Q40 40 40 36.95V3.1Q40 0 36.85 0H3.15Q0 0 0 3.1v33.85Q0 40 3.15 40m32.1-19.25-9.1-6.4-11.9 10.3-3.75-2.85-6 5.2V5.75q0-2 2-2h26.75q2 0 2 2v15Z"
        id="c1"
        fill="#887F7F"
      />
    </defs>
    <use xlinkHref="#c1" transform="translate(5 5)" />
  </svg>
);

export default SvgComponent;
