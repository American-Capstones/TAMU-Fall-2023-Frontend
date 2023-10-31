import React, { useState } from 'react';
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
import DEFINED_PRs from '../../res/PRS_DEFINED';
import IN_PROGRESS_PRs from '../../res/PRS_INPROGRESS';
import DONE_PRs from '../../res/PRS_DONE';
import { PreviewComponent, QueryType } from '../PreviewComponent/PreviewComponent';

export const KanbanComponent = () => {
  const [query, setQuery] = useState<QueryType>();

  return (
    <Page themeId="documentation">
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
              {DEFINED_PRs.map((item) => (
                <CardComponent data={item} key={item.id} onQuery={setQuery}></CardComponent>
              ))}
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Container>
              {IN_PROGRESS_PRs.map((item) => (
                <CardComponent data={item} key={item.id} onQuery={setQuery}></CardComponent>
              ))}
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Container>
              {DONE_PRs.map((item) => (
                <CardComponent data={item} key={item.id} onQuery={setQuery}></CardComponent>
              ))}
            </Container>
          </Grid>
          {/* <Grid item>
          <ExampleFetchComponent />
        </Grid> */}
        </Grid>
        <Container maxWidth="sm">
          <PreviewComponent query={query} />
        </Container>
      </Content>
    </Page>
  );
};
