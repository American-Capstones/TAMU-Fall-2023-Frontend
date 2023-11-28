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
  currentAuthor,
  setCurrentAuthor,
}: {
  id: string;
  currentDescription: string | undefined;
  setCurrentDescription: React.Dispatch<React.SetStateAction<string | undefined>>;
  currentAuthor: string | undefined;
  setCurrentAuthor: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const config = useApi(configApiRef);
  const [description, setDescription] = useState<string>(currentDescription!);
  const [author, setAuthor] = useState<string>(currentAuthor!);

  const ghecAuthApi = useApi(githubAuthApiRef);
  const handleChange = async (e: React.ChangeEvent<{ value: unknown }>) => {
    setDescription(e.target.value as string);
  };

  const handleClickAway = async () => {
    if (currentDescription !== description) {
      const backstageUserIdentity = await ghecAuthApi.getProfile();

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
            description_updated_by: backstageUserIdentity?.displayName,
          }),
        },
      ).then((response) => {
        setCurrentDescription(description);
        setCurrentAuthor(backstageUserIdentity?.displayName);
        console.log('RESPONSE', response);
        console.log({
          pull_request_id: id,
          description: description,
          description_updated_by: backstageUserIdentity?.displayName,
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
      <Typography>Last updated by {currentAuthor}</Typography>
    </>
  );
};
