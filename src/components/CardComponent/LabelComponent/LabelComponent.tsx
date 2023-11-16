import React from 'react';
import { Chip } from '@material-ui/core';
import { LabelType } from '../../KanbanComponent/KanbanComponent';

export const Labels = (labels: LabelType[]) => (
  <>
    {labels.map((item: LabelType, i: number) => (
      <Chip label={item.name} key={i} color="primary" />
    ))}
  </>
);
