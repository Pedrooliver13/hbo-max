import { mount } from '@cypress/react';

import { ButtonBrand } from '.';
import CartoonLogo from 'assets/cartoon.svg';
import GlobalStyled from 'styles/global';

const testButtonBrand = () => {
  const defaultRender = (props) => {
    mount(
      <>
        <GlobalStyled />
        <ButtonBrand {...props} name="test">
          <img src={CartoonLogo} alt="Cartoon Logo" />
        </ButtonBrand>
      </>
    );
  };

  const getButtonBrand = () => {
    return cy.get('[data-cy=test]');
  };

  return { defaultRender, getButtonBrand };
};

describe('Link Component', () => {
  it('Should render', () => {
    const { defaultRender, getButtonBrand } = testButtonBrand();

    defaultRender();
    getButtonBrand().should('be.visible');
  });

  it('Should have a brand', () => {
    const { defaultRender, getButtonBrand } = testButtonBrand();

    defaultRender();
    getButtonBrand().get('img').should('be.visible');
    getButtonBrand().get('img').should('have.attr', 'src', CartoonLogo);
  });

  it('Should have a href', () => {
    const { defaultRender, getButtonBrand } = testButtonBrand();

    defaultRender({ href: 'https://www.google.com' });
    getButtonBrand().should('have.attr', 'href', 'https://www.google.com');
  });
});
