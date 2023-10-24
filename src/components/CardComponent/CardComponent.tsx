import React from 'react';
import { Typography, Chip } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';

export const CardComponent = ({ data, key, onQuery }: { data: any; key: any; onQuery: any }) => {
  function handleClick() {
    console.log(data);
    onQuery(data);
  }

  return (
    <div style={{ paddingBottom: '10px', cursor: 'pointer' }} onClick={handleClick}>
      <InfoCard
        title={data.title}
        subheader={
          <>
            <Chip label="Chip Filled" color="primary" />
            <Chip label="Chip Filled" color="primary" />
          </>
        }
      >
        <Typography variant="body1">{data.description.substring(0, 120) + '...'}</Typography>
      </InfoCard>
    </div>
  );
};
