export interface ITweetItem {
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
  id: string;
}
export interface TweetsWithIsFollowing extends ITweetItem {
  isFollowing: boolean;
}
