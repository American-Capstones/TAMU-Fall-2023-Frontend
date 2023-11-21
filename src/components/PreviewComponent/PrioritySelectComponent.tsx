import React from 'react';
import { InputLabel, Select, MenuItem, FormControl, makeStyles } from '@material-ui/core';
import {
  NotInterested,
  PriorityHigh,
  TrendingDown,
  TrendingFlat,
  TrendingUp,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  selectMenu: {
    display: 'flex',
    alignItems: 'center',
    height: '24px',
    paddingLeft: '4px',
  },
}));

export const PrioritySelectComponent = () => {
  const classes = useStyles();
  const [priority, setPriority] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPriority(event.target.value as string);

    // post to db
  };

  return (
    <FormControl fullWidth>
      <InputLabel shrink>Priority</InputLabel>
      <Select
        value={priority}
        label="Priority"
        onChange={handleChange}
        classes={{ select: classes.selectMenu }}
      >
        <MenuItem value={'Blocker'}>
          <NotInterested />
          &nbsp; Blocker
        </MenuItem>
        <MenuItem value={'Critical'}>
          <PriorityHigh />
          &nbsp; Critical
        </MenuItem>
        <MenuItem value={'Major'}>
          <TrendingUp />
          &nbsp; Major
        </MenuItem>
        <MenuItem value={'Minor'}>
          <TrendingFlat />
          &nbsp; Minor
        </MenuItem>
        <MenuItem value={'Trivial'}>
          <TrendingDown />
          &nbsp; Trivial
        </MenuItem>
        <MenuItem value={'None'}>&nbsp; None</MenuItem>
      </Select>
    </FormControl>
  );
};
