import styled from '@emotion/styled';
import tweetsSvg from '../../shared/images/tweets.svg';
import { Button } from '../../shared/styles/components/Button.styled';
import { desktop, tablet } from '../../shared/constants/devicesSizes';

type StyedButtonProps = {
  isFollowing: boolean;
};

export const Wrap = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  padding: 240px 20px 36px;

  background: ${({ theme }) => theme.bgTweetCard};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  @media screen and (min-width: ${desktop}) {
    padding: 284px 20px 36px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 8px;
    left: 0px;
    top: 184px;

    background-color: ${({ theme }) => theme.secondary};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;

    @media screen and (min-width: ${desktop}) {
      top: 214px;
    }
  }
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 21px;
`;

export const TweetsImg = styled.div`
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translate(-50%, 0);

  width: 221px;
  height: 121px;

  background-image: url(${tweetsSvg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: ${tablet}) {
    top: 52px;
    width: 183px;
    height: 96px;
  }

  @media screen and (min-width: ${desktop}) {
    top: 27px;
    width: 280px;
    height: 153px;
  }
`;

export const Avatar = styled.div`
  position: absolute;
  top: 148px;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  @media screen and (min-width: ${desktop}) {
    top: 178px;
  }
`;

export const AvatarImg = styled.img`
  width: 64px;
  height: 64px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.secondary};

  @media screen and (min-width: ${desktop}) {
    gap: 16px;
    font-size: 20px;
  }
`;

export const TweetButton = styled(Button)<StyedButtonProps>`
  width: 180px;
  height: 50px;
  margin: 16px auto 0;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  text-transform: uppercase;
  background-color: ${({ theme, isFollowing }) =>
    isFollowing ? theme.accent : theme.secondary};
  transition: transform 250ms ${({ theme }) => theme.cubic};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  &:disabled {
    background-color: rgba(128, 128, 128, 0.641);
  }

  @media screen and (min-width: ${desktop}) {
    margin: 26px auto 0;
    width: 196px;
    font-size: 18px;
  }
`;
