import { FC } from 'react';
import { FooterStyled, Heart, Link, TextWrap, Wrap } from './Footer.styled';
import { Container } from '../../shared/styles/components/Container.styled';

export const Footer: FC = () => {
  return (
    <FooterStyled>
      <Container>
        <Wrap>
          <span>&copy; 2023 | All Rights Reserved |</span>
          <TextWrap>
            <span>Developed with</span>
            <Heart />
          </TextWrap>
          <Link
            href="https://github.com/mariia-kovalova"
            target="_blank"
            rel="noreferrer noopener nofollow"
            color="inherit"
          >
            by Mariia Kovalova
          </Link>
        </Wrap>
      </Container>
    </FooterStyled>
  );
};
