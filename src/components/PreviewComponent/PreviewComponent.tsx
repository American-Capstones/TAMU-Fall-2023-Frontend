import {
  Drawer,
  Typography,
  Box,
  Chip,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { CommentType, LabelType, PRType, ReviewType } from '../KanbanComponent/KanbanTypes';
import { PriorityDialogComponent } from './PriorityDialogComponent';
import { PrioritySelectComponent } from './PrioritySelectComponent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  typography: {
    wordWrap: 'break-word',
    width: '100%',
  },
  accordion: {
    boxShadow: 'none',
    '&::before': {
      backgroundColor: 'white',
    },
    '&.Mui-expanded': {
      margin: '0',
    },
  },
  accordionSummary: {
    '&.Mui-expanded': {
      minHeight: '0px',
      margin: '0',
    },
    minHeight: '0px',
    margin: '0',
    padding: '0 32px 0 0',
  },
  accordionDetails: {
    padding: '0px 16px 16px',
  },
});

export const PreviewComponent = ({
  query,
  sideDrawOpen,
  onSideDrawOpen,
}: {
  query: PRType | undefined;
  sideDrawOpen: boolean;
  onSideDrawOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const classes = useStyles();
  const [currentPriority, setCurrentPriority] = useState<string | undefined>(query?.priority);

  // update priority client-side, reflects when drawer re-toggled
  useEffect(() => {
    setCurrentPriority(query?.priority);
  }, [query?.priority]);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      !(
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      )
    ) {
      onSideDrawOpen(open);
    }
  };

  return query ? (
    <Drawer
      anchor="right"
      open={sideDrawOpen}
      onClose={toggleDrawer(false)}
      BackdropProps={{ invisible: true }}
    >
      <Box width={350} m={2} mt={8} alignItems="center" justifyContent="center">
        <Box mt={2}>
          <Typography variant="h4" className={classes.typography}>
            {query.title}
          </Typography>

          <Accordion classes={{ root: classes.accordion }}>
            <AccordionSummary
              classes={{ content: classes.accordionSummary, root: classes.accordionSummary }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant="h6">Description</Typography>
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.accordionDetails }}>
              <Typography className={classes.typography}>{query.body}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box mt={2}>
          <Typography variant="h6">Labels</Typography>
          {query?.labels.nodes.map((item: LabelType, index: number) => (
            <Chip key={index} label={item.name} />
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

        <Box sx={{ minWidth: 120 }}>
          <PrioritySelectComponent
            id={query.id}
            currentPriority={currentPriority}
            setCurrentPriority={setCurrentPriority}
          />
          <PriorityDialogComponent />
        </Box>
      </Box>
    </Drawer>
  ) : (
    <></>
  );
};
