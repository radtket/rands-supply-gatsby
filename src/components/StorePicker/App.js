import React from 'react';
import jump from 'jump.js';

import data from './data/Data';
import Card from './Card';
import Header from './Header';
import GoogleMap from './GoogleMap';
import { easeInOutCubic } from './utils/Easing';
import image from '../../assets/images/location-map.svg';
import '../../assets/scss/app.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			properties: data.properties,
			activeProperty: data.properties[0],
			filterIsVisible: false,
			filterBedrooms: 'any',
			filterBathrooms: 'any',
			filterCars: 'any',
			filterSort: 'any',
			priceFrom: 500000,
			priceTo: 1000000,
			filteredProperties: [],
			isFiltering: false,
		};

		this.setActiveProperty = this.setActiveProperty.bind(this);
		this.toggleFilter = this.toggleFilter.bind(this);
		this.clearFilter = this.clearFilter.bind(this);
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.filterProperties = this.filterProperties.bind(this);
	}

	setActiveProperty(property, scroll = true) {
		const { index } = property;
		this.setState({
			activeProperty: property,
		});

		const target = `#card-${index}`;

		if (scroll) {
			jump(target, {
				duration: 800,
				easing: easeInOutCubic,
			});
		}
	}

	toggleFilter(e) {
		e.preventDefault();
		this.setState({
			filterIsVisible: !this.state.filterIsVisible,
		});
	}

	filterProperties() {
		const { properties, filterBedrooms, filterBathrooms, filterCars, filterSort, priceFrom, priceTo } = this.state;

		const isFiltering =
			filterBedrooms !== 'any' ||
			filterBathrooms !== 'any' ||
			filterCars !== 'any' ||
			priceFrom !== '0' ||
			priceTo !== '1000001' ||
			filterSort !== 'any';

		const getFilteredProperties = propertiesArg => {
			const filteredProperties = [];
			propertiesArg.map(property => {
				const { bedrooms, bathrooms, carSpaces, price } = property;
				const match =
					(bedrooms === parseInt(filterBedrooms) || filterBedrooms === 'any') &&
					(bathrooms === parseInt(filterBathrooms) || filterBathrooms === 'any') &&
					(carSpaces === parseInt(filterCars) || filterCars === 'any') &&
					(price >= priceFrom && price <= priceTo);

				// if match is true
				return match && filteredProperties.push(property);
			});

			// sort the properties list

			switch (filterSort) {
				case '0':
					filteredProperties.sort((a, b) => a.price - b.price);
					break;
				case '1':
					filteredProperties.sort((a, b) => b.price - a.price);
					break;
				default:
			}

			return filteredProperties;
		};

		// console.log(isFiltering, filterBedrooms)
		this.setState({
			filteredProperties: getFilteredProperties(properties),
			isFiltering,
			activeProperty: getFilteredProperties(properties)[0] || properties[0],
		});
	}

	clearFilter(e, form) {
		e.preventDefault();

		this.setState({
			properties: this.state.properties.sort((a, b) => a.index - b.index),
			filterBedrooms: 'any',
			filterBathrooms: 'any',
			filterCars: 'any',
			filterSort: 'any',
			priceFrom: 500000,
			priceTo: 1000000,
			filteredProperties: [],
			isFiltering: false,
			activeProperty: this.state.properties[0],
		});

		form.reset();
	}

	handleFilterChange(e) {
		const { target } = e;
		const { value, name } = target;
		this.setState(
			{
				[name]: value,
			},
			function() {
				// run after state has been set in callback, can also use componentDidUpdate
				this.filterProperties();
			}
		);
	}

	render() {
		const { properties, activeProperty, filterIsVisible, filteredProperties, isFiltering } = this.state;
		const propertiesList = isFiltering ? filteredProperties : properties;

		return (
			<div>
				{/* listings - Start */}
				<div className="listings">
					<Header
						handleFilterChange={this.handleFilterChange}
						toggleFilter={this.toggleFilter}
						clearFilter={this.clearFilter}
						filterIsVisible={filterIsVisible}
					/>

					<div className="cards container">
						<div className={`cards-list row ${propertiesList.length === 0 ? 'is-empty' : ''}`}>
							{propertiesList.map(property => (
								<Card
									activeProperty={activeProperty}
									key={property.storeNumber}
									property={property}
									setActiveProperty={this.setActiveProperty}
								/>
							))}
							{isFiltering &&
								propertiesList.length === 0 && (
									<p className="warning">
										<img src={image} alt="img" />
										<br />No properties were found.
									</p>
								)}
						</div>
					</div>
				</div>
				{/* listings - End */}

				{/* mapContainer - Start */}
				<GoogleMap
					properties={properties}
					activeProperty={activeProperty}
					setActiveProperty={this.setActiveProperty}
					filteredProperties={filteredProperties}
					isFiltering={isFiltering}
				/>

				{/* mapContainer - End */}
			</div>
		);
	}
}

export default App;
