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
  chipRoot: {
    height: '24px',
    marginBottom: '0',
  },
  chip: {
    fontSize: '12px',
    paddingLeft: '12px',
    paddingRight: '12px',
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
            <Chip
              label={`${data.stateDuration} days`}
              color="primary"
              classes={{ label: classes.chip, root: classes.chipRoot }}
            />
            <Chip
              label={`${data.numApprovals} approvers`}
              color="primary"
              classes={{ label: classes.chip, root: classes.chipRoot }}
            />
          </Box>
          <Typography className={classes.typography} variant="h6">
            {data.title}
          </Typography>
          <Box>
            <Labels labels={data?.labels.nodes} />
          </Box>
          <Divider />
          <Typography className={classes.typography} variant="body2">{`${data.body?.substring(
            0,
            120,
          )}...`}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
