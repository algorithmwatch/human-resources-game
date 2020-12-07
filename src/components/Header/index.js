import React from 'react';
import styled from 'styled-components';

import Nav from '~/components/Nav';
import Logo from './hr_puzzle_logo.svg';
import AWLogo from './aw_logo.svg';

const HeaderWrapper = styled.div`
  height: 60px;
  padding: 0 15px;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  background: white;
  color: black;
  position: relative;
  z-index: 1100;
`;

const AWLogoWrapper = styled.div`
  margin-left: auto;
`;

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Nav />
    <AWLogoWrapper>
      <AWLogo />
    </AWLogoWrapper>
  </HeaderWrapper>
);

export default Header;
