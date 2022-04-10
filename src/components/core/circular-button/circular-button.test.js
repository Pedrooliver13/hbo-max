import { mount } from '@cypress/react';

import { CircularButton } from '.';
import GlobalStyled from 'styles/global';

const testButtonBrand = () => {
  const defaultRender = (props) => {
    mount(
      <>
        <GlobalStyled />
        <CircularButton {...props} name="test" />
      </>
    );
  };

  const getCIrcularButton = () => {
    return cy.get('[data-cy=test]');
  };

  return { defaultRender, getCIrcularButton };
};

describe('Link Component', () => {
  it('Should render', () => {
    const { defaultRender, getCIrcularButton } = testButtonBrand();

    defaultRender();
    getCIrcularButton().should('be.visible');
  });

  it('Should have a icon', () => {
    const { defaultRender, getCIrcularButton } = testButtonBrand();

    defaultRender();
    getCIrcularButton().get('svg').should('be.visible');
    getCIrcularButton({ icon: 'play' }).get('svg').should('be.visible');
    getCIrcularButton({ icon: 'check' }).get('svg').should('be.visible');
  });

  it('Should have a href', () => {
    const { defaultRender, getCIrcularButton } = testButtonBrand();

    defaultRender({ href: 'https://www.google.com' });
    getCIrcularButton().should('have.attr', 'href', 'https://www.google.com');
  });
});
