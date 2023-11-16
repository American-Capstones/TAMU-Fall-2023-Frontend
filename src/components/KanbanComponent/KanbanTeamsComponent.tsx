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

  const handleClick = () => {
    console.log('handle click');
    setFormVisible(true);
  };

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
