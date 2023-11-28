import React, { useState } from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';
import { useApi, configApiRef, githubAuthApiRef } from '@backstage/core-plugin-api';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      margin: theme.spacing(3),
    },
  },
  item: {
    margin: theme.spacing(0.5),
  },
}));

export type FormType = {
  ghUsername: string | undefined;
  repositoryName: string;
};

export const RepoFormComponent = () => {
  const initialFormValues: FormType = {
    ghUsername: '',
    repositoryName: '',
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formVisible, setFormVisible] = useState(false);
  const classes = useStyles();

  const config = useApi(configApiRef);
  const ghecAuthApi = useApi(githubAuthApiRef);

  const handleClick = () => {
    console.log('handle click');
    setFormVisible((prevFormVisible) => !prevFormVisible);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    // post
    if (formValues.repositoryName !== '') {
      const backstageUserIdentity = await ghecAuthApi.getProfile();
      formValues.ghUsername = backstageUserIdentity?.displayName;

      await fetch(
        `${config.getString('pr-tracker-backend.baseUrl')}/api/pr-tracker-backend/add-user-repo`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: formValues.ghUsername,
            repository: formValues.repositoryName,
          }),
        },
      ).then((response) => console.log(response));
    }
    setFormValues(initialFormValues);
    setFormVisible(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <>
      <Button variant="contained" onClick={handleClick} className={classes.item}>
        Add a Repository
      </Button>

      {!formVisible ? null : (
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            name="repositoryName"
            variant="outlined"
            label="Repository Name"
            value={formValues.repositoryName}
            onChange={handleInputChange}
            className={classes.item}
          />
          <Button variant="contained" type="submit" className={classes.item}>
            Submit Info
          </Button>
        </form>
      )}
    </>
  );
};
