// Packages
import { ReactElement, ReactNode } from 'react';

interface BaseProps {
  children?: ReactNode;
}

const Base = (props: BaseProps): ReactElement => <>{props.children}</>;

export default Base;
