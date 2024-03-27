import { useRouter } from 'next/router';
import React from 'react';
import useSWRInfinite from 'swr/infinite';
import InfiniteScroll from 'react-infinite-scroll-component';

import RepositoryItem from '../../app/components/RepositoryItem';

import { Repository } from '../../app/types/githubApi';
import { BASE_URL, fetchUserRepos } from '../../app/services/githubApi';

const PAGE_SIZE = 25;

const RepositoriesPage: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;

  const { data, size, setSize } = useSWRInfinite<Repository[]>((pageIndex: number, previousPageData: Repository[] | null) => {
    if (previousPageData && !previousPageData.length) return null;
    return `${BASE_URL}/users/${username}/repos?page=${pageIndex + 1}&per_page=${PAGE_SIZE}&sort=updated`;
  }, fetchUserRepos, { initialSize: 1, revalidateFirstPage : false });

  const repos = data ? data.flat() : [];
  const isReachingEnd = repos && repos.length < size * PAGE_SIZE;

  return (
    <div className="bg-white shadow rounded-lg p-6 mx-auto my-8 max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{username}'s Repositories</h1>
      <InfiniteScroll
        dataLength={repos.length}
        next={() => setSize(size => size + 1)}
        hasMore={!isReachingEnd}
        loader={<p>Loading...</p>}
      >
        {repos.map((repo: Repository) => <RepositoryItem key={repo.id} repo={repo} />)}
      </InfiniteScroll>
    </div>
  );
};

export default RepositoriesPage;
