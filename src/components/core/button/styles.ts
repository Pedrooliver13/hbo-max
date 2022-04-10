import styled, { css } from 'styled-components';

import * as C from 'styles/constants';
interface ButtonProps {
  name: string;
  color?: 'primary' | 'secondary';
  startIcon?: boolean;
  endIcon?: boolean;
  disabled?: boolean;
}

const buttonModifier = {
  primary: {
    backgroundColor: C.Purple,
    color: C.White,
    fontWeight: '700'
  },
  secondary: {
    backgroundColor: C.DarkGray,
    color: C.White
  },
  startIcon: {
    marginRight: '.5rem'
  },
  endIcon: {
    marginLeft: '.5rem'
  },
  disabled: {
    fontWeight: '400',
    opacity: '0.5',
    cursor: 'none'
  }
};

export const Wrapper = styled.a<ButtonProps>`
  max-width: 100%;
  width: 20.2rem;
  height: 4rem;

  font-size: 1.8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 2.6rem;
  text-transform: uppercase;
  transition: background 1s ease-in-out;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

  background-color: ${C.Purple};

  ${({ color, disabled }) => css`
    ${color && buttonModifier[color]}
    ${disabled && buttonModifier.disabled}
  `}

  &:hover {
    background-color: ${C.LightPurple};

    ${({ color }) => css`
      ${color === 'secondary' && `background-color: ${C.Purple};`}
    `}
  }

  svg {
    max-width: 2rem;
    ${({ startIcon, endIcon }) => css`
      ${startIcon && buttonModifier.startIcon}
      ${endIcon && buttonModifier.endIcon}
    `}
  }

  @media (max-width: ${C.MD}) {
    width: 18rem;
    height: 3.6rem;
    font-size: 1.6rem;
  }
`;
