import { Drawer, Typography, Box, Container, Chip } from '@material-ui/core';
import React from 'react';

export type QueryType = {
  title: string | null;
  body: string | null;
  assignees: Array<any>;
  requested_reviewers: Array<any>;
  labels: Array<string>;
};

export const PreviewComponent = ({
  query,
  sideDrawOpen,
  onSideDrawOpen,
}: {
  query?: QueryType;
  sideDrawOpen: boolean;
  onSideDrawOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  console.log('OKAY', query);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    console.log(query);
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    onSideDrawOpen(open);
  };

  return query ? (
    <>
      <Drawer
        anchor="right"
        open={sideDrawOpen}
        onClose={toggleDrawer(false)}
        BackdropProps={{ invisible: true }}
      >
        <Box width={350} m={2} mt={8} alignItems="center" justifyContent="center">
          <Box mt={2}>
            <Typography variant="h4">{query.title}</Typography>
            <div>{query.body}</div>
          </Box>

          <Box mt={2}>
            <Typography variant="h6">Assignees</Typography>
            {query.assignees.map((item: any) => (
              <div>{item.login}</div>
            ))}
          </Box>

          <Box mt={2}>
            <Typography variant="h6">Requested Reviewers</Typography>
            {query.requested_reviewers.map((item: any) => (
              <div>{item.login}</div>
            ))}
          </Box>

          <Box mt={2}>
            <Typography variant="h6">Labels</Typography>
            {query.labels.map((item: any) => (
              <Chip label={item} />
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  ) : (
    <></>
  );
};
