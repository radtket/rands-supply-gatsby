import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Roof from "./Roof.jsx";
import { Logo } from "../../utils/logo";
import config from "../../config/SiteConfig";
import * as palette from "../../config/Style";

const Footer = () => (
  <FooterWrap className="footer">
    <Roof />
    <div className="small-section">
      <div className="container">
        <FooterLogoWrap>
          <Logo />
        </FooterLogoWrap>
        <FooterNav className="footer-links">
          <Link activeClassName="active" exact to="/">
            About
          </Link>
          <Link activeClassName="active" exact to="/store-locations">
            Locations
          </Link>
          <Link activeClassName="active" exact to="/partners">
            Vendor Partners
          </Link>
        </FooterNav>
        <FooterDisclaimer>
          &copy;{" "}
          {`${new Date().getFullYear()} ${config.name}, All Rights Reserved.`}
        </FooterDisclaimer>
      </div>
    </div>
  </FooterWrap>
);

export default Footer;

const FooterWrap = styled.footer`
  border-bottom: ${palette.SMALL_SPACING} solid ${palette.COLOR_RED};
  text-align: center;
  position: relative;
  .roof {
    margin-top: 70px;
    fill: ${palette.COLOR_BLUE};
  }
  .small-section {
    padding-top: 0;
    background-color: ${palette.COLOR_BLUE};
  }
`;

const FooterLogoWrap = styled.figure`
  height: 70px;
  svg {
    max-width: 100%;
    max-height: 100%;
  }
`;

const FooterNav = styled.nav`
  padding-top: ${palette.BASE_SPACING};
  padding-bottom: 0.375rem;
  a {
    font-size: 14px;
    font-weight: 500;
    display: inline-block;
    color: #fff;
    margin-right: ${palette.BASE_SPACING};
    &:last-child {
      margin-right: 0;
    }
    &:hover,
    &.active {
      color: ${palette.COLOR_RED_L};
    }
  }
`;

const FooterDisclaimer = styled.p`
  color: ${palette.COLOR_BLUE_L};
  font-size: ${palette.SMALL_SPACING};
  margin-bottom: 0;
`;
