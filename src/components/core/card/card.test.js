import { mount } from '@cypress/react';

import { Card } from '.';
import GlobalStyled from 'styles/global';

const testCard = () => {
  const defaultRender = (props) => {
    mount(
      <>
        <GlobalStyled />
        <Card
          name="test"
          image="https://images.moviesanywhere.com/a4d68b895ddea9e52e345e2f0c6838ab/423fc271-7a33-4155-92db-3c926d8c1af3.jpg"
          href="https://www.imdb.com/title/tt0111161/"
          {...props}
        />
      </>
    );
  };

  const getCard = () => {
    return cy.get('[data-cy=test]');
  };

  return { defaultRender, getCard };
};

describe('Card Component', () => {
  it('Should render', () => {
    const { defaultRender, getCard } = testCard();

    defaultRender();
    getCard().should('be.visible');
  });

  it('Should have buttons', () => {
    const { defaultRender, getCard } = testCard();

    defaultRender();
    getCard().get('[data-cy=play]');
    getCard().get('[data-cy=my-list]');
  });

  it('Should have a href', () => {
    const { defaultRender, getCard } = testCard();

    defaultRender({ href: 'https://www.google.com' });
    getCard()
      .get('[data-cy=play]')
      .should('have.attr', 'href', 'https://www.google.com');
  });

  it('Should have a image', () => {
    const { defaultRender, getCard } = testCard();

    defaultRender({
      image:
        'https://images.moviesanywhere.com/a4d68b895ddea9e52e345e2f0c6838ab/423fc271-7a33-4155-92db-3c926d8c1af3.jpg'
    });
    getCard()
      .should('have.css', 'background-image')
      .should('include', '423fc271-7a33-4155-92db-3c926d8c1af3.jpg');
  });
});
