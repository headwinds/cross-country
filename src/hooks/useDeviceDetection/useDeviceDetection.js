import React from 'react';
import { DeviceContext } from './DeviceDetectionContext';

const useDeviceDetection = () => {
  const state = DeviceContext._currentValue;
  return state;
};

export default useDeviceDetection;
