// Packages
import styled from 'styled-components';

// Styles
import * as C from 'styles/constants';

interface CardProps {
  image?: string;
  size: 'sm' | 'md' | 'lg';
}

const cardModifier = {
  sm: {
    maxWidth: '200px',
    width: '200px',
    height: '200px',
  },
  md: {
    maxWidth: '200px',
    width: '200px',
    height: '300px',
  },
  lg: {
    maxWidth: '348px',
    width: '348px',
    height: '207px',
  },
};

export const Wrapper = styled.div<CardProps>`
  max-width: 20rem;
  width: 100%;
  height: 30rem;
  border-radius: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;

  ${({ size }) => cardModifier[size]};

  border: 2px solid transparent;
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

  &:hover {
    border: 2px solid ${C.Purple};
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
