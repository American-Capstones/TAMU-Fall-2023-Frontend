import React from 'react';
import { Typography, Chip } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';

export const CardComponent = ({
  data,
  key,
  onQuery,
  onState,
}: {
  data: any;
  key: any;
  onQuery: any;
  onState: any;
}) => {
  function handleClick() {
    console.log(data);
    onQuery(data);
    onState(true);
  }

  function extractLabels(labels: Array<string>) {
    return (
      <>
        {labels.map((item: any) => (
          <Chip label={item} color="primary" />
        ))}
      </>
    );
  }

  return (
    <div style={{ paddingBottom: '10px', cursor: 'pointer' }} onClick={handleClick}>
      <InfoCard title={data.title} subheader={<>{extractLabels(data.labels)}</>}>
        <Typography variant="body1">{data.body.substring(0, 120) + '...'}</Typography>
      </InfoCard>
    </div>
  );
};
