import { FC, useState } from 'react';
import { Text, Trigger } from './ToolTip.styled';

interface Props {
  text: string;
  children: any;
}

export const Tooltip: FC<Props> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleTooltip = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Trigger onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
        {children}
      </Trigger>
      {isVisible && <Text aria-label="User name">{text}</Text>}
    </>
  );
};
