/* eslint-disable @typescript-eslint/ban-ts-comment */
import Slider from 'react-slick';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as S from './styles';

interface CarouselProps {
  title: string;
  children: React.ReactNode;
}

interface CarouselArrowProps {
  className?: string;
  style?: object;
  type?: 'next' | 'prev';
  onClick?: () => void;
}

function Arrow({ onClick, type = 'prev' }: CarouselArrowProps) {
  return (
    <S.Arrow onClick={onClick} type={type}>
      {type === 'prev' ? <ArrowIosBackOutline /> : <ArrowIosForwardOutline />}
    </S.Arrow>
  );
}

export const Carousel = ({ children, title }: CarouselProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow />
  };

  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <Slider {...settings}>{children}</Slider>
    </S.Wrapper>
  );
};
