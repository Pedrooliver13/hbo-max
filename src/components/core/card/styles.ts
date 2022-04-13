import styled from 'styled-components';

import * as C from 'styles/constants';

interface CardProps {
  image?: string;
  size: 'sm' | 'md' | 'lg';
}

const cardModifier = {
  sm: {
    maxWidth: '20rem',
    height: '20rem'
  },
  md: {
    maxWidth: '20rem',
    height: '30rem'
  },
  lg: {
    maxWidth: '54.8rem',
    height: '30.7rem'
  }
};

export const Wrapper = styled.div<CardProps>`
  max-width: 20rem;
  width: 100%;
  height: 30rem;
  border-radius: 0.5rem;
  margin: 0.5rem;

  ${({ size }) => cardModifier[size]};

  background: ${({ image }) => `url(${image}) no-repeat center center;`};
  background-size: cover;

  .dashboard {
    opacity: 0;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    height: 100%;
    padding: 1rem;
    transition: opacity 0.2s ease-in-out;
    background: linear-gradient(to top, #050404 5%, transparent 70%);

    &:hover {
      opacity: 1;
    }
  }

  span {
    font-size: 1rem;
    color: ${C.Gray};
  }

  .title {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    color: ${C.White};
    text-transform: capitalize;
  }
`;
