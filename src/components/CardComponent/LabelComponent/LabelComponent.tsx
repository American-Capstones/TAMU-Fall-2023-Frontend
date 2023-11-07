import React from 'react';
import { Chip } from '@material-ui/core';

export const Labels = (labels: Array<string>) => (
  <>
    {labels.map((item: any, i: number) => (
      <Chip label={item} key={i} color="primary" />
    ))}
  </>
);
