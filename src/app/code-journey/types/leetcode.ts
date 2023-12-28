export interface LeetcodeUser {
  username: string;
  profile: Profile;
  badges: Badge[];
}

export interface Profile {
  realName: string;
  userAvatar: string;
}

export interface Badge {
  id: string;
  displayName: string;
  icon: string;
  category: string;
}
