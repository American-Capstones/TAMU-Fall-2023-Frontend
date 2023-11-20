import React from 'react';
import { Grid, Typography, Divider, Box, Chip } from '@material-ui/core';

export const KanbanColumnHeader = ({
  columnName,
  columnLength,
}: {
  columnName: string;
  columnLength: number;
}) => {
  return (
    <Box mb={2} m={4}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography variant="h6">{columnName}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Chip label={columnLength} />
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
};
