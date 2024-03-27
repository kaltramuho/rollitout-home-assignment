import axios from 'axios';

import { Contributor, Repository, UserLocation } from '../types/githubApi';

export const BASE_URL = 'https://api.github.com';

export const fetchContributors = async (endpoint: string): Promise<Contributor[]> => {
  const response = await axios.get<Contributor[]>(endpoint);
  return response.data;
};

export const fetchUserRepos = async (endpoint: string): Promise<Repository[]> => {
  const response = await axios.get<Repository[]>(endpoint);
  return response.data;
};

export const fetchUserLocation = async (user: string): Promise<UserLocation> => {
  const response = await axios.get<UserLocation>(`${BASE_URL}/users/${user}`);
  return response.data;
};
