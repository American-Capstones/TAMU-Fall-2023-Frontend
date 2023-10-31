import React, { useState } from 'react';
import {
  Grid,
  Container,
  Typography,
  Divider,
  Box,
  Chip,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
} from '@material-ui/core';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
  InfoCard,
} from '@backstage/core-components';

// import { ExampleFetchComponent } from '../ExampleFetchComponent';
import { CardComponent } from '../CardComponent';
import json1 from '../../res/PRS_DEFINED';
import json2 from '../../res/PRS_INPROGRESS';
import json3 from '../../res/PRS_DONE';
import { PreviewComponent, QueryType } from '../PreviewComponent/PreviewComponent';

export const KanbanComponent = () => {
  const [query, setQuery] = useState<QueryType>();
  const [state, setState] = useState(false);

  function KanbanColumnHeader(columnName: string, columnLength: number) {
    return (
      <>
        <Box mb={2} m={4}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Typography variant="h6">{columnName}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Chip label={columnLength} />
            </Grid>
          </Grid>
          <Divider />
        </Box>
      </>
    );
  }

  function KanbanColumnBody(json: any) {
    return (
      <>
        <Container>
          {json.map((item: any) => (
            <CardComponent
              data={item}
              key={item.id}
              onQuery={setQuery}
              onState={setState}
            ></CardComponent>
          ))}
        </Container>
      </>
    );
  }

  function KanbanTeams() {
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
  }

  return (
    <Page themeId="documentation">
      <Header title="Welcome to tamu-fall-2023-frontend!" subtitle="Optional subtitle">
        <HeaderLabel label="Owner" value="Team X" />
        <HeaderLabel label="Lifecycle" value="Alpha" />
      </Header>
      <Content>
        <Grid container spacing={2} direction="row">
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
                <Box mr={2}>{KanbanTeams()}</Box>
              </Container>
              <Divider orientation="vertical" flexItem />
            </Box>
          </Grid>
          <Grid item xs={10}>
            <ContentHeader title="Plugin title">
              <SupportButton>A description of your plugin goes here.</SupportButton>
            </ContentHeader>
            <Grid container spacing={3} direction="row">
              <Grid item xs={4}>
                {KanbanColumnHeader('Defined', json1.length)}
                {KanbanColumnBody(json1)}
              </Grid>
              <Grid item xs={4}>
                {KanbanColumnHeader('In Progress', json2.length)}
                {KanbanColumnBody(json2)}
              </Grid>
              <Grid item xs={4}>
                {KanbanColumnHeader('Done', json3.length)}
                {KanbanColumnBody(json3)}
              </Grid>
              {/* <Grid item>
          <ExampleFetchComponent />
        </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        <Container maxWidth="sm">
          <PreviewComponent query={query} state={state} onState={setState} />
        </Container>
      </Content>
    </Page>
  );
};
