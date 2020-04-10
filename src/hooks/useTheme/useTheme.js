import React from 'react';
import DeviceContext from './ThemeContext';

const useTheme = () => {
	const state = React.useContext(DeviceContext);
	return state;
};

export default useTheme;
