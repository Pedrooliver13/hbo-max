import { Base } from 'templates'
import { Carousel, Card, SectionHero } from 'components/core'

import GlobalStyled from 'styles/global'

function App() {
  return (
    <>
      <GlobalStyled />
      <Base>
        <SectionHero />
        <div style={{ marginTop: -90 }}>
          <Carousel title="Séries">
            <Card
              image="https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2020/08/friends-curiosidades-sobre-uma-das-maiores-series-de-todos-os-tempos-1024x576.jpg"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              size="sm"
            />
          </Carousel>
        </div>
      </Base>
    </>
  )
}

export default App
