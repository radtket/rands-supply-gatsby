import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config/SiteConfig';

const Card = ({ property, activeProperty, setActiveProperty }) => {
	const {
		price,
		bedrooms,
		bathrooms,
		carSpaces,
		address,
		city,
		picture,
		index,
		state,
		zip,
		phone,
		phoneFormated,
	} = property;

	return (
		<div
			onClick={() => setActiveProperty(property, false)}
			id={`card-${index}`}
			role="menuitem"
			tabIndex={index}
			className={`card ${property === activeProperty ? 'is-active' : ''}`}
		>
			<figure className="store-img__wrap">
				<img src={picture} alt={`${config.name} ${city}`} />
			</figure>
			<div className="details">
				<h3 className="store__city">{city}</h3>
				<span className="index">{index + 1}</span>
				<address className="store__address">
					{address}
					<br />
					{`${city}, ${state} ${zip}`}
				</address>
				<ul className="store__contact">
					<li itemScope itemType="http://schema.org/LocalBusiness">
						<span style={{ display: 'none' }} itemProp="name">
							{`${config.name} ${city}`}
						</span>
						<span style={{ display: 'none' }}>Phone: </span>
						<span itemProp="telephone">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 347.3">
								<path d="M340.3 274.7l-53.8-53.8c-10.7-10.6-28.4-10.3-39.5.8l-27.1 27-5.3-2.9c-17.1-9.5-40.5-22.5-65.2-47.1s-37.7-48.2-47.2-65.3c-1-1.8-1.9-3.6-2.9-5.2l18.2-18.2 8.9-8.9c11.1-11.1 11.4-28.8.7-39.5L73.4 7.8C62.7-2.9 45-2.6 33.9 8.5L18.7 23.8l.4.4a87.5 87.5 0 0 0-12.4 22 86.8 86.8 0 0 0-5.6 22.3C-6 127.4 20.9 181.2 93.9 254.1 194.7 355 276 347.4 279.5 347a90.4 90.4 0 0 0 44.4-18l.3.3 15.4-15.1c11-11.1 11.4-28.8.7-39.5z" />
							</svg>
							<a href={`tel:+1${phoneFormated}`} rel="nofollow">
								{phone}
							</a>
						</span>
					</li>
					<li itemScope itemType="http://schema.org/faxNumber">
						<span style={{ display: 'none' }} itemProp="name">
							{`${config.name} ${city}`}
						</span>
						<span style={{ display: 'none' }}>Fax: </span>
						<span itemProp="faxNumber">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.73 31.73">
								<path d="M0 29.66h2.537V9.571H0V29.66zM28.549 9.571V.917H15.871v8.654H10.91v20.09h20.82V9.571h-3.181zm-8.926 15.908h-2.447v-2.446h2.447v2.446zm0-4.045h-2.447V18.99h2.447v2.444zm0-3.855h-2.447v-2.446h2.447v2.446zm4.516 7.9h-2.447v-2.446h2.447v2.446zm0-4.045h-2.447V18.99h2.447v2.444zm0-3.855h-2.447v-2.446h2.447v2.446zm4.513 7.9h-2.445v-2.446h2.445v2.446zm0-4.045h-2.445V18.99h2.445v2.444zm0-3.855h-2.445v-2.446h2.445v2.446zm1.506-4.574H14.26V10.84h1.611v1.082h12.678V10.84h1.609v2.165zM3.535 30.813h6.398V7.332H3.535v23.481zm23.33-27.486h-9.029V2.48h9.029v.847zm0 2.256h-9.029v-.844h9.029v.844z" />
							</svg>
							<a href={`fax:+1${phoneFormated}`} rel="nofollow">
								{phone}
							</a>
						</span>
					</li>
				</ul>
				<dl className="store__manager">
					<dt>Store Manager</dt>
					<dd>Alan Shufelberger</dd>
				</dl>
				{/* <ul className="features">
					<li className="icon-bed">
						{bedrooms}
						<span>bedrooms</span>
					</li>
					<li className="icon-bath">
						{bathrooms}
						<span>bathrooms</span>
					</li>
					<li className="icon-car">
						{carSpaces}
						<span>parking spots</span>
					</li>
				</ul> */}
			</div>
		</div>
	);
};

Card.propTypes = {
	property: PropTypes.object.isRequired,
	activeProperty: PropTypes.object.isRequired,
	setActiveProperty: PropTypes.func.isRequired,
};

export default Card;
