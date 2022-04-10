import { Avatar } from 'components/core';
import GlobalStyled from 'styles/global';

function App() {
  return (
    <>
      <GlobalStyled />
      <Avatar
        id="avatar"
        color="tertiary"
        size="lg"
        src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2019/04/legiao_HDefAZOkXB85y1sQd9IVJSNKtlbvE3LpRq4GoWPaTc.jpg.jpeg"
      />
    </>
  );
}

export default App;
