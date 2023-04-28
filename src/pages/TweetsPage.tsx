import { FC } from 'react';
import { TweetList } from '../components/TweetList';
import { Section } from '../shared/styles/components/Section.styled';
import { Container } from '../shared/styles/components/Container.styled';

const TweetsPage: FC = () => {
  return (
    <Section>
      <Container>
        <TweetList />
      </Container>
    </Section>
  );
};

export default TweetsPage;
