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
  description_updated_by: string;
};

export type RepoType = {
  repository: string;
  data: PRType[];
};

export type LeaderBoardDataType = {
  additions: number;
  created_at: string;
  deletions: number;
  month: number;
  pull_requests_comments: number;
  pull_requests_merged: number;
  pull_requests_reviews: number;
  repository: string;
  updated_at: string;
  user_id: string;
  year: number;
};

export type LeaderBoardType = {
  year: string;
  data: LeaderBoardDataType[] | [];
};

export type AnalyticsType = {
  repositoryName: string;
  cycleTimeData: number[][];
  firstReviewData: number[][];
  totalPullRequestsMerged: number[][];
  leaderBoard: LeaderBoardType[] | [];
};
