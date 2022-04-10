import { CircularButton } from 'components/core';
import GlobalStyled from 'styles/global';

function App() {
  return (
    <>
      <GlobalStyled />
      <CircularButton name="teste" />
      <CircularButton name="teste" icon="play" />
      <CircularButton name="teste" icon="check" />
    </>
  );
}

export default App;
