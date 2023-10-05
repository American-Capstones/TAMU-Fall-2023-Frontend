import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to tamu-fall-2023-frontend!" subtitle="Optional subtitle">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="American Airlines Pull Request Board">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="row">
        <Grid item>
          <InfoCard title="Pull Request 1">
            <Typography variant="body1">
              This pull request is focused on implementing a new
              <br />
              feature in the Passenger Experience Enhancement
              <br />
              App, specifically the "Seat Selection" feature...
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <InfoCard title="Pull Request 2">
            <Typography variant="body1">
              Pre-Requisites
              <br />
              Yes, I updated Authors.md OR this is not my
              <br /> first contribution
              <br />
              Yes, I included and/or modified tests to cover
              <br />
              relevent code OR my change is non-technical...
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <InfoCard title="Pull Request 3">
            <Typography variant="body1">
              This pull request integrates mobile check-in <br />
              functionality, streamlining the check-in process for <br />
              passengers using our app...
            </Typography>
          </InfoCard>
        </Grid>
        {/* <Grid item>
          <ExampleFetchComponent />
        </Grid> */}
      </Grid>
    </Content>
  </Page>
);
