import { FC, memo, useState } from 'react';
import { TweetsWithIsFollowing } from '../../shared/types/TweetItem.interface';
import { useAppDispatch } from '../../hooks/useRedux';
import { addFollowing, removeFollowing } from '../../redux/followings/slice';
import { updateTweet } from '../../redux/tweets/operations';

import logoSvg from '../../shared/images/logo.svg';
import tweetsSvg from '../../shared/images/tweets.svg';
import avatarSvg from '../../shared/images/avatar.svg';
import { BtnLoader } from '../BtnLoader';
import {
  Avatar,
  AvatarImg,
  Info,
  LogoImg,
  TweetButton,
  TweetsImg,
  Wrap,
} from './TweetItem.styled';

interface IProps {
  tweet: TweetsWithIsFollowing;
}

const TweetItem: FC<IProps> = ({ tweet }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { id, user, avatar, followers, tweets, isFollowing } = tweet;
  const dispatch = useAppDispatch();

  const follow = async () => {
    await dispatch(
      updateTweet({
        id,
        user,
        avatar,
        tweets,
        followers: followers - 1,
      })
    ).unwrap();
    dispatch(removeFollowing(id));
  };

  const unfollow = async () => {
    await dispatch(
      updateTweet({
        id,
        user,
        avatar,
        tweets,
        followers: followers + 1,
      })
    ).unwrap();
    dispatch(addFollowing(id));
  };

  const handleToggleFollow = async () => {
    setIsUpdating(true);
    if (isFollowing) await follow();
    if (!isFollowing) await unfollow();
    setIsUpdating(false);
  };

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
      <TweetButton
        type="button"
        isFollowing={isFollowing}
        onClick={handleToggleFollow}
        disabled={isUpdating}
      >
        {isUpdating ? (
          <BtnLoader />
        ) : (
          <span>{isFollowing ? 'following' : 'follow'}</span>
        )}
      </TweetButton>
    </Wrap>
  );
};

export default memo(TweetItem);
