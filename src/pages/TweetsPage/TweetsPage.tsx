import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
import { usePagination } from '../../hooks/usePagination';
import { home } from '../../shared/constants/routes';

import { Section } from '../../shared/styles/components/Section.styled';
import { Container } from '../../shared/styles/components/Container.styled';
import { Loader } from '../../components/Loader';
import { TweetList } from '../../components/TweetList';
import { Info, StyledBackIcon, StyledButton, Wrap } from './TweetsPage.styled';
import { Filter } from '../../components/Filter';
import { GoBackLink } from '../../shared/styles/components/GoBackLink.styled';

const TweetsPage: FC = () => {
  const location = useLocation();
  const path = location.state?.from ?? home;
  const { items, hasMore, loadMore, isLoading, error } = usePagination();

  const showLoader = isLoading && items.length === 0;
  const showList = !error && items.length !== 0;
  const showLoadMore = !error && !isLoading && items.length !== 0 && hasMore;

  return (
    <>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      <Section>
        <Container>
          <Wrap>
            <GoBackLink to={path}>
              <StyledBackIcon />
              <span>Go back</span>
            </GoBackLink>
            {!error && <Filter />}
          </Wrap>

          {showList && <TweetList items={items} />}
          {showLoadMore && (
            <StyledButton type="button" onClick={loadMore}>
              Load more
            </StyledButton>
          )}
          {showLoader && <Loader />}
          {error && (
            <Info>
              <p>Oops, something went wrong</p>
              <p>(๑•́ ﹏•̀๑✿)</p>
            </Info>
          )}
        </Container>
      </Section>
    </>
  );
};

export default TweetsPage;
