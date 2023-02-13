// Packages
import { ReactElement, ReactNode } from 'react';

// Components
import { Header } from 'components/layout';

interface BaseProps {
  children?: ReactNode;
}

const Base = (props: BaseProps): ReactElement => (
  <>
    <Header />
    {props.children}
  </>
);

export default Base;
