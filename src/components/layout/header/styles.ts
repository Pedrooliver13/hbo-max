// Packages
import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 100%;
  width: 100%;

  padding: 2rem 4rem;
  margin-right: auto;
  margin-left: auto;

  .avatar {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
