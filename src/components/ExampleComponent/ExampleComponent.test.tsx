import React from 'react';
import { ExampleComponent } from './ExampleComponent';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import { setupRequestMockHandlers, renderInTestApp } from '@backstage/test-utils';

describe('ExampleComponent', () => {
  it('renders example component', async () => {
    await renderInTestApp(<ExampleComponent />);
    expect(screen.getByText('Welcome to tamu-fall-2023-frontend!')).toBeInTheDocument();
  });
});
