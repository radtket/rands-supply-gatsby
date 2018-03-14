import React from 'react';
import Link from 'gatsby-link';
import { Logo } from '../../utils/logo';
import config from '../../config/SiteConfig';

const Footer = () => (
	<footer className="footer small-section">
		<div className="container">
			<figure className="footer-company-motto">
				<Logo />
			</figure>
			<nav className="footer-links">
				<Link to="/">About</Link>
				<Link to="/store-locations">Locations</Link>
				<Link to="/credit-dept">Credit Department</Link>
				<Link to="/partners">Vendor Partners</Link>
			</nav>
			<p className="footer-company-name">&copy; {`${new Date().getFullYear()} ${config.name}, All Rights Reserved.`}</p>
		</div>
	</footer>
);

export default Footer;
