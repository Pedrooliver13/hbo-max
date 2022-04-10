import { mount } from '@cypress/react';

import { Button } from './index';
import GlobalStyled from 'styles/global';

describe('Button Component', () => {
  const defaultRender = () => {
    mount(
      <>
        <GlobalStyled />
        <Button dataCy="test">Hello</Button>
      </>
    );
  };

  it('Should render', () => {
    defaultRender();

    cy.get('[data-cy=test]').should('be.visible');
  });

  it('Should render with children', () => {
    defaultRender();

    cy.get('[data-cy=test]').contains('Hello');
  });
});
