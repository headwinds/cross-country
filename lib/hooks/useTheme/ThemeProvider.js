import React from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children, theme }) => {
	const context = theme ? React.createContext(theme) : ThemeContext;
	const myTheme = React.useContext(context);

	return (
		<ThemeContext.Provider value={myTheme}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProvider;
