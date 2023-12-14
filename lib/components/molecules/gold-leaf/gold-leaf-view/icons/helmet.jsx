import * as React from 'react';

const SvgComponent = props => (
  <svg width={101} height={85} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M29.125 43.66H21l-5-10.065 1.25-12.583c.833-2.097 4.75-6.668 13.75-8.178 9-1.51 18.75-.63 22.5 0l2.158 21.29L66 33.594v10.067l2.5 11.324H91c-.625 1.678-2.125 6.291-3.125 11.324-1 5.033-7.5 5.872-10.625 5.662H49.125l-6.875-1.258-3.125-2.517v-4.403l-5-6.292V51.84l-5-1.887V43.66Z"
      fill="#E2C116"
      fillOpacity={0.99}
    />
    <path d="M56 57 43 41.997V6.367c37.143-4.002 50.968 25.837 52 38.13L56 57Z" fill="#F1E93F" />
    <circle cx={48.5} cy={36.5} r={15.5} fill="#EDCB19" fillOpacity={0.99} />
    <circle cx={48} cy={36} r={13} fill="#C5AC28" fillOpacity={0.99} />
    <circle cx={48} cy={35} r={11} fill="#F1E93F" />
    <path d="M42.804 38 48 29l5.196 9H42.804Z" stroke="#F3D019" strokeOpacity={0.99} strokeWidth={2} />
  </svg>
);

export default SvgComponent;
