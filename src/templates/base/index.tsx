import { ReactElement, ReactNode } from 'react'

interface BaseProps {
  children?: ReactNode
}

export const Base = (props: BaseProps): ReactElement => <>{props.children}</>
