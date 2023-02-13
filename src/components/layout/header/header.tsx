// Packages
import { ReactElement } from 'react';

// Assets
import HboLogo from 'assets/logo.svg';

// Styles
import * as S from './styles';

// Components
import { Avatar } from 'components/core';

const Header = (): ReactElement => {
  return (
    <S.Wrapper>
      <div className="menu">Menu</div>
      <div className="logo">
        <img src={HboLogo} alt="HBO Max logo" />
      </div>
      <div className="avatar">
        <Avatar id="main-avatar" size="sm" />
        <p>Pedro</p>
      </div>
    </S.Wrapper>
  );
};

export default Header;
