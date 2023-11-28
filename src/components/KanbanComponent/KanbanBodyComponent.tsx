import React, { useEffect, useState } from 'react';
import { PRType, RepoType } from './KanbanTypes';
import { Grid } from '@material-ui/core';
import { KanbanColumnHeader } from './KanbanColumnComponent/KanbanColumnHeaderComponent';
import { KanbanColumnBody } from './KanbanColumnComponent/KanbanColumnBodyComponent';

export const KanbanBody = ({
  userRepoView,
  setQuery,
  setSideDrawOpen,
  userRepos,
}: {
  // allPullRequests: PRType[];
  userRepoView: number;
  setQuery: React.Dispatch<React.SetStateAction<PRType | undefined>>;
  setSideDrawOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userRepos: RepoType[] | undefined;
}) => {
  const [allPullRequests, setAllPullRequests] = useState<PRType[]>();

  useEffect(() => {
    if (userRepos) {
      setAllPullRequests(userRepos![userRepoView]?.data);
    }
  }, [userRepos, userRepoView]);

  const extractPRFromStatus = (state: string, state2?: string) => {
    const PRsFromStatus: PRType[] = [];

    if (allPullRequests === undefined) {
      return PRsFromStatus;
    }

    allPullRequests.forEach((pullRequest) => {
      if (pullRequest.state == state || pullRequest.state == state2) {
        PRsFromStatus.push(pullRequest);
      }
    });

    return PRsFromStatus;
  };

  const KanbanColumnHeaderAndBody = (state: string, header: string, state2?: string) => {
    const PRsFromStatus = extractPRFromStatus(state, state2);
    return (
      <>
        <KanbanColumnHeader columnName={header} columnLength={PRsFromStatus.length} />
        {userRepos && (
          <KanbanColumnBody
            pullRequests={PRsFromStatus}
            setQuery={setQuery}
            setSideDrawOpen={setSideDrawOpen}
          />
        )}
      </>
    );
  };

  return (
    <>
      <Grid item xs={4}>
        {KanbanColumnHeaderAndBody('OPEN', 'Open')}
      </Grid>
      <Grid item xs={4}>
        {KanbanColumnHeaderAndBody('IN_PROGRESS', 'In Progress')}
      </Grid>
      <Grid item xs={4}>
        {KanbanColumnHeaderAndBody('CLOSED', 'Closed/Merged', 'MERGED')}
      </Grid>
    </>
  );
};
