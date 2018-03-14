import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { media } from '../../config/Breakpoints';
import config from '../../config/SiteConfig';
import * as palette from '../../config/Style';

import { Facebook, Linkedin, Phone, Email } from '../../utils/icons';
import { Logo } from '../../utils/logo';

const Header = () => (
	<Navbar>
		<TopBar>
			<div className="container">
				<TopBarLeft>
					<a
						href={`mailto:${config.email}?Subject=Website%20Question`}
						name={`E-Mail ${config.Name} at ${config.email}`}
						target="_top"
					>
						<span>
							<Email />
						</span>
						{config.email}
					</a>
					<a href={`tel:+${config.phone}`} name={`Call ${config.Name} at ${config.phone}`}>
						<span>
							<Phone />
						</span>
						{config.phoneFormated}
					</a>
				</TopBarLeft>
				<TopBarRight>
					<a href={config.socialMedia[1].url} name={`${config.name} ${config.socialMedia[1].name}`} target="_blank">
						<Linkedin />
					</a>
					<a href={config.socialMedia[0].url} name={`${config.name} ${config.socialMedia[0].name}`} target="_blank">
						<Facebook />
					</a>
				</TopBarRight>
			</div>
		</TopBar>
		<div className="container">
			<NavbarHeader>
				<NavbarLogo to="/">
					<Logo />
				</NavbarLogo>
			</NavbarHeader>
			<MenuButton id="js-mobile-menu">MENU</MenuButton>
			<NavbarNavWrap>
				<NavbarNav id="js-navigation-menu" className="show">
					<NavbarNavItem>
						<NavbarNavLink to="/">About</NavbarNavLink>
					</NavbarNavItem>
					<NavbarNavItem>
						<NavbarNavLink to="/store-locations">Locations</NavbarNavLink>
					</NavbarNavItem>
					<NavbarNavItem>
						<NavbarNavLink to="/credit-dept">Credit Department</NavbarNavLink>
					</NavbarNavItem>
					<NavbarNavItem>
						<NavbarNavLink to="/partners">Vendor Partners</NavbarNavLink>
					</NavbarNavItem>
				</NavbarNav>
			</NavbarNavWrap>
		</div>
	</Navbar>
);

export default Header;

const Navbar = styled.header`
	background-color: #fff;
	border-bottom: 1px solid #e6e6e6;
	width: 100%;
	.container {
		position: relative;
		z-index: 9999;
	}
	svg {
		max-width: 100%;
		max-height: 100%;
	}
`;

const NavbarHeader = styled.figure`
	float: left;
	position: relative;
	line-height: 1;
	font-size: 0;
	${media.tablet`
    margin-top: -1.5rem;
    &::before {
        content: '';
        background-color: #fff;
        z-index: 0;
        height: 1.5rem;
        width: 6000px;
        position: absolute;
        top: 0;
        right: 0;
			}

			&::after {
        content: '';
        display: block;
        border-style: solid;
        height: 0;
        width: 0;
        border-color: transparent transparent transparent #fff;
        border-width: 1.5rem 0 0 1.5rem;
        position: absolute;
        top: 0;
        right: -24px;
			}
  `};
`;

const NavbarLogo = styled(Link)`
	height: 3rem;
	display: inline-block;
	margin-top: 0.375rem;
	margin-bottom: 0.375rem;
	margin-left: 1.5rem;
	${media.tablet`
    margin-top: 1.5rem;
    margin-bottom: 0;
  `};
	svg {
		height: 100%;
	}
`;

const NavbarNavWrap = styled.nav`
	min-height: 60px;
	z-index: 9999999;
	${media.tablet`
    float: right;
  `};
`;

const NavbarNav = styled.ul`
	display: none;
	overflow: visible;
	width: 100%;
	z-index: 9999;
	&::after {
		clear: both;
		content: '';
		display: block;
	}
	${media.tablet`
    display: inline;
  `};
`;

const NavbarNavItem = styled.li`
	background: #fff;
	line-height: 60px;
	overflow: hidden;
	text-align: right;
	width: 100%;
	z-index: 9999;
	&:first-of-type {
		border-top: 1px solid ${palette.COLOR_GRAY_L};
	}
	${media.tablet`
    display: inline;
    background: transparent;
    line-height: 60px;
    width: auto;
    &:first-of-type {
      border-top: 0;
    }
  `};
`;

const NavbarNavLink = styled(Link)`
	color: rgba(51, 51, 51, 0.7);
	display: block;
	font-weight: 500;
	font-size: 14px;
	padding-right: 1.5rem;
	padding-left: 1.5rem;
	&:focus,
	&:hover {
		color: #333;
	}
	${media.tablet`
    display: inline-block;
    position: relative;
    &::before {
      content: '';
      background-color: ${palette.COLOR_RED_L};
      width: 0%;
      height: 2px;
      transition: all 0.35s ease-out;
      position: absolute;
      bottom: -1px;
      left: 0;
    }
    &:hover,
    &.active {
      &::before {
        width: 100%;
      }
    }
  `};
`;

const MenuButton = styled.a`
	color: rgba(51, 51, 51, 0.7);
	display: block;
	float: right;
	line-height: 60px;
	outline: 0;
	padding-right: 1.5rem;
	padding-left: 1.5rem;
	&:focus,
	&:hover {
		color: #333;
	}
	${media.tablet`
    display: none;
  `};
`;

// Top Bar

const TopBar = styled.div`
	display: none;
	${media.phone`
    display: block;
    height: 30px;
    line-height: 30px;
    font-size: 0.75rem;
    background-color: ${palette.COLOR_RED};
    position: relative;
  `};
	svg {
		fill: ${palette.COLOR_BLUE_L};
	}
	a {
		display: inline-block;
		color: #fff;
		margin-right: 1.25rem;
		transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
		&:last-child {
			margin-right: 0;
		}
	}
	.container {
		${media.tablet`
    padding-left: 156px;
  `};
	}
`;

const TopBarLeft = styled.nav`
	float: left;
	margin-left: 1.5rem;
	a:hover {
		color: ${palette.COLOR_GRAY_L};
	}
	svg {
		height: 0.75rem;
		margin-right: 0.375rem;
	}
`;

const TopBarRight = styled.nav`
	float: right;
	margin-right: 1.5rem;
	svg {
		transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
		height: 15px;
		&:hover {
			fill: #fff;
		}
	}
`;
