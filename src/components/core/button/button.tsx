// Packages
import { ReactElement, ReactNode } from 'react';

// Styles
import * as S from './styles';

interface ButtonProps {
  name: string;
  href?: string;
  color?: 'primary' | 'secondary';
  children: ReactNode;
  startIcon?: ReactElement | null;
  endIcon?: ReactElement | null;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Button = ({ children, name, color, startIcon, endIcon, disabled, ...props }: ButtonProps): ReactElement => {
  return (
    <S.Wrapper
      {...props}
      id={name}
      name={name}
      data-cy={name}
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
