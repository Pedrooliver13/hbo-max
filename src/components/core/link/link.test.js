import { mount } from '@cypress/react';

import { Link } from '.';
import GlobalStyled from 'styles/global';

const testLink = () => {
  const defaultRender = (props) => {
    mount(
      <>
        <GlobalStyled />
        <Link {...props} name="test">
          Hello
        </Link>
      </>
    );
  };

  const getLink = () => {
    return cy.get('[data-cy=test]');
  };

  return { defaultRender, getLink };
};

describe('Link Component', () => {
  it('Should render', () => {
    const { defaultRender, getLink } = testLink();

    defaultRender();
    getLink().should('be.visible');
  });

  it('Should have a label', () => {
    const { defaultRender, getLink } = testLink();

    defaultRender();
    getLink().contains('Hello');
  });

  it('Should have a href', () => {
    const { defaultRender, getLink } = testLink();

    defaultRender({ href: 'https://www.google.com' });
    getLink().should('have.attr', 'href', 'https://www.google.com');
  });

  it('Should render when isActive be false', () => {
    const { defaultRender, getLink } = testLink();

    defaultRender({ isActive: false });
    getLink().should('be.visible');
    getLink().should('have.css', 'color', 'rgb(153, 153, 153)');
  });
});
