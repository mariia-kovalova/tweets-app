import { FC } from 'react';
import { TweetList } from '../../components/TweetList';
import { Section } from '../../shared/styles/components/Section.styled';
import { Container } from '../../shared/styles/components/Container.styled';
import { Helmet } from 'react-helmet-async';

const TweetsPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      <Section>
        <Container>
          <TweetList />
        </Container>
      </Section>
    </>
  );
};

export default TweetsPage;
