import { FC } from 'react';
import {
  Avatar,
  AvatarImg,
  Info,
  LogoImg,
  TweetButton,
  TweetsImg,
  Wrap,
} from './TweetItem.styled';
import logoSvg from '../../shared/images/logo.svg';
import tweetsSvg from '../../shared/images/tweets.svg';
import avatarSvg from '../../shared/images/avatar.svg';
import { ITweetItem } from '../../shared/types/TweetItem.interface';

interface IProps {
  tweet: ITweetItem;
}

export const TweetItem: FC<IProps> = ({ tweet }) => {
  const { id, avatar, followers, tweets, user } = tweet;

  const isActive = false;

  return (
    <Wrap>
      <LogoImg src={logoSvg} alt="logo" />
      <TweetsImg src={tweetsSvg} alt="tweets" />
      <Avatar>
        <AvatarImg src={avatar || avatarSvg} alt="avatar" />
      </Avatar>
      <Info>
        <p>{tweets} tweets</p>
        <p>{followers} followers</p>
      </Info>
      <TweetButton type="button" isActive={isActive}>
        {isActive ? 'following' : 'follow'}
      </TweetButton>
    </Wrap>
  );
};
