import { CircularButton } from 'components/core';

import * as S from './styles';

interface CardProps {
  name: string;
  image: string;
  href: string;
}

export const Card = ({ name, image, href }: CardProps) => {
  return (
    <S.Wrapper id={name} data-cy={name} image={image}>
      <div className="dashboard">
        <CircularButton name="play" icon="play" href={href} />
        <CircularButton name="my-list" icon="add" />
      </div>
    </S.Wrapper>
  );
};
