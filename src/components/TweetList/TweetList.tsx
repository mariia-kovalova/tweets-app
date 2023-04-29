import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useRedux';
import { getTweets } from '../../redux/tweets/operations';
import { useTweets } from '../../hooks/useTweets';
import { TweetItem } from '../TweetItem';
import { End, Item, List, StyledButton } from './TweetList.styled';
import { usePagination } from '../../hooks/usePagination';
import { ITweetItem } from '../../shared/types/TweetItem.interface';
import { scrollToBottom } from '../../shared/utils/scrollToBottom';

const ITEMS_PER_PAGE = 3;

export const TweetList: FC = () => {
  const { items, isLoading, error } = useTweets();
  const dispatch = useAppDispatch();
  const { shownData, hasMore, loadMore } = usePagination<ITweetItem>({
    initialPage: 1,
    perPage: ITEMS_PER_PAGE,
    data: items,
  });

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  useEffect(() => {
    if (shownData.length > ITEMS_PER_PAGE) scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadMore]);

  const showList = !error && !isLoading && shownData.length !== 0;
  const showLoadMore =
    !error && !isLoading && shownData.length !== 0 && hasMore;
  const showEnd = !error && !isLoading && shownData.length !== 0 && !hasMore;

  return (
    <>
      {isLoading && <div>Skeleton</div>}
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
