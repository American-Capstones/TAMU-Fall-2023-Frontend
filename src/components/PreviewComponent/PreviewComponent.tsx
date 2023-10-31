import { Typography } from '@material-ui/core';
import React from 'react';

export type QueryType = {
  title: string | null;
  body: string | null;
  assignees: Array<any>;
  requested_reviewers: Array<any>;
};

export const PreviewComponent = ({ query }: { query?: QueryType }) => {
  console.log('OKAY', query);

  return query ? (
    <>
      <Typography variant="h5">{query.title}</Typography>
      <div>{query.body}</div>

      <Typography variant="h6">Assignees</Typography>
      {query.assignees.map((item: any) => (
        <div>{item.login}</div>
      ))}

      <Typography variant="h6">Requested Reviewers</Typography>
      {query.requested_reviewers.map((item: any) => (
        <div>{item.login}</div>
      ))}
    </>
  ) : (
    <></>
  );
};
