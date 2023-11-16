import React from 'react';
import {
  Container,
  Grid,
  Box,
  Divider,
  Typography,
  List,
  ListItemText,
  ListItem,
  Card,
  Button,
  makeStyles,
} from '@material-ui/core';
import { RepoFormComponent } from './RepoFormComponent/RepoFormComponent';

const useStyles = makeStyles({
  button: {
    textTransform: 'none',
  },
});

export const KanbanTeams = ({
  repositoryNames,
  username,
  setUserRepoView,
}: {
  repositoryNames: String[] | undefined;
  username: string | undefined;
  setUserRepoView: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const classes = useStyles();
  const handleRepoClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.id);
    setUserRepoView(parseInt(e.currentTarget.id));
  };

  console.log('REPO NAMES kanban teams', repositoryNames);

  return (
    <>
      <Box>
        <Typography variant="h5">Repositories</Typography>
      </Box>
      <RepoFormComponent username={username} />
      <List disablePadding>
        {repositoryNames?.map((repoName: String, i: number) => (
          <ListItem alignItems="flex-start" disableGutters>
            <ListItemText
              primary={
                <Card>
                  <Button
                    className={classes.button}
                    value="repository-name"
                    onClick={handleRepoClick}
                    id={i.toString()}
                  >
                    {repoName}
                  </Button>
                </Card>
              }
            />
          </ListItem>
        ))}
      </List>
      {repositoryNames &&
        repositoryNames.map((repoName) => {
          <div>{repoName}</div>;
        })}
    </>
  );
};

export const KanbanTeamsComponent = ({
  userRepoNames,
  setUserRepoView,
  username,
}: {
  userRepoNames: String[] | undefined;
  setUserRepoView: React.Dispatch<React.SetStateAction<number>>;
  username: string | undefined;
}) => {
  return (
    <Grid item xs={2}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          height: '100%',
          width: 'inherit',
        }}
      >
        <Container disableGutters>
          <Box mr={2}>
            <KanbanTeams
              repositoryNames={userRepoNames}
              username={username}
              setUserRepoView={setUserRepoView}
            />
          </Box>
        </Container>
        <Divider orientation="vertical" flexItem />
      </Box>
    </Grid>
  );
};
