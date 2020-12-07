import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HBSLogo from './hbs_logo.png';

const FooterWrapper = styled.div`
  background: #fff;
  padding: 0 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  top: auto;
  right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  height: 60px;
  z-index: 1100;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.06);
`;

const StyledLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: #535353;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`;

const HBSWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HBSLogoLink = styled.a`
  display: block;
  margin-left: 1em;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <StyledLink href="https://algorithmwatch.org/impressum" target="_blank">
          Impressum
        </StyledLink>
      </div>
      <HBSWrapper>
        gefördert durch
        <HBSLogoLink href="https://www.boeckler.de/de/index.htm">
          <img width="120" src={HBSLogo} />
        </HBSLogoLink>
      </HBSWrapper>
    </FooterWrapper>
  );
};

export default Footer;
