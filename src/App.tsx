import { ButtonBrand } from 'components/core';
import GlobalStyled from 'styles/global';

import HboLogo from 'assets/hbo.svg';
import WarnerLogo from 'assets/warner.svg';
import Max from 'assets/max.svg';
import Dc from 'assets/dc.svg';
import Cartoon from 'assets/cartoon.svg';

function App() {
  return (
    <>
      <GlobalStyled />
      <ButtonBrand name="teste">
        <img src={HboLogo} alt="HBO" />
      </ButtonBrand>
      <ButtonBrand name="teste2">
        <img src={WarnerLogo} alt="HBO" />
      </ButtonBrand>
      <ButtonBrand name="teste3">
        <img src={Max} alt="HBO" />
      </ButtonBrand>
      <ButtonBrand name="teste4">
        <img src={Dc} alt="HBO" />
      </ButtonBrand>
      <ButtonBrand name="teste5">
        <img src={Cartoon} alt="HBO" />
      </ButtonBrand>
    </>
  );
}

export default App;
