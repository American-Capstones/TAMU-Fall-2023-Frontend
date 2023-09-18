import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { tamuFall2023FrontendPlugin, TamuFall2023FrontendPage } from '../src/plugin';

createDevApp()
  .registerPlugin(tamuFall2023FrontendPlugin)
  .addPage({
    element: <TamuFall2023FrontendPage />,
    title: 'Root Page',
    path: '/tamu-fall-2023-frontend',
  })
  .render();
