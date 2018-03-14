import React from 'react';

const TabPanel = ({ _isActive, children }) => (
	<div className={`TabPanel  ${_isActive ? 'is-active' : ''}`}>{children}</div>
);

export default TabPanel;
