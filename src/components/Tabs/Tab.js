import React from 'react';

const Tab = ({ _onClick, _isActive, children }) => (
	<li className={`Tab  ${_isActive ? 'is-active' : ''}`} onClick={_onClick}>
		{children}
	</li>
);

export default Tab;
