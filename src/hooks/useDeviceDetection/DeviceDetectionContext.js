import React from 'react';
import { getIsMobile } from '../../utils';

const isMobile = getIsMobile();
const device = isMobile ? 'mobile' : 'desktop';
const DeviceContext = React.createContext({ detectedDevice: device });

export default DeviceContext;
