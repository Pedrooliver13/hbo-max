import HboLogo from 'assets/hbo.svg';
import WarnerLogo from 'assets/warner.svg';
import Max from 'assets/max.svg';
import Dc from 'assets/dc.svg';
import Cartoon from 'assets/cartoon.svg';

import * as S from './styles';

interface ButtonBrandProps {
  brand?: 'hbo' | 'warner' | 'cartoon' | 'max' | 'dc';
  href?: string;
  name: string;
}

const listBrands = {
  hbo: {
    logo: HboLogo,
    alt: 'HBO'
  },
  warner: {
    logo: WarnerLogo,
    alt: 'Warner'
  },
  cartoon: {
    logo: Cartoon,
    alt: 'Cartoon'
  },
  max: {
    logo: Max,
    alt: 'Max'
  },
  dc: {
    logo: Dc,
    alt: 'DC'
  }
};

export const ButtonBrand = ({
  brand = 'hbo',
  href,
  name
}: ButtonBrandProps) => {
  const { logo, alt } = listBrands[brand];

  return (
    <S.Wrapper id={name} data-cy={name} href={href}>
      <img src={logo} alt={alt} />
    </S.Wrapper>
  );
};
