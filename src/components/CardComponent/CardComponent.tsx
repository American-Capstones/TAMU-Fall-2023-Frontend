import React from 'react';
import { Card, CardContent, Chip, Divider, Typography } from '@material-ui/core';
import { Labels } from './LabelComponent/LabelComponent';
import { PRType } from '../KanbanComponent/KanbanTypes';

interface CardComponentProps {
  data: PRType;
  onQuery: React.Dispatch<React.SetStateAction<PRType | undefined>>;
  onSideDrawOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardComponent = ({ data, onQuery, onSideDrawOpen }: CardComponentProps) => {
  const handleClick = () => {
    console.log(data);
    onQuery(data);
    onSideDrawOpen(true);
  };

  return (
    <div style={{ paddingBottom: '10px', cursor: 'pointer' }} onClick={handleClick}>
      <Card>
        <CardContent>
          <Chip label={`${data.stateDuration} days`} color="primary" />
          <Chip label={`${data.numApprovals} approvers`} color="primary" />
          <Typography variant="h5">{data.title}</Typography>
          <Labels labels={data?.labels.nodes} />
          <Divider />
          <Typography noWrap={true} variant="body1">{`${data.body?.substring(
            0,
            120,
          )}...`}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
