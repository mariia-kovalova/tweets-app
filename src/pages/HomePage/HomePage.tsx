import { FC } from 'react';
import { Container } from '../../shared/styles/components/Container.styled';
import { Section } from '../../shared/styles/components/Section.styled';
import { Helmet } from 'react-helmet-async';

import { StyledLink, Tittle, TweetsImg } from './HomePage.styled';
import { tweets } from '../../shared/constants/routes';
import { useLocation } from 'react-router';

const HomePage: FC = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Tweets App</title>
      </Helmet>
      <Section>
        <Container>
          <Tittle>Welcome to Tweets App</Tittle>
          <TweetsImg />
          <StyledLink to={tweets} state={{ from: location }}>
            see tweets
          </StyledLink>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
