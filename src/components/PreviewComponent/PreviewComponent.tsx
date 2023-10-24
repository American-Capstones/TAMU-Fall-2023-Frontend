import React from 'react';

export const PreviewComponent = ({
  query,
}: {
  query: { title: string; description: string; id: number };
}) => {
  console.log(query);
  return (
    <>
      <div>{query.title}</div>
      <div>{query.description}</div>
    </>
  );
};
