import { Drawer, Typography, Box, Chip } from '@material-ui/core';
import React from 'react';
import { CommentType, LabelType, PRType, ReviewType } from '../KanbanComponent/KanbanComponent';

export const PreviewComponent = ({
  query,
  sideDrawOpen,
  onSideDrawOpen,
}: {
  query?: PRType;
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

          {/* <Box mt={2}>
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
          </Box> */}

          <Box mt={2}>
            <Typography variant="h6">Labels</Typography>
            {query?.labels.nodes.map((item: LabelType) => (
              <Chip label={item.name} />
            ))}
          </Box>

          <Box mt={2}>
            <Typography variant="h6">Reviews</Typography>
            {query.reviews.nodes.map((review: ReviewType) => (
              <>
                <div>{`Author: ${review.author.login}`}</div>
                <div>{review.state === 'CHANGES_REQUESTED' ? `Body: ${review.body}` : ''}</div>
                {review.comments.nodes.map((comment: CommentType) => (
                  <>
                    <div>{comment.author.login}</div>
                    <div>{comment.body}</div>
                  </>
                ))}
              </>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  ) : (
    <></>
  );
};
