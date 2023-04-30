import { FC } from 'react';
import { TweetsWithIsFollowing } from '../../shared/types/TweetItem.interface';
import TweetItem from '../TweetItem/TweetItem';
import { Item, List } from './TweetList.styled';

interface IProps {
  items: TweetsWithIsFollowing[];
}

export const TweetList: FC<IProps> = ({ items }) => {
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
