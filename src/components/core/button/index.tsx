import { ReactChild } from 'react';
import * as S from './styles';

interface ButtonProps {
  href?: string;
  color?: 'primary' | 'secondary';
  children: ReactChild;
  onClick?: (event: MouseEvent) => void;
}

const Button = ({ children }: ButtonProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Button;
