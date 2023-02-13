// Packages
import { mount } from '@cypress/react';

// Components
import { ButtonBrand } from 'components/core';

// Styles
import GlobalStyled from 'styles/global';

const testButtonBrand = () => {
  const defaultRender = props => {
    mount(
      <>
        <GlobalStyled />
        <ButtonBrand {...props} name="test" />
      </>,
    );
  };

  const getButtonBrand = () => {
    return cy.get('[data-cy=test]');
  };

  return { defaultRender, getButtonBrand };
};

describe('ButtonBrand Component', () => {
  it('Should render', () => {
    const { defaultRender, getButtonBrand } = testButtonBrand();

    defaultRender();
    getButtonBrand().should('be.visible');
  });

  it('Should have a brand', () => {
    const { defaultRender, getButtonBrand } = testButtonBrand();

    defaultRender();
    getButtonBrand().get('img').should('be.visible');
  });

  it('Should have a href', () => {
    const { defaultRender, getButtonBrand } = testButtonBrand();

    defaultRender({ href: 'https://www.google.com' });
    getButtonBrand().should('have.attr', 'href', 'https://www.google.com');
  });
});
