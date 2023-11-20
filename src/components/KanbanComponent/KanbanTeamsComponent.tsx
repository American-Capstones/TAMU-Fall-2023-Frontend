import React, { useState } from 'react';
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
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

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
  repositoryNames: string[] | undefined;
  username: string | undefined;
  setUserRepoView: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const classes = useStyles();
  const [view, setView] = useState('0');

  const handleRepoClick = (e: React.MouseEvent<HTMLElement>, nextView: string) => {
    console.log('handlerepoclick', nextView, e.currentTarget);

    if (typeof nextView !== 'undefined' && nextView != null) {
      setView(nextView);
      setUserRepoView(parseInt(nextView));
    }
  };

  return (
    <>
      <Box>
        <Typography variant="h5">Repositories</Typography>
      </Box>
      <RepoFormComponent username={username} />

      <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleRepoClick}>
        {repositoryNames?.map((repoName: string, i: number) => (
          <ToggleButton className={classes.button} key={i} value={`${i}`}>
            <Typography>{repoName}</Typography>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {/* <List disablePadding>
        {repositoryNames?.map((repoName: string, i: number) => (
          <ListItem key={i} alignItems="flex-start" disableGutters>
            <ListItemText
              primary={
                <Card>
                  <Button
                    className={classes.button}
                    value="repository-name"
                    onClick={handleRepoClick}
                    id={`${i}`}
                  >
                    {repoName}
                  </Button>
                </Card>
              }
            />
          </ListItem>
        ))}
      </List> */}
    </>
  );
};

export const KanbanTeamsComponent = ({
  userRepoNames,
  setUserRepoView,
  username,
}: {
  userRepoNames: string[] | undefined;
  setUserRepoView: React.Dispatch<React.SetStateAction<number>>;
  username: string | undefined;
}) => {
  console.log('KANBAN TEAMS USERNAME', username);

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
