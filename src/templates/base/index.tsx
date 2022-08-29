import { ReactElement, ReactNode } from 'react';

interface BaseProps {
  children: ReactNode;
}

const Base = (props: BaseProps): ReactElement => {
  return <div>{props.children}</div>;
};

export default Base;
