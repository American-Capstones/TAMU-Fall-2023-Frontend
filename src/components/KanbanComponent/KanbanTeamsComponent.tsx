import React, { useEffect, useState } from 'react';
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
  CardContent,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import { RepoFormComponent } from './RepoFormComponent/RepoFormComponent';

const defaultFormValues = {
  ghUsername: '',
  repository: '',
};

export const KanbanTeams = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [repoNames, setRepoNames] = useState([]);

  const handleClick = () => {
    console.log('handle click');
    setFormVisible(true);
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email_id: 'tristanigos@gmail.com',
    }),
  };

  useEffect(() => {
    async function fetchData() {
      await fetch('http://localhost:7007/api/pr-tracker-backend/get-user-repos', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(JSON.parse(data[0].data)));
    }
    fetchData();
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h5">Repositories</Typography>
      </Box>
      <RepoFormComponent />
      <List disablePadding>
        <ListItem alignItems="flex-start" disableGutters>
          <ListItemText
            primary={
              <Card>
                <CardContent>
                  <Typography variant="body2">Team Repository 1</Typography>
                </CardContent>
              </Card>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" disableGutters>
          <ListItemText
            primary={
              <Card>
                <CardContent>
                  <Typography variant="body2">Team Repository 1</Typography>
                </CardContent>
              </Card>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" disableGutters>
          <ListItemText
            primary={
              <Card>
                <CardContent>
                  <Typography variant="body2">Team Repository 1</Typography>
                </CardContent>
              </Card>
            }
          />
        </ListItem>
      </List>
    </>
  );
};

export const KanbanTeamsComponent = () => {
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
            <KanbanTeams />
          </Box>
        </Container>
        <Divider orientation="vertical" flexItem />
      </Box>
    </Grid>
  );
};
