// Packages
import { ReactElement } from 'react';

// Styles
import * as S from './styles';

interface LinkProps {
  name: string;
  href?: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const Link = ({ name, children, href, isActive = true }: LinkProps): ReactElement => {
  return (
    <S.Wrapper id={name} data-cy={name} href={href} isActive={isActive}>
      {children}
    </S.Wrapper>
  );
};

export default Link;
