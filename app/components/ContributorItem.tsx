import Link from 'next/link';
import React from 'react';

import { Contributor, UserLocation } from '../types/githubApi';
import { fetchUserLocation } from '../services/githubApi';

interface ContributorItemProps {
  contributor: Contributor;
}

const ContributorItem: React.FC<ContributorItemProps> = ({ contributor }) => {
  return (
    <div className="relative bg-white rounded-lg p-8 pb-4 flex flex-col items-start">
      <div className="flex items-end mb-3">
        <img className="w-[72px] h-[72px] border-4 border-blue-200" src={contributor.avatar_url} alt={contributor.login} />
        <span className="text-xs text-neutral-600 ml-[10px]">@{contributor.login}</span>
      </div>
      <h2 className="text-lg font-bold text-black">{contributor.login}</h2>
      <p className="text-sm text-gray-600">{contributor.contributions} commits</p>
      <Link
        className="mt-4 mx-auto border-2 border-blue-500 text-sm text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors"
        href={`/contributors/${contributor.login}`}
        passHref
      >
        VIEW REPOSITORIES
      </Link>
      <button className="absolute top-0 right-0 mt-8 mr-8" onClick={() => openGoogleMaps(contributor)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-6 w-6 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="black" />
          <path d="M12 2v20M2 12h20" />
        </svg>
      </button>
    </div>
  );
};

function openGoogleMaps(user: Contributor) {
  fetchUserLocation(user.login)
    .then((location: UserLocation) => {
      if (!location.location) {
        return;
      }

      const encodedLocation = encodeURIComponent(location.location);
      const url = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
      window.open(url, '_blank');
    });
}

export default ContributorItem;
