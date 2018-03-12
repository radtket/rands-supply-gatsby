import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';
import config from '../config/SiteConfig';
import * as palette from '../config/Style';

import '../assets/scss/app.scss';

/* eslint no-unused-expressions: off */
injectGlobal`
  body {
    background: ${palette.BG_COLOR};
    color: ${palette.COLOR};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    color: ${palette.LINK_COLOR};
    transition: color .5s;
    text-decoration: none;
		&:hover {
			text-decoration: none;
			color: ${palette.LINK_HOVER_COLOR};
		}
  }
`;

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
			title={config.siteTitleAlt}
			meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
		/>

		{children()}
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
