import { FC, useState } from 'react';
import { Text, Trigger, Wrap } from './ToolTip.styled';

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
    <Wrap>
      <Trigger onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
        {children}
      </Trigger>
      {isVisible && <Text>{text}</Text>}
    </Wrap>
  );
};
