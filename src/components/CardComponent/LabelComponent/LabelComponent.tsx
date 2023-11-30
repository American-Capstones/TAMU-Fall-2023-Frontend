import React from 'react';
import { Chip, makeStyles } from '@material-ui/core';
import { LabelType } from '../../KanbanComponent/KanbanTypes';

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    height: '24px',
  },
  chip: {
    fontSize: '12px',
    paddingLeft: '12px',
    paddingRight: '12px',
  },
}));

export const Labels = ({ labels }: { labels: LabelType[] }) => {
  const classes = useStyles();

  return (
    <>
      {labels.map((item: LabelType, i: number) => (
        <Chip label={item.name} key={i} classes={{ label: classes.chip, root: classes.chipRoot }} />
      ))}
    </>
  );
};
