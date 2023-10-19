import React from 'react';
import { Typography, Chip } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';

export const CardComponent = ({ title, desc }: { title: string; desc: string }) => (
  <InfoCard
    title={title}
    subheader={
      <>
        <Chip label="Chip Filled" color="primary" />
        <Chip label="Chip Filled" color="primary" />
      </>
    }
  >
    <Typography variant="body1">{desc}</Typography>
  </InfoCard>
);
