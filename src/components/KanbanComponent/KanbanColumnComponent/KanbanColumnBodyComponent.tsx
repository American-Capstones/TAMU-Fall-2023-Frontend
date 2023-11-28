import { Container } from '@material-ui/core';
import React from 'react';
import { PRType } from '../KanbanTypes';
import { CardComponent } from '../../CardComponent';

export const KanbanColumnBody = ({
  setQuery,
  setSideDrawOpen,
  pullRequests,
}: {
  setQuery: React.Dispatch<React.SetStateAction<PRType | undefined>>;
  setSideDrawOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pullRequests: PRType[];
}) => {
  return (
    <Container style={{ maxHeight: 700, overflow: 'auto' }}>
      {pullRequests &&
        pullRequests.map((item: PRType, id: number) => (
          <CardComponent data={item} key={id} onQuery={setQuery} onSideDrawOpen={setSideDrawOpen} />
        ))}
    </Container>
  );
};
