import React from 'react';
import { Grid, Container } from '@material-ui/core';
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
import json1 from '../../res/Kanban1';
import json2 from '../../res/Kanban2';
import json3 from '../../res/Kanban3';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to tamu-fall-2023-frontend!" subtitle="Optional subtitle">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Plugin title">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="row">
        <Grid item xs={4}>
          <Container>
            {json1.map((item) => (
              <CardComponent title={item.title} desc={item.description}></CardComponent>
            ))}
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Container>
            {json2.map((item) => (
              <CardComponent title={item.title} desc={item.description}></CardComponent>
            ))}
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Container>
            {json3.map((item) => (
              <CardComponent title={item.title} desc={item.description}></CardComponent>
            ))}
          </Container>
        </Grid>
        {/* <Grid item>
          <ExampleFetchComponent />
        </Grid> */}
      </Grid>
    </Content>
  </Page>
);
