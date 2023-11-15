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
  CardContent,
} from '@material-ui/core';

export const KanbanTeams = () => {
  return (
    <>
      <Box>
        <Typography variant="h5">Teams</Typography>
      </Box>
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
