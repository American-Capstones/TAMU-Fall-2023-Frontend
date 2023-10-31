import React from 'react';
import { KanbanComponent } from './KanbanComponent';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import { setupRequestMockHandlers, renderInTestApp } from '@backstage/test-utils';

describe('ExampleComponent', () => {
  const server = setupServer();
  // Enable sane handlers for network requests
  beforeAll(() => {
    setupRequestMockHandlers(server);
  });

  // setup mock response
  beforeEach(() => {
    server.use(rest.get('/*', (_, res, ctx) => res(ctx.status(200), ctx.json({}))));
  });

  it('renders example component', async () => {
    await renderInTestApp(<KanbanComponent />);
    expect(screen.getByText('Welcome to tamu-fall-2023-frontend!')).toBeInTheDocument();
  });
});
