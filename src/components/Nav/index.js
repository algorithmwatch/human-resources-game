import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import config from '~/config';

const ReactRouterLink = styled(NavLink)``;
const HtmlLink = styled.a``;

const NavUnderline = styled.div`
  background: #ee9e35;
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: 0;
  display: none;
`;

const NavWrapper = styled.div`
  margin-left: 50px;
  position: relative;
  display: flex;
  height: 100%;

  ${ReactRouterLink}, ${HtmlLink} {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    text-decoration: none;
    background: #fff;

    &.active ${NavUnderline} {
      display: block;
    }

    &:hover {
      background: #f2f2f2;
    }
  }
`;

const NavEntry = styled.div`
  font-size: 12px;
  padding: 5px 20px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: #535353;
`;

const renderLink = ({ label, href }) =>
  href.indexOf('http') === 0 ? (
    <HtmlLink href={href}>
      <NavEntry>{label}</NavEntry>
      <NavUnderline />
    </HtmlLink>
  ) : (
    <ReactRouterLink exact key={`nav-${label}`} to={href}>
      <NavEntry>{label}</NavEntry>
      <NavUnderline />
    </ReactRouterLink>
  );

const Nav = () => (
  <NavWrapper>{config.routes.map((route) => renderLink(route))}</NavWrapper>
);

export default Nav;
