import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExampleFetchComponent } from './ExampleFetchComponent';

describe('ExampleFetchComponent', () => {
  it('renders user table', async () => {
    render(<ExampleFetchComponent />);

    // Wait for the table to render
    const table = await screen.findByRole('table');
    const nationality = screen.getAllByText('GB');
    // Assert that the table contains the expected user data
    expect(table).toBeInTheDocument();
    expect(screen.getByAltText('Carolyn')).toBeInTheDocument();
    expect(nationality[0]).toBeInTheDocument();
  });
});
