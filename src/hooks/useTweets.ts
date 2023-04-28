import {
  selectTweetsError,
  selectTweetsIsLoading,
  selectTweetsItems,
} from '../redux/tweets/selectors';
import { useAppSelector } from './useRedux';

export const useTweets = () => {
  const isLoading = useAppSelector(selectTweetsIsLoading);
  const error = useAppSelector(selectTweetsError);
  const items = useAppSelector(selectTweetsItems);

  return {
    isLoading,
    error,
    items,
  };
};
