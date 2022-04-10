import styled, { css } from 'styled-components';

import * as C from 'styles/constants';

interface AvatarProps {
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
}

const avatarModifier = {
  primary: {
    background: C.BlueGradient
  },
  secondary: {
    background: C.PinkGradient
  },
  tertiary: {
    background: C.PurpleGradient
  },
  sm: {
    width: '4rem',
    height: '4rem'
  },
  md: {
    width: '16.5rem',
    height: '16.5rem'
  },
  lg: {
    width: '19.1rem',
    height: '19.1rem'
  }
};

export const Wrapper = styled.div<AvatarProps>`
  max-width: 100%;
  width: 16.5rem;
  height: 16.5rem;
  border-radius: 50%;
  background: ${C.BlueGradient};

  ${({ color }) => css`
    ${color && avatarModifier[color]}
  `}

  ${({ size }) => css`
    ${size && avatarModifier[size]}
  `}

  img {
    overflow: hidden;
    max-width: 100%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    padding: 0.8rem;

    ${({ size }) => css`
      ${size === 'sm' && 'padding: .3rem;'}
    `}

    margin: 0 auto;
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 2.1rem;
    text-transform: capitalize;

    ${({ size }) => css`
      ${size === 'sm' && 'font-size: 1.5rem;'}
    `}
  }
`;
