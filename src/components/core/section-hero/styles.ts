// Packages
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 90vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -100px;
    width: 100%;
    height: 900px;
    background: linear-gradient(to top, #050404 10%, transparent 90%);
  }
`;
