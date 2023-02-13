// Packages
import styled from 'styled-components';

// Styles
import * as C from 'styles/constants';

interface ArrowProps {
  type?: 'prev' | 'next';
}

export const Arrow = styled.div<ArrowProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
  width: 55px;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  background: ${({ type }) =>
    type === 'next'
      ? `linear-gradient(to left, #050404 2%, transparent 70%);`
      : `linear-gradient(to right, #050404 2%, transparent 70%);`};

  ${({ type }) => (type === 'next' ? `right: 0;` : `left: 0;`)};
`;

export const Wrapper = styled.section`
  position: relative;
  width: 98%;
  margin-left: 2rem;
  overflow-x: hidden;

  h1 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 2.2rem;
    margin: 2rem 1rem;
  }

  &:hover ${Arrow} {
    opacity: 1;
  }

  @media (max-width: ${C.MD}) {
    margin-left: 0;
  }
`;
