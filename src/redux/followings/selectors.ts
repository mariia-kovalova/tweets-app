import { RootState } from '../store';

export const selectFollowingsIds = (state: RootState) => state.followings.ids;
