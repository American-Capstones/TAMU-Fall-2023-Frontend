import {
  Drawer,
  Typography,
  Box,
  Chip,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Button,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { CommentType, LabelType, PRType, ReviewType } from '../KanbanComponent/KanbanTypes';
import { PriorityDialogComponent } from './PriorityDialogComponent';
import { PrioritySelectComponent } from './PrioritySelectComponent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { PriorityDescriptionComponent } from './PriorityDescriptionComponent';

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

  approved: {
    fontWeight: 700,
    textTransform: 'uppercase',
    fontSize: '16px',
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
  const [currentDescription, setCurrentDescription] = useState<string | undefined>(
    query?.description,
  );
  const [currentAuthor, setCurrentAuthor] = useState<string | undefined>(
    query?.description_updated_by,
  );

  // update priority client-side, reflects when drawer re-toggled
  useEffect(() => {
    setCurrentPriority(query?.priority);
  }, [query?.priority]);

  useEffect(() => {
    setCurrentDescription(query?.description);
  }, [query?.description]);

  useEffect(() => {
    setCurrentAuthor(query?.description_updated_by);
  }, [query?.description_updated_by]);

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

  const displayUpdates = (reviews: ReviewType[]) => {
    return (
      <>
        <Typography variant="h6">Last 5 Reviews</Typography>
        {console.log(reviews)}

        {reviews.map((review: ReviewType) => (
          <Box mb={1}>
            {review.state !== 'APPROVED' ? (
              <></>
            ) : (
              <>
                <Typography className={classes.approved}>
                  Approved by {review.author.login}
                </Typography>
              </>
            )}
            {review.body.length != 0 ? (
              <>
                <Typography>{review.body}</Typography>
              </>
            ) : (
              <></>
            )}
            {review.comments.nodes.map((comment: CommentType) => (
              <>
                <Typography>
                  {comment.author.login}: {comment.body}
                </Typography>
              </>
            ))}
          </Box>
        ))}
      </>
    );
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

          <Box mb={2}>
            <Button variant="contained" target="_blank" href={query.url}>
              GH Link
            </Button>
          </Box>

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
          {/* <Typography variant="h6">Reviews</Typography>
          {console.log(query.reviews.nodes)}
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
          ))} */}
          {displayUpdates(query.reviews.nodes)}
        </Box>

        <Box sx={{ minWidth: 120 }} mt={2}>
          <PrioritySelectComponent
            id={query.id}
            currentPriority={currentPriority}
            setCurrentPriority={setCurrentPriority}
          />
          <Box mb={2}>
            <PriorityDialogComponent />
          </Box>
          <Box mb={2}>
            <PriorityDescriptionComponent
              id={query.id}
              currentDescription={currentDescription}
              setCurrentDescription={setCurrentDescription}
              currentAuthor={currentAuthor}
              setCurrentAuthor={setCurrentAuthor}
            />
          </Box>
        </Box>
      </Box>
    </Drawer>
  ) : (
    <></>
  );
};
