import React from 'react';
import { getIsMobile } from '../../utils';

const isMobile = getIsMobile();

const device = isMobile ? 'mobile' : 'desktop';
export const DeviceContext = React.createContext({ detectedDevice: device });

