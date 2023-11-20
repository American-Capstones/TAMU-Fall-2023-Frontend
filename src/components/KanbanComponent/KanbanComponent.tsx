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
import DEFINED_PRs from '../../res/PRS_DEFINED';
import IN_PROGRESS_PRs from '../../res/PRS_INPROGRESS';
import DONE_PRs from '../../res/PRS_DONE';
import { PreviewComponent } from '../PreviewComponent/PreviewComponent';
import { KanbanColumnHeader } from './KanbanColumnComponent/KanbanColumnHeaderComponent';
import { KanbanTeamsComponent } from './KanbanTeamsComponent';

import { githubAuthApiRef, useApi } from '@backstage/core-plugin-api';
import { KanbanColumnBody } from './KanbanColumnBodyComponent';

import { RepoType, PRType } from './KanbanTypes';
import { KanbanBody } from './KanbanBodyComponent';

export const KanbanComponent = () => {
  const [query, setQuery] = useState<PRType>();
  const [userRepos, setUserRepos] = useState<RepoType[]>();
  const [userRepoNames, setUserRepoNames] = useState<string[]>();
  const [sideDrawOpen, setSideDrawOpen] = useState(false);
  const [userRepoView, setUserRepoView] = useState(0);
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
              {/* <Grid item xs={4}>
                {KanbanColumnHeader('Defined', DEFINED_PRs.length)}
                {userRepos && KanbanColumnBody(userRepos[userRepoView]?.data)}
                {userRepos && (
                  <KanbanColumnBody
                    pullRequests={userRepos[userRepoView]?.data}
                    setQuery={setQuery}
                    setSideDrawOpen={setSideDrawOpen}
                  />
                )}
              </Grid>
              <Grid item xs={4}>
                {KanbanColumnHeader('In Progress', IN_PROGRESS_PRs.length)}
                {KanbanColumnBody(IN_PROGRESS_PRs)}
              </Grid>
              <Grid item xs={4}>
                {KanbanColumnHeader('Done', DONE_PRs.length)}
                {KanbanColumnBody(DONE_PRs)}
              </Grid> */}
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
