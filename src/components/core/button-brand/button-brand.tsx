// Packages
import { ReactElement } from 'react'

// Assets
import HboLogo from 'assets/hbo.svg'
import WarnerLogo from 'assets/warner.svg'
import MaxLogo from 'assets/max.svg'
import DcLogo from 'assets/dc.svg'
import CartoonLogo from 'assets/cartoon.svg'

// Styles
import * as S from './styles'

interface ButtonBrandProps {
  brand?: 'hbo' | 'warner' | 'cartoon' | 'max' | 'dc'
  href?: string
  name: string
}

const listBrands = {
  hbo: {
    logo: HboLogo,
    alt: 'HBO',
  },
  warner: {
    logo: WarnerLogo,
    alt: 'Warner',
  },
  cartoon: {
    logo: CartoonLogo,
    alt: 'Cartoon',
  },
  max: {
    logo: MaxLogo,
    alt: 'Max',
  },
  dc: {
    logo: DcLogo,
    alt: 'DC',
  },
}

const ButtonBrand = ({ brand = 'hbo', href, name }: ButtonBrandProps): ReactElement => {
  const { logo, alt } = listBrands[brand]

  return (
    <S.Wrapper id={name} data-cy={name} href={href}>
      <img src={logo} alt={alt} />
    </S.Wrapper>
  )
}

export default ButtonBrand
