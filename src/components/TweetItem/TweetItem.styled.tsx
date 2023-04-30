import styled from '@emotion/styled';
import { Button } from '../../shared/styles/components/Button.styled';

type StyedButtonProps = {
  isFollowing: boolean;
};

export const Wrap = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  padding: 284px 20px 36px;

  background: ${props => props.theme.bgTweetCard};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 8px;
    left: 0px;
    top: 214px;

    background-color: ${({ theme }) => theme.secondary};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 21px;
`;

export const TweetsImg = styled.img`
  position: absolute;
  top: 27px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const Avatar = styled.div`
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translate(-50%, 0);

  width: 80px;
  height: 80px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const AvatarImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 64px;
  height: 64px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.secondary};
`;

export const TweetButton = styled(Button)<StyedButtonProps>`
  margin: 26px auto 0;
  text-transform: uppercase;
  background-color: ${({ theme, isFollowing }) =>
    isFollowing ? theme.accent : theme.secondary};

  &:disabled {
    background-color: rgba(128, 128, 128, 0.641);
  }
`;
