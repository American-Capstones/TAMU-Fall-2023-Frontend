import React, { useState } from 'react';
import { Container, Grid, Box, Divider, Typography, Button, makeStyles } from '@material-ui/core';
import { RepoFormComponent } from './RepoFormComponent/RepoFormComponent';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import { configApiRef, githubAuthApiRef, useApi } from '@backstage/core-plugin-api';

const useStyles = makeStyles({
  box: {
    margin: '10px 0',
  },
  button: {
    padding: '8px',
    width: 'inherit',
  },
  buttonLeft: {
    padding: '0',
    minWidth: '0',
    color: 'rgba(0, 0, 0, 0.12)',
  },
  buttonRight: {
    width: 'max-content',
    textTransform: 'none',
    paddingLeft: '16px',
    color: 'rgba(0, 0, 0, 0.50)',
  },
  toggleButtonGroup: {
    width: '100%',
  },
  buttonGroup: {},
});

export const KanbanTeams = ({
  repositoryNames,
  setUserRepoView,
  setUserPageView,
}: {
  repositoryNames: string[] | undefined;
  setUserRepoView: React.Dispatch<React.SetStateAction<number>>;
  setUserPageView: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const classes = useStyles();
  const [repoSelect, setRepoSelect] = useState('0');
  const [pageSelect, setPageSelect] = useState('Kanban');

  const handleRepoClick = (e: React.MouseEvent<HTMLElement>, nextView: string) => {
    console.log('handlerepoclick', nextView, e.currentTarget);

    if (typeof nextView !== 'undefined' && nextView != null) {
      setRepoSelect(nextView);
      setUserRepoView(parseInt(nextView));
    }
  };

  const handlePageClick = (e: React.MouseEvent<HTMLElement>, nextView: string) => {
    console.log('handlepageclick', nextView, e.currentTarget);

    if (typeof nextView !== 'undefined' && nextView != null) {
      setPageSelect(nextView);
      setUserPageView(nextView);
    }
  };

  const config = useApi(configApiRef);
  const ghecAuthApi = useApi(githubAuthApiRef);

  const handleRepoClear = async (e: React.MouseEvent<HTMLElement>, repoName: string) => {
    console.log('CLEAR', repoName);

    const backstageUserIdentity = await ghecAuthApi.getProfile();

    await fetch(
      `${config.getString('pr-tracker-backend.baseUrl')}/api/pr-tracker-backend/delete-user-repo`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: backstageUserIdentity?.displayName,
          repository: repoName,
        }),
      },
    ).then((response) => {
      console.log('RESPONSE', response);
      window.location.reload();
    });
  };

  return (
    <>
      <Box className={classes.box}>
        <Typography variant="h5">Page</Typography>
      </Box>
      <Box className={classes.box}>
        <ToggleButtonGroup
          className={classes.toggleButtonGroup}
          value={pageSelect}
          exclusive
          onChange={handlePageClick}
        >
          <ToggleButton className={classes.button} value="Kanban">
            Kanban
          </ToggleButton>
          <ToggleButton className={classes.button} value="Analytics">
            Analytics
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className={classes.box}>
        <Typography variant="h5">Repositories</Typography>
      </Box>

      <Box className={classes.box}>
        {repositoryNames && (
          <ToggleButtonGroup
            className={classes.toggleButtonGroup}
            orientation="vertical"
            value={repoSelect}
            exclusive
            onChange={handleRepoClick}
          >
            {repositoryNames?.map((repoName: string, i: number) => (
              <ToggleButton className={classes.button} key={i} value={`${i}`}>
                <Grid container spacing={1}>
                  <Grid item xs={10}>
                    <Typography className={classes.buttonRight}>{repoName}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      onClick={(e) => {
                        handleRepoClear(e, repoName);
                      }}
                      className={classes.buttonLeft}
                    >
                      <CloseIcon />
                    </Button>
                  </Grid>
                </Grid>
                {/* <Button className={classes.buttonLeft}>{repoName}</Button> */}
                {/* <ButtonGroup variant="text" className={classes.buttonGroup}>
            </ButtonGroup> */}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        )}
      </Box>
      <Box className={classes.box}>
        <RepoFormComponent />
      </Box>
    </>
  );
};

export const KanbanTeamsComponent = ({
  userRepoNames,
  setUserRepoView,
  setUserPageView,
}: {
  userRepoNames: string[] | undefined;
  setUserPageView: React.Dispatch<React.SetStateAction<string>>;
  setUserRepoView: React.Dispatch<React.SetStateAction<number>>;
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
              setUserRepoView={setUserRepoView}
              setUserPageView={setUserPageView}
            />
          </Box>
        </Container>
        <Divider orientation="vertical" flexItem />
      </Box>
    </Grid>
  );
};
