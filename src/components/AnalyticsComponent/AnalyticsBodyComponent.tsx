import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { configApiRef, githubAuthApiRef, useApi } from '@backstage/core-plugin-api';
import { AnalyticsType } from '../KanbanComponent/KanbanTypes';
import { AnalyticsGraph } from './AnalyticsGraphComponent';
import { AnalyticsLeaderboard } from './AnalyticsLeaderboardComponent';

export const AnalyticsBody = ({
  userRepoNames,
  userRepoView,
}: {
  userRepoNames: string[] | undefined;
  userRepoView: number;
}) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsType[]>();

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  const config = useApi(configApiRef);
  const ghecAuthApi = useApi(githubAuthApiRef);
  useEffect(() => {
    // if render at base component, only renders once
    // if render at this component, renders on every analytics click
    async function fetchData() {
      const backstageUserIdentity = await ghecAuthApi.getProfile();
      const body = { user_id: backstageUserIdentity?.displayName };

      await fetch(
        `${config.getString('pr-tracker-backend.baseUrl')}/api/pr-tracker-backend/get-analytics/${
          body.user_id
        }`,
        requestOptions,
      )
        .then((response) => response.json())
        .then((data) => {
          setAnalyticsData(data);
          console.log(userRepoNames);
        });
    }
    fetchData();
  }, []);
  return (
    <>
      {analyticsData && (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <AnalyticsGraph
              userRepoView={userRepoView}
              analyticsData={analyticsData}
              analyticsType="cycleTimeData"
              analyticsName="Cycle Time Data"
              analyticsDescription="Time in hours to Merge the PR."
            />
          </Grid>
          <Grid item xs={6}>
            <AnalyticsGraph
              userRepoView={userRepoView}
              analyticsData={analyticsData}
              analyticsType="firstReviewData"
              analyticsName="First Review Data"
              analyticsDescription="Time in Hours for Someone to Review/Comment/Approve"
            />
          </Grid>
          <Grid item xs={6}>
            <AnalyticsGraph
              userRepoView={userRepoView}
              analyticsData={analyticsData}
              analyticsType="totalPullRequestsMerged"
              analyticsName="Total Pull Requests Merged"
              analyticsDescription="Total Number of Pull Requests Merged"
            />
          </Grid>
          <Grid item xs={6}>
            <AnalyticsLeaderboard analyticsData={analyticsData} userRepoView={userRepoView} />
          </Grid>
        </Grid>
      )}
    </>
  );
};
