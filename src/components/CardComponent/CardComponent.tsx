import React from 'react';
import { Typography, Chip } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';
import { QueryType } from '../PreviewComponent/PreviewComponent';
import { Labels } from './LabelComponent/LabelComponent';

interface CardComponentProps {
  data: any;
  key: string | number;
  onQuery: React.Dispatch<React.SetStateAction<QueryType | undefined>>;
  onState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardComponent = ({ data, key, onQuery, onState }: CardComponentProps) => {
  const handleClick = () => {
    console.log(data);
    onQuery(data);
    onState(true);
  };

  return (
    <div style={{ paddingBottom: '10px', cursor: 'pointer' }} onClick={handleClick}>
      <InfoCard title={data.title} subheader={<>{Labels(data.labels)}</>}>
        <Typography variant="body1">{`${data.body.substring(0, 120)}...`}</Typography>
      </InfoCard>
    </div>
  );
};
