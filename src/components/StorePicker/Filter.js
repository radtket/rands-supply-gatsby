import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { priceFormat } from './utils/Formatters';

class Filter extends Component {
	render() {
		const { toggleFilter, handleFilterChange, clearFilter } = this.props;
		return (
			<form
				ref={input => {
					this.form = input;
				}}
				className="filter"
			>
				<div className="filterBox">
					<label htmlFor="filterBedrooms">
						Bedrooms
						<select onChange={e => handleFilterChange(e)} id="filterBedrooms" name="filterBedrooms">
							<option value="any">Any</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</label>
				</div>
				<div className="filterBox">
					<label htmlFor="filterBathrooms">
						Bathrooms
						<select onChange={e => handleFilterChange(e)} id="filterBathrooms" name="filterBathrooms">
							<option value="any">Any</option>
							<option value="1">1</option>
							<option value="2">2</option>
						</select>
					</label>
				</div>
				<div className="filterBox">
					<label htmlFor="filterCars">
						Car Spaces
						<select onChange={e => handleFilterChange(e)} id="filterCars" name="filterCars">
							<option value="any">Any</option>
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
						</select>
					</label>
				</div>
				<div className="filterBox filterFrom">
					<label htmlFor="priceFrom">
						Min Price
						<select onChange={e => handleFilterChange(e)} id="priceFrom" name="priceFrom">
							<option value="0">Any</option>
							<option value="500000">{priceFormat(500000)}</option>
							<option value="600000">{priceFormat(600000)}</option>
							<option value="700000">{priceFormat(700000)}</option>
							<option value="800000">{priceFormat(800000)}</option>
							<option value="900000">{priceFormat(900000)}</option>
						</select>
					</label>
				</div>
				<div className="filterBox">
					<label htmlFor="priceTo">
						Max Price
						<select onChange={e => handleFilterChange(e)} id="priceTo" name="priceTo">
							<option value="1000001">Any</option>
							<option value="600000">{priceFormat(600000)}</option>
							<option value="700000">{priceFormat(700000)}</option>
							<option value="800000">{priceFormat(800000)}</option>
							<option value="900000">{priceFormat(900000)}</option>
							<option value="1000000">{priceFormat(1000000)}</option>
						</select>
					</label>
				</div>
				<div className="filterBox">
					<label htmlFor="filterSort">
						Order by
						<select onChange={e => handleFilterChange(e)} id="filterSort" name="filterSort">
							<option value="any">Default</option>
							<option value="0">Price: - Low to High</option>
							<option value="1">Price: - High to Low</option>
						</select>
					</label>
				</div>
				<div className="filterBox">
					<label htmlFor="clear">
						<span style={{ display: 'none' }}>Clear</span>
						<button onClick={e => clearFilter(e, this.form)} id="clear" name="clear" className="btn-clear">
							Clear
						</button>
					</label>
				</div>
				<button onClick={e => toggleFilter(e)} className="btn-filter">
					<strong>X</strong>
					<span>Close</span>
				</button>
			</form>
		);
	}
}

Filter.propTypes = {
	toggleFilter: PropTypes.func.isRequired,
	clearFilter: PropTypes.func.isRequired,
	handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
