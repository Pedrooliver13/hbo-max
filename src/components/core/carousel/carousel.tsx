// Packages
import { ReactElement } from 'react';
import Slider from 'react-slick';

// Icons
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline';

// Styles
import * as S from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  title: string;
  children: JSX.Element;
}

interface CarouselArrowProps {
  className?: string;
  style?: object;
  type?: 'next' | 'prev';
  onClick?: () => void;
}

function Arrow({ onClick, type = 'prev' }: CarouselArrowProps): ReactElement {
  return (
    <S.Arrow onClick={onClick} type={type}>
      {type === 'prev' ? <ArrowIosBackOutline size={40} /> : <ArrowIosForwardOutline size={40} />}
    </S.Arrow>
  );
}

const Carousel = ({ children, title }: CarouselProps): ReactElement => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow />,
  };

  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <Slider {...settings}>{children}</Slider>
    </S.Wrapper>
  );
};

export default Carousel;
