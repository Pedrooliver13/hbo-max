import { ReactElement } from 'react';

import HboLogo from 'assets/logo.svg';

import * as S from './styles';

export const Header = (): ReactElement => {
  return (
    <S.Wrapper>
      <div className="menu">Menu</div>
      <div className="logo">
        <img src={HboLogo} alt="HBO Max logo" />
      </div>
      <div className="avatar">Avatar</div>
    </S.Wrapper>
  );
};
