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
  stateDuration: number;
  numApprovals: number;
  id: string;
  priority: string;
  description: string;
};

export type RepoType = {
  repository: string;
  data: PRType[];
};
