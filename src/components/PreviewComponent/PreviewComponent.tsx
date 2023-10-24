import { Drawer, Typography, Box, Container } from '@material-ui/core';
import React from 'react';

export type QueryType = {
  title: string | null;
  body: string | null;
  assignees: Array<any>;
  requested_reviewers: Array<any>;
};

export const PreviewComponent = ({
  query,
  state,
  onState,
}: {
  query?: QueryType;
  state: boolean;
  onState: any;
}) => {
  console.log('OKAY', query);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    onState(open);
  };

  return query ? (
    <>
      <Drawer
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
        BackdropProps={{ invisible: true }}
      >
        <Box sx={{ width: 500 }}>
          <Typography variant="h5">{query.title}</Typography>
          <div>{query.body}</div>

          <Typography variant="h6">Assignees</Typography>
          {query.assignees.map((item: any) => (
            <div>{item.login}</div>
          ))}

          <Typography variant="h6">Requested Reviewers</Typography>
          {query.requested_reviewers.map((item: any) => (
            <div>{item.login}</div>
          ))}
        </Box>
      </Drawer>
    </>
  ) : (
    <></>
  );
};
