import React from 'react';
import DeviceContext from './DeviceDetectionContext';

const useDeviceDetection = () => {
	const state = React.useContext(DeviceContext);
	return state;
};

export default useDeviceDetection;
