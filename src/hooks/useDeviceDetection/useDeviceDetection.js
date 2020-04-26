import React, {useContext} from 'react';
import { DeviceContext } from './DeviceDetectionContext';

const useDeviceDetection = () => {
	// not sure why useContext isn't working here?!?!
	//const state = useContext(DeviceContext);
	const state = DeviceContext._currentValue;
	return state;
};

export default useDeviceDetection;
