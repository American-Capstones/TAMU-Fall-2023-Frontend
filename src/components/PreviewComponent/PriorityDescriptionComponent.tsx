import React, { useState } from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  makeStyles,
  TextField,
  ClickAwayListener,
  Typography,
} from '@material-ui/core';
import { configApiRef, githubAuthApiRef, useApi } from '@backstage/core-plugin-api';

export const PriorityDescriptionComponent = ({
  id,
  currentDescription,
  setCurrentDescription,
}: {
  id: string;
  currentDescription: string | undefined;
  setCurrentDescription: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const config = useApi(configApiRef);
  const [description, setDescription] = useState<string>(currentDescription!);

  const handleChange = async (e: React.ChangeEvent<{ value: unknown }>) => {
    setDescription(e.target.value as string);
  };

  const handleClickAway = async () => {
    if (currentDescription !== description) {
      await fetch(
        `${config.getString(
          'pr-tracker-backend.baseUrl',
        )}/api/pr-tracker-backend/set-pr-description`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            pull_request_id: id,
            description: description,
          }),
        },
      ).then((response) => {
        setCurrentDescription(description);
        console.log('RESPONSE', response);
        console.log({
          pull_request_id: id,
          description: description,
        });
      });
    }
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          variant="outlined"
          label="Description"
          defaultValue={currentDescription}
          onChange={handleChange}
        />
      </ClickAwayListener>
    </>
  );
};
