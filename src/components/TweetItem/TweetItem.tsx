import { FC, memo, useState } from 'react';
import { TweetsWithIsFollowing } from '../../shared/types/TweetItem.interface';
import { useAppDispatch } from '../../hooks/useRedux';
import { addFollowing, removeFollowing } from '../../redux/followings/slice';
import { updateTweet } from '../../redux/tweets/operations';

import logoSvg from '../../shared/images/logo.svg';
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
import {
  numberWithComas,
  numberWithSpaces,
} from '../../shared/utils/formatNumber';
import { Tooltip } from '../ToolTip';

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
      <LogoImg src={logoSvg} width="76" height="22" alt="logo" />
      <TweetsImg />
      <Avatar>
        <Tooltip text={user}>
          <AvatarImg
            src={avatar || avatarSvg}
            width="64"
            height="64"
            alt="avatar"
          />
        </Tooltip>
      </Avatar>
      <Info>
        <p>{numberWithSpaces(tweets)} tweets</p>
        <p>{numberWithComas(followers)} followers</p>
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
