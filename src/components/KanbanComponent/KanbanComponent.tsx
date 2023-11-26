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
import { PreviewComponent } from '../PreviewComponent/PreviewComponent';
import { KanbanTeamsComponent } from './KanbanTeamsComponent';
import { KanbanBody } from './KanbanBodyComponent';
import { RepoType, PRType } from './KanbanTypes';

import { githubAuthApiRef, useApi } from '@backstage/core-plugin-api';
import { response } from 'msw';

export const KanbanComponent = () => {
  const [query, setQuery] = useState<PRType>();
  const [userRepos, setUserRepos] = useState<RepoType[]>();
  const [userRepoNames, setUserRepoNames] = useState<string[]>();
  const [sideDrawOpen, setSideDrawOpen] = useState(false);
  const [userRepoView, setUserRepoView] = useState(0);
  const [userPageView, setUserPageView] = useState('Kanban');
  const [username, setUsername] = useState<string | undefined>();

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  const ghecAuthApi = useApi(githubAuthApiRef);
  useEffect(() => {
    async function fetchData() {
      const backstageUserIdentity = await ghecAuthApi.getProfile();
      const body = { user_id: backstageUserIdentity?.displayName };
      setUsername(body.user_id);
      await fetch(
        `http://localhost:7007/api/pr-tracker-backend/get-user-repos/${body.user_id}`,
        requestOptions,
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('DATA', data);
          setUserRepos(data);

          const repoNames: string[] = [];
          data.map((repo: RepoType) => {
            repoNames.push(repo.repository);
          });
          setUserRepoNames(repoNames);
        });

      await fetch(
        `http://localhost:7007/api/pr-tracker-backend/get-analytics/tristanigos`,
        requestOptions,
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('analytics', data);
        });
    }
    fetchData();
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
              setUserPageView={setUserPageView}
              username={username}
            />
          ) : (
            <></>
          )}
          {userPageView === 'Kanban' ? (
            <>
              <Grid item xs={10}>
                <ContentHeader title="American Airlines PR Board">
                  <SupportButton>A description of your plugin goes here.</SupportButton>
                </ContentHeader>
                <Grid container spacing={3} direction="row">
                  {userRepos && (
                    <KanbanBody
                      allPullRequests={userRepos[userRepoView]?.data}
                      setQuery={setQuery}
                      setSideDrawOpen={setSideDrawOpen}
                      userRepos={userRepos}
                    />
                  )}
                </Grid>
              </Grid>
            </>
          ) : (
            <></>
          )}
        </Grid>
        <Container maxWidth="sm">
          {userRepos ? (
            <PreviewComponent
              query={query}
              sideDrawOpen={sideDrawOpen}
              onSideDrawOpen={setSideDrawOpen}
            />
          ) : (
            <></>
          )}
        </Container>
      </Content>
    </Page>
  );
};
