import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import RepositoryItem from '../../app/components/RepositoryItem';

describe('RepositoryItem', () => {
  it('renders repository information correctly', () => {
    const mockRepository = {
      id: 1,
      name: 'ExampleRepo',
      description: 'An example repository',
      stargazers_count: 150,
      fork: true,
      updated_at: 'test time',
    };

    render(<RepositoryItem repo={mockRepository} />);

    expect(screen.getByText('ExampleRepo')).toBeInTheDocument();
    expect(screen.getByText('150 stars')).toBeInTheDocument();
  });
});
