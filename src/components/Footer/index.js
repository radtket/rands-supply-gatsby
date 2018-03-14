import React from 'react';
import Link from 'gatsby-link';
import { Logo } from '../../utils/logo';
import config from '../../config/SiteConfig';

const Footer = () => (
	<footer className="footer">
		<svg className="roof" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921 151.8">
			<path d="M1448.3 81.5V8.8h-155.9v49.5L960.5 8.8l-960 143h1920l-472.2-70.3z" />
		</svg>
		<div className="footer__bg small-section">
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
					<Link exact to="/credit-dept" activeClassName="active">
						Credit Department
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
