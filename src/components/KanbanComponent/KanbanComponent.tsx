import React, { useEffect, useState } from 'react';
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
import { PreviewComponent } from '../PreviewComponent/PreviewComponent';
import { KanbanColumnHeader } from './KanbanColumnComponent/KanbanColumnHeaderComponent';
import { KanbanTeamsComponent } from './KanbanTeamsComponent';

import { githubAuthApiRef, useApi } from '@backstage/core-plugin-api';

export type CommentType = {
  author: {
    login: string;
  };
  body: string;
  createdAt: string;
  updatedAt: string;
};

export type ReviewType = {
  author: {
    login: string;
  };
  body: string;
  comments: {
    nodes: CommentType[];
  };
  createdAt: string;
  state: string;
  updatedAt: string;
};

export type LabelType = {
  color: string;
  name: string;
};

export type PRType = {
  author: {
    login: string;
  };
  body: string;
  createdAt: string;
  number: number;
  labels: {
    nodes: LabelType[];
  };
  reviews: {
    nodes: ReviewType[];
  };
  state: string;
  title: string;
  updatedAt: string;
  url: string;
};

export type RepoType = {
  repository: string;
  data: PRType[];
};

export const KanbanComponent = () => {
  const [query, setQuery] = useState<PRType>();
  const [userRepos, setUserRepos] = useState<RepoType[]>();
  const [userRepoNames, setUserRepoNames] = useState<String[]>();
  const [sideDrawOpen, setSideDrawOpen] = useState(false);
  const [userRepoView, setUserRepoView] = useState(0);
  const [username, setUsername] = useState<string | undefined>('');

  const KanbanColumnBody = (pullRequests: PRType[]) => {
    console.log('pullrequest', pullRequests);

    return (
      <Container style={{ maxHeight: 700, overflow: 'auto' }}>
        {pullRequests &&
          pullRequests.map((item: PRType, id: number) => (
            <CardComponent
              data={item}
              key={id}
              onQuery={setQuery}
              onSideDrawOpen={setSideDrawOpen}
            />
          ))}
      </Container>
    );
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '',
  };

  const ghecAuthApi = useApi(githubAuthApiRef);
  useEffect(() => {
    async function fetchData() {
      const backstageUserIdentity = await ghecAuthApi.getProfile();
      setUsername(backstageUserIdentity?.displayName);
      requestOptions.body = JSON.stringify({ user_id: backstageUserIdentity?.displayName });

      console.log('reqoptions', requestOptions);
      await fetch('http://localhost:7007/api/pr-tracker-backend/get-user-repos', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log('DATA', data);
          setUserRepos(data);

          const repoNames: String[] = [];
          data.map((repo: RepoType) => {
            repoNames.push(repo.repository);
          });

          console.log('REPONAMES', repoNames);

          setUserRepoNames(repoNames);
        });

      console.log(3);
    }
    fetchData();
    console.log('USER REPOS', userRepos);
  }, []);

  return (
    <Page themeId="documentation">
      <Header title="Welcome to tamu-fall-2023-frontend!" subtitle="Optional subtitle">
        <HeaderLabel label="Owner" value="Team X" />
        <HeaderLabel label="Lifecycle" value="Alpha" />
      </Header>
      <Content>
        <Grid container spacing={2} direction="row">
          {userRepos ? (
            <KanbanTeamsComponent
              userRepoNames={userRepoNames}
              setUserRepoView={setUserRepoView}
              username={username}
            />
          ) : (
            <></>
          )}

          <Grid item xs={10}>
            <ContentHeader title="American Airlines PR Board">
              <SupportButton>A description of your plugin goes here.</SupportButton>
            </ContentHeader>
            <Grid container spacing={3} direction="row">
              <Grid item xs={4}>
                {KanbanColumnHeader('Defined', DEFINED_PRs.length)}
                {userRepos && KanbanColumnBody(userRepos[userRepoView]?.data)}
              </Grid>
              <Grid item xs={4}>
                {KanbanColumnHeader('In Progress', IN_PROGRESS_PRs.length)}
                {/* {KanbanColumnBody(IN_PROGRESS_PRs)} */}
              </Grid>
              <Grid item xs={4}>
                {KanbanColumnHeader('Done', DONE_PRs.length)}
                {/* {KanbanColumnBody(DONE_PRs)} */}
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
