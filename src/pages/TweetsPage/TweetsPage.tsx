import { FC, useEffect } from 'react';
import { TweetsWithIsFollowing } from '../../shared/types/TweetItem.interface';
import { Helmet } from 'react-helmet-async';
import { useTweets } from '../../hooks/useTweets';
import { useAppDispatch } from '../../hooks/useRedux';
import { getTweets } from '../../redux/tweets/operations';
import { usePagination } from '../../hooks/usePagination';
import { useLocation } from 'react-router';
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
  const { items = [], isLoading, error } = useTweets();
  const dispatch = useAppDispatch();

  const { shownData, hasMore, loadMore } =
    usePagination<TweetsWithIsFollowing>(items);

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  const showLoader = isLoading && shownData.length === 0;
  const showList = !error && shownData.length !== 0;
  const showLoadMore = !error && shownData.length !== 0 && hasMore;

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

          {showList && <TweetList items={shownData} />}
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
