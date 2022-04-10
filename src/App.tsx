import { Button } from 'components/core';
import { Add } from '@styled-icons/fluentui-system-filled/Add';

import GlobalStyled from 'styles/global';

function App() {
  return (
    <>
      <GlobalStyled />
      <Button name="teste" startIcon={<Add />}>
        ADULT
      </Button>
    </>
  );
}

export default App;
