import { mount } from '@cypress/react';

import { CircularButton } from '.';
import GlobalStyled from 'styles/global';

const testCircularButton = () => {
  const defaultRender = (props) => {
    mount(
      <>
        <GlobalStyled />
        <CircularButton {...props} name="test" />
      </>
    );
  };

  const getCircularButton = () => {
    return cy.get('[data-cy=test]');
  };

  return { defaultRender, getCircularButton };
};

describe('CircularButton Component', () => {
  it('Should render', () => {
    const { defaultRender, getCircularButton } = testCircularButton();

    defaultRender();
    getCircularButton().should('be.visible');
  });

  it('Should have a icon', () => {
    const { defaultRender, getCircularButton } = testCircularButton();

    defaultRender();
    getCircularButton().get('svg').should('be.visible');
    getCircularButton({ icon: 'play' }).get('svg').should('be.visible');
    getCircularButton({ icon: 'check' }).get('svg').should('be.visible');
  });

  it('Should have a href', () => {
    const { defaultRender, getCircularButton } = testCircularButton();

    defaultRender({ href: 'https://www.google.com' });
    getCircularButton().should('have.attr', 'href', 'https://www.google.com');
  });
});
