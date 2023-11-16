import React, { useState } from 'react';
import { Button, Grid, TextField, makeStyles } from '@material-ui/core';

const initialFormValues = {
  ghUsername: '',
  repositoryName: '',
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      margin: theme.spacing(3),
    },
  },
}));

export const RepoFormComponent = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formVisible, setFormVisible] = useState(false);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email_id: formValues.ghUsername,
      repository: formValues.repositoryName,
    }),
  };

  const classes = useStyles();

  const handleClick = () => {
    console.log('handle click');
    setFormVisible(formVisible ? false : true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    e.preventDefault();
    // post
    await fetch('http://localhost:7007/api/pr-tracker-backend/add-user-repo', requestOptions).then(
      (response) => console.log(response),
    );
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
                name="ghUsername"
                variant="outlined"
                label="Github Username"
                value={formValues.ghUsername}
                onChange={handleInputChange}
              />
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
