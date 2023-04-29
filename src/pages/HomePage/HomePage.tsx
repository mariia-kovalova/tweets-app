import { FC } from 'react';
import { Container } from '../../shared/styles/components/Container.styled';
import { Section } from '../../shared/styles/components/Section.styled';
import { Helmet } from 'react-helmet-async';
import { Tittle } from './HomePage.styled';

const HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Tweets App</title>
      </Helmet>
      <Section>
        <Container>
          <Tittle>Welcome to Tweets App</Tittle>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
