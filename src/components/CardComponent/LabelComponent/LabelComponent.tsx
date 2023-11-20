import React from 'react';
import { Chip } from '@material-ui/core';
import { LabelType } from '../../KanbanComponent/KanbanTypes';

export const Labels = ({ labels }: { labels: LabelType[] }) => {
  return (
    <>
      {labels.map((item: LabelType, i: number) => (
        <Chip label={item.name} key={i} />
      ))}
    </>
  );
};
