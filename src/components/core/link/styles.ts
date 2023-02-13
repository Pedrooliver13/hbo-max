// Packages
import styled from 'styled-components';

// Styles
import * as C from 'styles/constants';

interface LinkProps {
  isActive: boolean;
}

const linkModifier = {
  notActive: {
    fontWeight: '400',
    color: C.Gray,
  },
};

export const Wrapper = styled.a<LinkProps>`
  font-weight: '700';
  font-size: 2.2rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  ${({ isActive }) => !isActive && linkModifier.notActive}

  &:hover {
    color: ${C.LightPurple};
  }
`;
