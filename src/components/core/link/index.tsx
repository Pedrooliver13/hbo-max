import { ReactElement } from 'react';

import * as S from './styles';

interface LinkProps {
  name: string;
  href?: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const Link = ({
  name,
  children,
  href,
  isActive = true
}: LinkProps): ReactElement => {
  return (
    <S.Wrapper id={name} data-cy={name} href={href} isActive={isActive}>
      {children}
    </S.Wrapper>
  );
};
