export interface HackerRankCertificate {
  id: string;
  type: string;
  links: Links;
  attributes: Attributes;
}

export interface Links {
  self: string;
}

export interface Attributes {
  status: string;
  username: string;
  unlock_date?: string;
  waived_off?: boolean;
  certificate: Certificate;
  certificates: string[];
  certificate_image?: string;
  hacker_name: string;
  test_unique_id: string;
  kind: string;
  hacker_name_updated_at: any;
  seen_by_user: any;
  completed_at?: string;
  score?: number;
  alloted_at?: string;
  type: string;
}

export interface Certificate {
  track_slug: string;
  label: string;
  level: string;
  skill_unique_id: string;
  description: string;
}

export interface HackerRankUser {
  id: number;
  username: string;
  name: string;
  avatar: string;
}
