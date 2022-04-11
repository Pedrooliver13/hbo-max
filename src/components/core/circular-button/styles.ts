import styled from 'styled-components';

import * as C from 'styles/constants';

export const Wrapper = styled.a`
  max-width: 4.4rem;
  width: 100%;
  height: 4.4rem;
  margin: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border: 2px solid ${C.White};
  border-radius: 50%;

  svg {
    width: 2.2rem;
  }
`;
