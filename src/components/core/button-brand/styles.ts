// Packages
import styled from 'styled-components';

// Styles
import * as C from 'styles/constants';

export const Wrapper = styled.a`
  max-width: 100%;
  width: 11.6rem;
  height: 4.2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 2.6rem;
  text-transform: uppercase;
  transition: background 2s ease-in-out;

  background: ${C.Black};
  border: 2px solid ${C.LightPurple};

  &:hover {
    background: ${C.PurpleGradient};
  }

  img {
    max-width: 100%;
  }
`;
