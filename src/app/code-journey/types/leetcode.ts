export interface LeetcodeUser {
  username: string;
  profile: Profile;
  submitStatsGlobal: SubmitStatsGlobal;
  badges: Badge[];
}

export interface Profile {
  realName: string;
  userAvatar: string;
}

export interface SubmitStatsGlobal {
  acSubmissionNum: AcSubmissionNum[];
}

export interface AcSubmissionNum {
  difficulty: string;
  count: number;
}

export interface Badge {
  id: string;
  displayName: string;
  icon: string;
  category: string;
}
