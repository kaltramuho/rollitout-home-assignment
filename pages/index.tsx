import React from 'react';
import useSWRInfinite from 'swr/infinite';
import InfiniteScroll from 'react-infinite-scroll-component';

import ContributorItem from '../app/components/ContributorItem';

import { Contributor } from '../app/types/githubApi';
import { BASE_URL, fetchContributors } from '../app/services/githubApi';

const PAGE_SIZE = 25;

const ContributorsPage: React.FC = () => {
  const { data, size, setSize } = useSWRInfinite<Contributor[]>((pageIndex: number, previousPageData: Contributor[] | null) => {
    if (previousPageData && !previousPageData.length) return null; // End of the list
    return `${BASE_URL}/repos/angular/angular/contributors?page=${pageIndex + 1}&per_page=${PAGE_SIZE}`;
  }, fetchContributors, { initialSize: 1, revalidateFirstPage : false });

  const contributors = data ? data.flat() : [];
  const isReachingEnd = contributors && contributors.length < size * PAGE_SIZE;

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-semibold text-black pb-2 mb-6 border-b-2 border-neutral-300 px-4 lg:px-0">Top Contributors</h1>
      <InfiniteScroll
        dataLength={contributors.length}
        next={() => setSize(size => size + 1)}
        hasMore={!isReachingEnd}
        loader={<h4>Loading...</h4>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contributors.map((contributor: Contributor) => <ContributorItem key={contributor.id} contributor={contributor} />)}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ContributorsPage;
