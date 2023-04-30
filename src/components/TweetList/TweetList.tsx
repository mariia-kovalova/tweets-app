import { FC, useEffect } from 'react';
import { TweetsWithIsFollowing } from '../../shared/types/TweetItem.interface';
import { useTweets } from '../../hooks/useTweets';
import { useAppDispatch } from '../../hooks/useRedux';
import { usePagination } from '../../hooks/usePagination';
import { getTweets } from '../../redux/tweets/operations';

import TweetItem from '../TweetItem/TweetItem';
import { Loader } from '../Loader';
import { End, Item, List, StyledButton } from './TweetList.styled';

const ITEMS_PER_PAGE = 3;

export const TweetList: FC = () => {
  const { items = [], isLoading, error } = useTweets();
  const dispatch = useAppDispatch();

  const { shownData, hasMore, loadMore } = usePagination<TweetsWithIsFollowing>(
    {
      initialPage: 1,
      perPage: ITEMS_PER_PAGE,
      data: items,
    }
  );

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  const showLoader = isLoading && shownData.length === 0;
  const showList = !error && shownData.length !== 0;
  const showLoadMore = !error && shownData.length !== 0 && hasMore;
  const showEnd = !error && shownData.length !== 0 && !hasMore;

  return (
    <>
      {showLoader && <Loader />}
      {error && <div>Error</div>}
      {showList && (
        <List>
          {shownData.map(item => (
            <Item key={item.id}>
              <TweetItem tweet={item} />
            </Item>
          ))}
        </List>
      )}
      {showLoadMore && (
        <StyledButton
          type="button"
          onClick={() => {
            loadMore();
          }}
        >
          Load more
        </StyledButton>
      )}
      {showEnd && <End>End of content</End>}
    </>
  );
};
