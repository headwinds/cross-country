import * as React from 'react';

const SvgComponent = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="none"
    viewBox="0 0 52 52"
    {...props}
  >
    <defs>
      <path
        fill="#887f7f"
        d="M40.6-2.25H4.35q-5 0-5 5V31q0 5 5 5H40.6q5 0 5-5V2.75q0-5-5-5m.1 5.65q0 .25-.1.5-.15.3-.5.55V4.4L23.85 16.3h.05q-.51.382-1.2.45h-.25q-.85 0-1.4-.45L4.55 4.2v.05q-.6-.45-.6-1.05v-.05q.05-.6.6-1 .4-.25.85-.35.2-.05.45-.05h32.9q.774.016 1.35.4h.05q.55.45.55 1.05v.2Z"
        id="e1"
      />
    </defs>
    <use xlinkHref="#e1" transform="translate(2.65 7.75)" />
  </svg>
);

export default SvgComponent;
