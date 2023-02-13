// Packages
import { ReactElement } from 'react';

// Assets
import DefaultImage from 'assets/avatar.jpg';

// Styles
import * as S from './styles';

interface AvatarProps {
  id: string;
  href?: string;
  src?: string;
  alt?: string;
  label?: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
}

const Avatar = ({ id, href, src, color, label, size, alt = 'Avatar image' }: AvatarProps): ReactElement => {
  return (
    <S.Wrapper color={color} size={size} id={id} data-cy={id}>
      <a href={href}>
        <img src={src || DefaultImage} alt={alt} />
      </a>
      <div className="description">{label}</div>
    </S.Wrapper>
  );
};

export default Avatar;
