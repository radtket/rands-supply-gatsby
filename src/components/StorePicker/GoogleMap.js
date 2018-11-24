import React from 'react';
import PropTypes from 'prop-types';
import loadGoogleMapsApi from 'load-google-maps-api';
import logoMarker from './images/_MapMarker/marker.png';
import styles from './data/map-styles';

const staticMapKey = 'AIzaSyC5TT1pQaF8rS0pxFuGjS_rzaVlcWh_cGo';
const key = {
	key: 'AIzaSyAVeoFGD3DxTOzt9uCZPm6eoK9LRU0HYCE',
};

let map;
class GoogleMap extends React.Component {
	state = {
		markers: [],
	};

	componentDidMount() {
		const { properties, activeProperty } = this.props;
		const { latitude, longitude } = activeProperty;

		loadGoogleMapsApi(key)
			.then(() => {
				// eslint-disable-next-line no-undef
				map = new google.maps.Map(document.getElementById('map'), {
					center: { lat: latitude, lng: longitude },
					zoom: 5,
					styles,
				});
			})
			.then(() => {
				this.createMarkers(properties);
			});
	}

	componentWillReceiveProps(nextProps) {
		const { activeProperty, filteredProperties, isFiltering } = nextProps;
		const { latitude, longitude, index } = activeProperty;

		// show active property info window
		if (isFiltering && filteredProperties.length === 0) {
			this.hideAll();
		} else {
			this.hideAll();
			this.showIW(index);
		}
	}

	componentDidUpdate() {
		const { filteredProperties, isFiltering } = this.props;
		const { markers } = this.state;

		markers.forEach(marker => {
			const { property } = marker; // associated property

			if (isFiltering) {
				// show markers of filtered listings
				if (filteredProperties.includes(property)) {
					markers[property.index].setVisible(true);
				} else {
					// hide other markers
					markers[property.index].setVisible(false);
				}
			} else {
				markers[property.index].setVisible(true);
				// show all markers
			}
		});
	}

	showIW(index) {
		const { markers } = this.state;
		markers[index] && markers[index].iw.open(map, markers[index]);
	}

	hideAll() {
		const { markers } = this.state;
		markers.forEach(marker => {
			marker.iw.close();
		});
	}

	createMarkers(properties) {
		// eslint-disable-next-line no-undef
		const bounds = new google.maps.LatLngBounds();
		const { setActiveProperty, activeProperty } = this.props;
		const activePropertyIndex = activeProperty.index;
		const { markers } = this.state;
		properties.map(property => {
			const { latitude, longitude, index, city, state, street } = property;
			// eslint-disable-next-line no-undef
			this.marker = new google.maps.Marker({
				position: { lat: latitude, lng: longitude },
				map,
				// label: {
				// 	color: '#FFF',
				// 	text: `${index + 1}`,
				// },
				// eslint-disable-next-line no-undef
				animation: google.maps.Animation.DROP,
				icon: {
					url: `${logoMarker}`,
					// eslint-disable-next-line no-undef
					size: new google.maps.Size(29, 55),
					// size: new google.maps.Size(22, 55),
					// origin: new google.maps.Point(0, -15),
					// anchor: new google.maps.Point(11, 52),
				},
				property,
			});
			// eslint-disable-next-line no-undef
			const iw = new google.maps.InfoWindow({
				content: `
				<header>
					<h3>${city}, ${state}</h3>
					<h4>${street}</h4>
				</header>
				<div class="map-box" style="background: url('${logoMarker}' ) center no-repeat, url(https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=300x200&key=${staticMapKey})"></div>

				`,
			});

			this.marker.iw = iw;

			markers.push(this.marker);

			bounds.extend(this.marker.getPosition());

			// show active property info window
			this.showIW(activePropertyIndex);

			this.marker.addListener('click', () => {
				// hide all info boxes
				this.hideAll();
				// set active property into state
				setActiveProperty(property);
			});

			return this.marker;
		});
		map.fitBounds(bounds);
	}

	render() {
		return (
			<div className="mapContainer">
				<div id="map" ref="map" />
			</div>
		);
	}
}

GoogleMap.propTypes = {
	properties: PropTypes.array.isRequired,
	setActiveProperty: PropTypes.func.isRequired,
	activeProperty: PropTypes.object.isRequired,
	filteredProperties: PropTypes.array,
	isFiltering: PropTypes.bool.isRequired,
};

export default GoogleMap;
