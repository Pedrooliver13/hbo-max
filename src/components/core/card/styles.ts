import styled from 'styled-components';

interface CardProps {
  image?: string;
}

export const Wrapper = styled.div<CardProps>`
  max-width: 20rem;
  width: 100%;
  height: 30rem;
  border-radius: 0.5rem;
  margin: 0.5rem;

  background: ${({ image }) => `url(${image}) center center;`};
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
`;
