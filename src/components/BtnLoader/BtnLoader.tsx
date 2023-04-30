import { FC } from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const BtnLoader: FC = () => {
  return (
    <ThreeDots
      height="12"
      width="100%"
      radius="9"
      color="#fff"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
};
