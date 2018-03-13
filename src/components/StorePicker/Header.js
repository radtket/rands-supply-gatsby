import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';

const Header = ({ filterIsVisible, toggleFilter, handleFilterChange, clearFilter }) => (
	<header className={`${filterIsVisible ? 'filter-is-visible' : ''}`}>
		<Filter handleFilterChange={handleFilterChange} toggleFilter={toggleFilter} clearFilter={clearFilter} />
		<div className="stores__headline">
			<h1>Store Locations</h1>
			<button onClick={e => toggleFilter(e)} className="btn btn-filter">
				Filter
			</button>
		</div>
	</header>
);

Header.propTypes = {
	filterIsVisible: PropTypes.bool.isRequired,
	toggleFilter: PropTypes.func.isRequired,
	clearFilter: PropTypes.func.isRequired,
	handleFilterChange: PropTypes.func.isRequired,
};

export default Header;
