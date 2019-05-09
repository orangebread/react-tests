import React from 'react';
import Redux from './Redux';

export default ({ children, initialState = {} }) => (
	<Redux initialState={initialState}>
		{children}
	</Redux>
);
