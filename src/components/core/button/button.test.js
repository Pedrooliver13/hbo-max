import { mount } from '@cypress/react';
import { Add } from '@styled-icons/fluentui-system-filled/Add';

import { Button } from './index';
import GlobalStyled from 'styles/global';

const testButton = () => {
  const defaultRender = (props) => {
    mount(
      <>
        <GlobalStyled />
        <Button dataCy="test" {...props}>
          Hello
        </Button>
      </>
    );
  };

  const getButton = () => {
    return cy.get('[data-cy="test"]');
  };

  const getButtonIcon = () => {
    return cy.get('[data-cy="test"] svg');
  };

  return { defaultRender, getButton, getButtonIcon };
};

describe('Button Component', () => {
  it('Should render', () => {
    const { defaultRender, getButton } = testButton();

    defaultRender();
    getButton().should('be.visible');
  });

  it('Should have a label', () => {
    const { defaultRender, getButton } = testButton();

    defaultRender();
    getButton().contains('Hello');
  });

  it('Should have a icon in start', () => {
    const { defaultRender, getButtonIcon } = testButton();

    defaultRender({ startIcon: <Add /> });
    getButtonIcon().should('be.visible');
  });

  it('Should have a icon in end', () => {
    const { defaultRender, getButtonIcon } = testButton();

    defaultRender({ endIcon: <Add /> });
    getButtonIcon().should('be.visible');
  });

  it('Should button is disabled', () => {
    const { defaultRender, getButton } = testButton();

    defaultRender({ disabled: true });
    getButton().should('have.attr', 'disabled');
    getButton().should('have.css', 'pointer-events', 'none');
  });

  it('Should button is not disabled', () => {
    const { defaultRender, getButton } = testButton();

    defaultRender({ disabled: false });
    getButton().should('not.have.attr', 'disabled');
    getButton().should('have.css', 'pointer-events', 'auto');
  });

  it('Should have a link', () => {
    const { defaultRender, getButton } = testButton();

    defaultRender({ href: 'https://www.google.com', target: '_blank' });
    getButton().should('have.attr', 'href', 'https://www.google.com');
  });

  it('Should be possible change theme', () => {
    const { defaultRender, getButton } = testButton();

    defaultRender({ color: 'primary' });
    getButton().should('have.css', 'background-color', 'rgb(91, 28, 230)');

    defaultRender({ color: 'secondary' });
    getButton().should('have.css', 'background-color', 'rgb(60, 60, 60)');
  });

  it('Should have a event click', () => {
    const { defaultRender, getButton } = testButton();

    const handleClick = cy.stub();

    defaultRender({ onClick: handleClick });
    getButton().click();
  });

  it('Should have a data-cy', () => {
    const { defaultRender, getButton } = testButton();

    defaultRender({ dataCy: 'test' });
    getButton().should('have.attr', 'data-cy', 'test');
  });
});
