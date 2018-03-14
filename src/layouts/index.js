import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';
import config from '../config/SiteConfig';
import * as palette from '../config/Style';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/scss/app.scss';

/* eslint no-unused-expressions: off */
injectGlobal`
	html, body{
		height: 100%;
		margin: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

  body {
    background: ${palette.BG_COLOR};
    color: ${palette.COLOR};
  }
  a {
    color: ${palette.LINK_COLOR};
    transition: color .5s;
    text-decoration: none;
		&:hover {
			text-decoration: none;
			color: ${palette.LINK_HOVER_COLOR};
		}
		&:focus {
			outline: 0;
		}
	}
	p {
		margin: 0 0 ${palette.SMALL_SPACING};
	}
`;

const TemplateWrapper = ({ children }) => (
	<div className="page-wrap">
		<Helmet
			title={config.siteTitleAlt}
			meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
		/>
		<Header />
		{children()}
		<Footer  />
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
