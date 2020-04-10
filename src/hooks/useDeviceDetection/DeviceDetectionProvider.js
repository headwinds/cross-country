import React from 'react';
import DeviceContext from './DeviceDetectionContext';

const DeviceProvider = ({ children }) => {
	const { detectedDevice } = React.useContext(DeviceContext);

	return (
		<DeviceContext.Provider value={detectedDevice}>
			{children}
		</DeviceContext.Provider>
	);
};

export default DeviceProvider;
