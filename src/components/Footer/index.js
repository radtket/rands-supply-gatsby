import React from 'react';
import Link from 'gatsby-link';
import { Logo } from '../../utils/logo';
import config from '../../config/SiteConfig';
import Roof from './Roof.jsx';

const Footer = () => (
	<footer className="footer">
		<Roof />
		<div className="small-section">
			<div className="container">
				<figure className="footer-company-motto">
					<Logo />
				</figure>
				<nav className="footer-links">
					<Link exact to="/" activeClassName="active">
						About
					</Link>
					<Link exact to="/store-locations" activeClassName="active">
						Locations
					</Link>
					<Link exact to="/partners" activeClassName="active">
						Vendor Partners
					</Link>
				</nav>
				<p className="footer-company-name">
					&copy; {`${new Date().getFullYear()} ${config.name}, All Rights Reserved.`}
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
