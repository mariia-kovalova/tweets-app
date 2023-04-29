import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useRedux';
import { getTweets } from '../../redux/tweets/operations';
import { useTweets } from '../../hooks/useTweets';
import { TweetItem } from '../TweetItem';
import { Item, List } from './TweetList.styled';

export const TweetList: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  const { items } = useTweets();
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <TweetItem tweet={item} />
        </Item>
      ))}
    </List>
  );
};
