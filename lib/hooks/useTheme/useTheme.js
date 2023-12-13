import React from 'react';
import ThemeContext from './ThemeContext';

const useTheme = () => {
	const state = React.useContext(ThemeContext);
	return state;
};

export default useTheme;
