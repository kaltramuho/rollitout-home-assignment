export interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  contributions: number;
}

export interface UserLocation {
  location?: string;
}

export interface Repository {
  id: number;
  name: string;
  stargazers_count: number;
  fork: boolean;
  updated_at: string; // Date in ISO format
}
