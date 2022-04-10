import { Add } from '@styled-icons/fluentui-system-filled/Add';
import { PlayFill } from '@styled-icons/bootstrap/PlayFill';
import { Check2 } from '@styled-icons/bootstrap/Check2';

import * as S from './styles';

interface CircularButtonProps {
  href?: string;
  name: string;
  icon?: 'add' | 'play' | 'check';
}
const listIcons = {
  add: Add,
  play: PlayFill,
  check: Check2
};

export const CircularButton = ({
  name,
  href,
  icon = 'add'
}: CircularButtonProps) => {
  const Icon = listIcons[icon];

  return (
    <S.Wrapper id={name} data-cy={name} href={href}>
      <Icon />
    </S.Wrapper>
  );
};
