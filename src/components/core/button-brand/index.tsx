import * as S from './styles';

interface ButtonBrandProps {
  href?: string;
  name: string;
  children: React.ReactChild;
}

export const ButtonBrand = ({ children, href, name }: ButtonBrandProps) => {
  return (
    <S.Wrapper id={name} data-cy={name} href={href}>
      {children}
    </S.Wrapper>
  );
};
