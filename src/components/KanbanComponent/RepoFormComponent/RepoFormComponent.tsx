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

  const classes = useStyles();

  const handleClick = () => {
    console.log('handle click');
    setFormVisible(formVisible ? false : true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    e.preventDefault();
    // post
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
