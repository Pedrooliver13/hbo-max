import { ReactChild, ReactElement } from 'react';
import * as S from './styles';

interface ButtonProps {
  name: string;
  href?: string;
  dataCy?: string;
  color?: 'primary' | 'secondary';
  children: ReactChild;
  startIcon?: ReactElement | null;
  endIcon?: ReactElement | null;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const Button = ({
  children,
  name,
  dataCy,
  color,
  startIcon,
  endIcon,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      {...props}
      id={name}
      name={name}
      data-cy={dataCy}
      color={color}
      startIcon={Boolean(startIcon)}
      endIcon={Boolean(endIcon)}
      disabled={disabled}
    >
      {startIcon} {children} {endIcon}
    </S.Wrapper>
  );
};

export default Button;
