import React from 'react';
import { InputLabel, Select, MenuItem, FormControl, makeStyles } from '@material-ui/core';
import {
  NotInterested,
  PriorityHigh,
  TrendingDown,
  TrendingFlat,
  TrendingUp,
} from '@material-ui/icons';
import { configApiRef, useApi } from '@backstage/core-plugin-api';

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

export const PrioritySelectComponent = ({
  id,
  currentPriority,
  setCurrentPriority,
}: {
  id: string;
  currentPriority: string | undefined;
  setCurrentPriority: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const classes = useStyles();
  const [priority, setPriority] = React.useState<string>(currentPriority!);
  const config = useApi(configApiRef);

  // update priority server-side, reflects on reload
  const handleChange = async (e: React.ChangeEvent<{ value: unknown }>) => {
    setPriority(e.target.value as string);

    await fetch(
      `${config.getString('pr-tracker-backend.baseUrl')}/api/pr-tracker-backend/set-pr-priority`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pull_request_id: id,
          priority: e.target.value,
        }),
      },
    ).then((response) => {
      console.log('RESPONSE', response);
      setCurrentPriority(e.target.value as string);
      console.log(id, e.target.value as string);
    });
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
