import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@material-ui/core';
import { Header, Page, Content, ContentHeader } from '@backstage/core-components';
import { PreviewComponent } from '../PreviewComponent/PreviewComponent';
import { KanbanTeamsComponent } from './KanbanTeamsComponent';
import { KanbanBody } from './KanbanBodyComponent';
import { RepoType, PRType } from './KanbanTypes';

import { configApiRef, githubAuthApiRef, useApi } from '@backstage/core-plugin-api';
import { AnalyticsBody } from '../AnalyticsComponent/AnalyticsBodyComponent';

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
  const config = useApi(configApiRef);
  useEffect(() => {
    async function fetchData() {
      setUserRepos(undefined);
      const backstageUserIdentity = await ghecAuthApi.getProfile();
      const body = { user_id: backstageUserIdentity?.displayName };
      await fetch(
        `${config.getString('pr-tracker-backend.baseUrl')}/api/pr-tracker-backend/get-user-repos/${
          body.user_id
        }`,
        requestOptions,
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('fetchdata kanban');
          console.log('data', data);
          console.log(data?.length !== 0);
          setUserRepos(data);

          const repoNames: string[] = [];
          data.map((repo: RepoType) => {
            repoNames.push(repo.repository);
          });
          setUserRepoNames(repoNames);
          setUsername(backstageUserIdentity?.displayName);
        });
    }
    fetchData();
  }, [userPageView]);

  return (
    <Page themeId="home">
      <Header title="PR Tracker" subtitle={`Welcome, ${username}!`}></Header>
      <Content>
        <Grid container spacing={2} direction="row">
          <KanbanTeamsComponent
            userRepoNames={userRepoNames}
            setUserRepoView={setUserRepoView}
            setUserPageView={setUserPageView}
          />
          {userPageView === 'Kanban' ? (
            <Grid item xs={10}>
              {userRepos && (
                <ContentHeader
                  title={
                    userRepos?.length !== 0
                      ? `PR Board - ${config.getString('pr-tracker-backend.organization')}/${
                          userRepos![userRepoView].repository
                        }`
                      : 'PR Board'
                  }
                />
              )}
              <Grid container spacing={3} direction="row">
                <KanbanBody
                  setQuery={setQuery}
                  setSideDrawOpen={setSideDrawOpen}
                  userRepoView={userRepoView}
                  userRepos={userRepos}
                />
              </Grid>
            </Grid>
          ) : (
            <Grid item xs={10}>
              {userRepos && (
                <ContentHeader
                  title={
                    userRepos?.length !== 0
                      ? `Analytics Board - ${config.getString('pr-tracker-backend.organization')}/${
                          userRepos![userRepoView].repository
                        }`
                      : 'Analytics Board'
                  }
                />
              )}
              {userRepos && (
                <AnalyticsBody userRepoNames={userRepoNames} userRepoView={userRepoView} />
              )}
            </Grid>
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
