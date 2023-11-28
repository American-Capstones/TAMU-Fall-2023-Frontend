import React from 'react';
import { Box, Card, CardContent, Chip, Divider, Typography, makeStyles } from '@material-ui/core';
import { Labels } from './LabelComponent/LabelComponent';
import { PRType } from '../KanbanComponent/KanbanTypes';

interface CardComponentProps {
  data: PRType;
  onQuery: React.Dispatch<React.SetStateAction<PRType | undefined>>;
  onSideDrawOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles((theme) => ({
  typography: {
    wordWrap: 'break-word',
    width: '100%',
  },
  content: {
    '& > *': {
      margin: '8px 0px',
    },
  },
}));

export const CardComponent = ({ data, onQuery, onSideDrawOpen }: CardComponentProps) => {
  const classes = useStyles();
  const handleClick = () => {
    onQuery(data);
    onSideDrawOpen(true);
  };

  return (
    <div style={{ paddingBottom: '10px', cursor: 'pointer' }} onClick={handleClick}>
      <Card>
        <CardContent className={classes.content}>
          <Box>
            <Chip label={`${data.stateDuration} days`} color="primary" />
            <Chip label={`${data.numApprovals} approvers`} color="primary" />
          </Box>
          <Typography className={classes.typography} variant="h5">
            {data.title}
          </Typography>
          <Box>
            <Labels labels={data?.labels.nodes} />
          </Box>
          <Divider />
          <Typography className={classes.typography} variant="body1">{`${data.body?.substring(
            0,
            120,
          )}...`}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
