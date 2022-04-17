import styled from 'styled-components';

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
  background-color: rgba(15, 15, 15, 0.85);
  width: 55px;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  ${({ type }) => (type === 'next' ? `right: 0;` : `left: 0;`)}
`;

export const Wrapper = styled.section`
  position: relative;
  width: 100%;

  h1 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 2.2rem;
    margin: 2.2rem 2rem;
  }

  &:hover ${Arrow} {
    opacity: 1;
  }
`;
