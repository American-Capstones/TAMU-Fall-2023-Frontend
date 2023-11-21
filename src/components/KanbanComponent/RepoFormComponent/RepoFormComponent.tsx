import React, { useState } from 'react';
import { Button, Grid, TextField, makeStyles } from '@material-ui/core';
import { useApi, configApiRef } from '@backstage/core-plugin-api';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      margin: theme.spacing(3),
    },
  },
}));

export const RepoFormComponent = ({ username }: { username: string | undefined }) => {
  const initialFormValues = {
    ghUsername: username,
    repositoryName: '',
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formVisible, setFormVisible] = useState(false);
  const classes = useStyles();

  const config = useApi(configApiRef);

  const handleClick = () => {
    console.log('handle click');
    setFormVisible((prevFormVisible) => !prevFormVisible);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    // post
    if (formValues.repositoryName !== '') {
      await fetch(`${config.getString('backend.baseUrl')}/api/pr-tracker-backend/add-user-repo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: formValues.ghUsername,
          repository: formValues.repositoryName,
        }),
      }).then((response) => console.log(response));
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
      <Button variant="contained" onClick={handleClick}>
        Add a Repository
      </Button>

      {!formVisible ? null : (
        <Grid container direction="column" spacing={3}>
          <Grid item xs={12}>
            <form className={classes.root} onSubmit={handleSubmit}>
              <TextField
                name="repositoryName"
                variant="outlined"
                label="Repository Name"
                value={formValues.repositoryName}
                onChange={handleInputChange}
              />
              <Button variant="contained" type="submit">
                Submit Info
              </Button>
            </form>
          </Grid>
        </Grid>
      )}
    </>
  );
};
