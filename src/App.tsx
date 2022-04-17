import { Carousel, Card } from 'components/core';
import GlobalStyled from 'styles/global';

function App() {
  return (
    <>
      <GlobalStyled />
      <Carousel title="Séries">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <Card
              key={index}
              image="https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2020/08/friends-curiosidades-sobre-uma-das-maiores-series-de-todos-os-tempos-1024x576.jpg"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              size="lg"
            />
          ))}
      </Carousel>
    </>
  );
}

export default App;
