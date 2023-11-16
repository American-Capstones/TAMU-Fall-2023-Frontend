import React from 'react';
import { Typography } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';
import { Labels } from './LabelComponent/LabelComponent';
import { PRType } from '../KanbanComponent/KanbanComponent';

interface CardComponentProps {
  data: PRType;
  key: string | number;
  onQuery: React.Dispatch<React.SetStateAction<PRType | undefined>>;
  onSideDrawOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardComponent = ({ data, onQuery, onSideDrawOpen }: CardComponentProps) => {
  const handleClick = () => {
    console.log(data);
    onQuery(data);
    onSideDrawOpen(true);
  };

  // console.log('data', data);

  return (
    <div style={{ paddingBottom: '10px', cursor: 'pointer' }} onClick={handleClick}>
      <InfoCard title={data.title} subheader={<>{Labels(data?.labels.nodes)}</>}>
        <Typography variant="body1">{`${data.body?.substring(0, 120)}...`}</Typography>
      </InfoCard>
    </div>
  );
};
