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
} from '@backstage/core-components';
// import { ExampleFetchComponent } from '../ExampleFetchComponent';
import { CardComponent } from '../CardComponent';
import DEFINED_PRs from '../../res/PRS_DEFINED';
import IN_PROGRESS_PRs from '../../res/PRS_INPROGRESS';
import DONE_PRs from '../../res/PRS_DONE';
import { PreviewComponent, QueryType } from '../PreviewComponent/PreviewComponent';
import { KanbanColumnHeader } from './KanbanColumnComponent/KanbanColumnHeaderComponent';
import { KanbanTeamsComponent } from './KanbanTeamsComponent';

export const KanbanComponent = () => {
  const [query, setQuery] = useState<QueryType>();
  const [sideDrawOpen, setSideDrawOpen] = useState(false);

  const KanbanColumnBody = (pullRequests: any[]) => {
    return (
      <>
        <Container>
          {pullRequests.map((item: any) => (
            <CardComponent
              data={item}
              key={item.id}
              onQuery={setQuery}
              onSideDrawOpen={setSideDrawOpen}
            />
          ))}
        </Container>
      </>
    );
  };

  return (
    <Page themeId="documentation">
      <Header title="Welcome to tamu-fall-2023-frontend!" subtitle="Optional subtitle">
        <HeaderLabel label="Owner" value="Team X" />
        <HeaderLabel label="Lifecycle" value="Alpha" />
      </Header>
      <Content>
        <Grid container spacing={2} direction="row">
          <KanbanTeamsComponent />
          <Grid item xs={10}>
            <ContentHeader title="Plugin title">
              <SupportButton>A description of your plugin goes here.</SupportButton>
            </ContentHeader>
            <Grid container spacing={3} direction="row">
              <Grid item xs={4}>
                {KanbanColumnHeader('Defined', DEFINED_PRs.length)}
                {KanbanColumnBody(DEFINED_PRs)}
              </Grid>
              <Grid item xs={4}>
                {KanbanColumnHeader('In Progress', IN_PROGRESS_PRs.length)}
                {KanbanColumnBody(IN_PROGRESS_PRs)}
              </Grid>
              <Grid item xs={4}>
                {KanbanColumnHeader('Done', DONE_PRs.length)}
                {KanbanColumnBody(DONE_PRs)}
              </Grid>
              {/* <Grid item>
          <ExampleFetchComponent />
        </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        <Container maxWidth="sm">
          <PreviewComponent
            query={query}
            sideDrawOpen={sideDrawOpen}
            onSideDrawOpen={setSideDrawOpen}
          />
        </Container>
      </Content>
    </Page>
  );
};
