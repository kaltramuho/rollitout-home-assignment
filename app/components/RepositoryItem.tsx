import React from 'react';

import { Repository } from '../types/githubApi';
import { formatDateString } from '../services/utils';

interface RepositoryItemProps {
  repo: Repository;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repo }) => {
  return (
    <div className="py-4 flex justify-between items-center">
      <div>
        <p className="font-semibold text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer">
          {repo.name}
        </p>
        <p className="text-sm text-gray-500">{repo.fork && 'Forked'}</p>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.903 0l1.11 3.423a1.17 1.17 0 001.11.804h3.61c.946 0 1.34 1.204.64 1.77l-2.92 2.118a1.17 1.17 0 00-.42 1.297l1.11 3.423c.3.921-.755 1.687-1.54 1.168l-2.92-2.118a1.17 1.17 0 00-1.36 0l-2.92 2.118c-.784.519-1.84-.247-1.54-1.168l1.11-3.423a1.17 1.17 0 00-.42-1.297l-2.92-2.118c-.7-.566-.306-1.77.64-1.77h3.61a1.17 1.17 0 001.11-.804l1.11-3.423z" />
          </svg>
          <span className="font-medium text-gray-700">{repo.stargazers_count} stars</span>
        </div>
        <p className="text-sm text-gray-500">{formatDateString(repo.updated_at)}</p>
      </div>
    </div>
  );
};

export default RepositoryItem;
