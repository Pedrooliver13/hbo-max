// Packages
import { mount } from '@cypress/react';

// Components
import { Avatar } from 'components/core';

// Styles
import GlobalStyled from 'styles/global';

describe('Avatar Component', () => {
  const testAvatar = () => {
    const defaultRender = props =>
      mount(
        <>
          <GlobalStyled />
          <Avatar {...props} id="avatar" />
        </>,
      );

    const getAvatar = () => cy.get('[data-cy="avatar"]');

    return { defaultRender, getAvatar };
  };

  it('Should render', () => {
    const { defaultRender, getAvatar } = testAvatar();

    defaultRender();
    getAvatar().should('be.visible');
  });

  it('Should render with custom size', () => {
    const { defaultRender, getAvatar } = testAvatar();

    const DefaultWidth = {
      sm: '40px',
      md: '165px',
      lg: '191px',
    };

    defaultRender({ size: 'sm' });
    getAvatar().should('have.css', 'width', DefaultWidth.sm);

    defaultRender({ size: 'md' });
    getAvatar().should('have.css', 'width', DefaultWidth.md);

    defaultRender({ size: 'lg' });
    getAvatar().should('have.css', 'width', DefaultWidth.lg);
  });

  it('Should render with custom color', () => {
    const { defaultRender, getAvatar } = testAvatar();

    const defaultColors = {
      primary:
        'rgba(0, 0, 0, 0) linear-gradient(308.16deg, rgb(20, 0, 255) 15.36%, rgb(114, 170, 255) 84.52%) repeat scroll 0% 0% / auto padding-box border-box',
      secondary:
        'rgba(0, 0, 0, 0) linear-gradient(313.21deg, rgb(252, 0, 196) 16.17%, rgb(255, 140, 230) 87.96%) repeat scroll 0% 0% / auto padding-box border-box',
      tertiary:
        'rgba(0, 0, 0, 0) linear-gradient(90.36deg, rgb(71, 16, 193) 3.28%, rgb(120, 87, 255) 50.58%, rgb(129, 155, 253) 96.22%) repeat scroll 0% 0% / auto padding-box border-box',
    };

    defaultRender({ color: 'primary' });
    getAvatar().should('have.css', 'background', defaultColors.primary);

    defaultRender({ color: 'secondary' });
    getAvatar().should('have.css', 'background', defaultColors.secondary);

    defaultRender({ color: 'tertiary' });
    getAvatar().should('have.css', 'background', defaultColors.tertiary);
  });

  it('Should render with custom image', () => {
    const { defaultRender } = testAvatar();

    defaultRender({ src: 'https://via.placeholder.com/150' });
    cy.get('[data-cy=avatar] img').should('have.attr', 'src', 'https://via.placeholder.com/150');
  });

  it('Should render with custom alt', () => {
    const { defaultRender } = testAvatar();

    defaultRender({ alt: 'Test' });
    cy.get('[data-cy=avatar] img').should('have.attr', 'alt', 'Test');
  });

  it('Should have a link', () => {
    const { defaultRender } = testAvatar();

    defaultRender({ href: 'https://www.google.com' });
    cy.get('[data-cy=avatar] a').should('have.attr', 'href', 'https://www.google.com');
  });

  it('Should have a label', () => {
    const { defaultRender } = testAvatar();

    defaultRender({ label: 'Test' });
    cy.get('[data-cy=avatar] div').should('have.text', 'Test');
  });
});
