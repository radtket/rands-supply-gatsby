import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as palette from '../../config/Style';
import { Fax, Phone } from '../../utils/icons';

const TabPanelStoreContact = props => (
	<StoreFlexWrap className="react-sanfona-item-body-wrapper__flex ">
		<ul>
			<li>
				{props.street}
				<br />
				{`${props.city}, ${props.state} ${props.zip}`}
			</li>
		</ul>
		<ul>
			<li itemScope itemType="http://schema.org/LocalBusiness">
				<span style={{ display: 'none' }} itemProp="name">
					{`${props.name} ${props.city}`}
				</span>
				<span style={{ display: 'none' }}>Phone: </span>
				<span itemProp="telephone">
					<Phone />
					<a
						href={`tel:+1${props.phoneFormated}`}
						rel="nofollow"
						name={`Call ${props.name} ${props.city} at ${props.phoneFormated}`}
					>
						{props.phone}
					</a>
				</span>
			</li>
			<li itemScope itemType="http://schema.org/faxNumber">
				<span style={{ display: 'none' }} itemProp="name">
					{`${props.name} ${props.city}`}
				</span>
				<span style={{ display: 'none' }}>Fax: </span>
				<span itemProp="faxNumber">
					<Fax />
					<a
						href={`fax:+1${props.faxFormated}`}
						rel="nofollow"
						name={`Fax ${props.name} ${props.city} at ${props.faxFormated}`}
					>
						{props.fax}
					</a>
				</span>
			</li>
		</ul>
	</StoreFlexWrap>
);

export default TabPanelStoreContact;

TabPanelStoreContact.propTypes = {
	name: PropTypes.string.isRequired,
	street: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	state: PropTypes.string.isRequired,
	zip: PropTypes.number.isRequired,
	phone: PropTypes.string.isRequired,
	phoneFormated: PropTypes.number.isRequired,
	fax: PropTypes.string.isRequired,
	faxFormated: PropTypes.number.isRequired,
};

const StoreFlexWrap = styled.div`
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	svg {
		display: inline-block;
		margin-right: 4px;
		fill: ${palette.COLOR_BLUE_D};
		height: 14px;
		max-width: 100%;
		max-height: 100%;
	}
`;
