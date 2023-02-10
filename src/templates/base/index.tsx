import { ReactElement, ReactNode } from 'react';

import { Header } from 'components/layout';

interface BaseProps {
  children?: ReactNode;
}

export const Base = (props: BaseProps): ReactElement => (
  <>
    <Header />
    {props.children}
  </>
);
