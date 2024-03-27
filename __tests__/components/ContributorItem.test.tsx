import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContributorItem from '../../app/components/ContributorItem';

describe('ContributorItem', () => {
  it('renders correctly', () => {
    const mockContributor = {
      id: 1,
      login: 'johnDoe',
      avatar_url: 'http://example.com/avatar.jpg',
      contributions: 100,
    };

    render(<ContributorItem contributor={mockContributor} />);

    expect(screen.getByAltText('johnDoe')).toHaveAttribute('src', 'http://example.com/avatar.jpg');
    expect(screen.getByText('@johnDoe')).toBeInTheDocument();
    expect(screen.getByText('100 commits')).toBeInTheDocument();
    expect(screen.getByText('VIEW REPOSITORIES')).toHaveAttribute('href', '/contributors/johnDoe');
  });
});
