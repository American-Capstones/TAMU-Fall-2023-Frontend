import React from 'react';
import { Card, CardContent, Chip, Divider, Typography, makeStyles } from '@material-ui/core';
import { Labels } from './LabelComponent/LabelComponent';
import { PRType } from '../KanbanComponent/KanbanTypes';

interface CardComponentProps {
  data: PRType;
  onQuery: React.Dispatch<React.SetStateAction<PRType | undefined>>;
  onSideDrawOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles({
  typography: {
    wordWrap: 'break-word',
  },
});

export const CardComponent = ({ data, onQuery, onSideDrawOpen }: CardComponentProps) => {
  const classes = useStyles();
  const handleClick = () => {
    onQuery(data);
    onSideDrawOpen(true);
  };

  return (
    <div style={{ paddingBottom: '10px', cursor: 'pointer' }} onClick={handleClick}>
      <Card>
        <CardContent>
          <Chip label={`${data.stateDuration} days`} color="primary" />
          <Chip label={`${data.numApprovals} approvers`} color="primary" />
          <Typography className={classes.typography} variant="h5">
            {data.title}
          </Typography>
          <Labels labels={data?.labels.nodes} />
          <Divider />
          <Typography className={classes.typography} variant="body1">{`${data.body?.substring(
            0,
            120,
          )}...`}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
