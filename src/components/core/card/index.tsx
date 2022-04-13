import { CircularButton } from 'components/core';

import * as S from './styles';

interface CardProps {
  name: string;
  image: string;
  href: string;
  title?: string;
  type?: 'movie' | 'series';
  size?: 'sm' | 'md' | 'lg';
}

export const Card = ({
  name,
  image,
  href,
  title,
  type = 'series',
  size = 'md'
}: CardProps) => {
  return (
    <S.Wrapper id={name} data-cy={name} image={image} size={size}>
      <div className="dashboard">
        <CircularButton name="play" icon="play" href={href} />
        <CircularButton name="my-list" icon="add" />
      </div>
      <div>
        {type === 'series' && <span>YOUR NEXT EPISODE</span>}
        <h2 className="title">{title}</h2>
      </div>
    </S.Wrapper>
  );
};
