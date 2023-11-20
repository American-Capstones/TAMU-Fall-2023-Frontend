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
  ButtonGroup,
} from '@material-ui/core';
import { RepoFormComponent } from './RepoFormComponent/RepoFormComponent';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import { configApiRef, githubAuthApiRef, useApi } from '@backstage/core-plugin-api';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0',
  },
  button: {
    padding: '0px',
    width: 'inherit',
  },
  buttonLeft: {
    padding: '0',
  },
  buttonRight: {
    width: 'max-content',
    textTransform: 'none',
  },
  toggleButtonGroup: {
    width: '100%',
  },
  buttonGroup: {},
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

  const config = useApi(configApiRef);
  const ghecAuthApi = useApi(githubAuthApiRef);

  const handleRepoClear = async (e: React.MouseEvent<HTMLElement>, repoName: string) => {
    console.log('CLEAR', repoName);

    const backstageUserIdentity = await ghecAuthApi.getProfile();

    await fetch(`${config.getString('backend.baseUrl')}/api/pr-tracker-backend/delete-user-repo`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: backstageUserIdentity?.displayName,
        repository: repoName,
      }),
    }).then((response) => {
      console.log('RESPONSE', response);
      window.location.reload();
    });
  };

  return (
    <>
      <Box>
        <Typography variant="h5">Repositories</Typography>
      </Box>
      <RepoFormComponent username={username} />

      <ToggleButtonGroup
        className={classes.toggleButtonGroup}
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleRepoClick}
      >
        {repositoryNames?.map((repoName: string, i: number) => (
          <ToggleButton className={classes.button} key={i} value={`${i}`}>
            <Typography className={classes.buttonRight}>{repoName}</Typography>
            <Button
              onClick={(e) => {
                handleRepoClear(e, repoName);
              }}
              className={classes.buttonLeft}
            >
              <CloseIcon />
            </Button>
            {/* <Button className={classes.buttonLeft}>{repoName}</Button> */}
            {/* <ButtonGroup variant="text" className={classes.buttonGroup}>
            </ButtonGroup> */}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
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
