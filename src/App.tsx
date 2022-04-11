import { Card } from 'components/core';
import GlobalStyled from 'styles/global';

function App() {
  return (
    <>
      <GlobalStyled />
      <Card
        name="Card"
        image="https://images.moviesanywhere.com/a4d68b895ddea9e52e345e2f0c6838ab/423fc271-7a33-4155-92db-3c926d8c1af3.jpg"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
    </>
  );
}

export default App;
