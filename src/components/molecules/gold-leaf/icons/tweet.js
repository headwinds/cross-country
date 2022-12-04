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
      <path fill="#887f7f" fillOpacity={0.004} d="M43.2-5.5H-1.05v46.25H43.2V-5.5Z" id="t1" />
      <path
        fill="#887f7f"
        d="M41 3.55q1.05-1.35 1.55-2.9-2.7 1.6-5.7 2.2-1.25-1.35-2.9-2.1Q32.2 0 30.3 0q-3.7 0-6.35 2.65-2.6 2.6-2.6 6.35 0 1.05.2 2-5.5-.25-10.4-2.75-4.7-2.45-8.1-6.6-1.2 2.1-1.2 4.5 0 2.3 1.05 4.3 1.1 2 2.9 3.2-2.1-.05-4.05-1.15v.15q0 3.25 2.05 5.7t5.15 3.1q-1.15.3-2.35.3-.85 0-1.7-.15.9 2.7 3.15 4.4 2.35 1.8 5.25 1.8-2.35 1.9-5.15 2.85-2.9 1-6 1-1.15 0-2.15-.1 3 1.95 6.45 2.95 3.55 1.05 7.3 1.05 5.95 0 10.95-2.3 4.6-2.1 8.05-6 3.15-3.6 4.9-8.2 1.65-4.5 1.65-9v-1.2q2.65-1.9 4.45-4.65-2.45 1.1-5.15 1.45Q40 4.8 41 3.55Z"
        id="t2"
      />
    </defs>
    <use xlinkHref="#t1" transform="translate(2.65 7.75)" />
    <use xlinkHref="#t2" transform="translate(2.65 7.75)" />
  </svg>
);

export default SvgComponent;
