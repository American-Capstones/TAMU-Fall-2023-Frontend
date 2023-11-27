import React, { useEffect, useState } from 'react';
import { Grid, Select, MenuItem, Typography, List, Box, Tooltip } from '@material-ui/core';
import { AnalyticsType, LeaderBoardDataType } from '../KanbanComponent/KanbanTypes';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const columns: GridColDef[] = [
  { field: 'id', headerName: 'Rank', width: 75 },
  { field: 'user_id', headerName: 'GH Username', width: 125 },
  { field: 'pull_requests_merged', headerName: '# PRs Merged', width: 125 },
  { field: 'pull_requests_reviews', headerName: '# PR Reviews', width: 125 },
  { field: 'pull_requests_comments', headerName: '# PR Comments', width: 125 },
  { field: 'score', headerName: 'Score', width: 125 },
];
export const AnalyticsLeaderboard = ({
  analyticsData,
  userRepoView,
}: {
  analyticsData: AnalyticsType[];
  userRepoView: number;
}) => {
  const [analyticsYear, setAnalyticsYear] = useState(0);
  const [analyticsMonth, setAnalyticsMonth] = useState(0);
  const [leaderboard, setLeaderboard] = useState<LeaderBoardDataType[][][]>();

  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAnalyticsYear(event.target.value as number);
    console.log(event.target.value as number);
  };
  const handleMonthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAnalyticsMonth(event.target.value as number);
    console.log(event.target.value as number);
  };

  useEffect(() => {
    const tempLeaderboard: LeaderBoardDataType[][][] = Array.from({ length: 5 }, () =>
      Array.from({ length: 12 }, () => []),
    );

    analyticsData[userRepoView].leaderBoard.forEach((item, index) => {
      item.data.forEach((item2) => {
        console.log(index, item2.month - 1, item2.user_id);
        tempLeaderboard[index][item2.month - 1].push(item2);
      });
      console.log('templeaderboard', tempLeaderboard);
    });
    setLeaderboard(tempLeaderboard);
  }, [userRepoView]);

  const generateRows = (currLeaderboard: LeaderBoardDataType[]) => {
    const processedArray = currLeaderboard.map((leader, index) => ({
      user_id: leader.user_id,
      pull_requests_reviews: leader.pull_requests_reviews,
      pull_requests_merged: leader.pull_requests_merged,
      pull_requests_comments: leader.pull_requests_comments,
      score:
        leader.pull_requests_merged +
        0.375 * leader.pull_requests_reviews +
        0.15 * leader.pull_requests_comments,
      id: index + 1, // Adding a new variable 'rank'
    }));

    processedArray.forEach((item) => {
      switch (item.id) {
        case 1:
          item.user_id = `🥇 ${item.user_id}`;
          break;
        case 2:
          item.user_id = `🥈 ${item.user_id}`;
          break;
        case 3:
          item.user_id = `🥉 ${item.user_id}`;
          break;
        default:
          break;
      }
    });

    return processedArray;
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <Typography variant="h5">Leaderboard</Typography>
      </Grid>
      <Grid item xs={1}>
        <Select value={analyticsMonth} label="Year" onChange={handleMonthChange}>
          {months.map((month, index) => (
            <MenuItem value={index}>{month}</MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={2}>
        <Select value={analyticsYear} label="Year" onChange={handleYearChange}>
          <MenuItem value={0}>2023</MenuItem>
          <MenuItem value={1}>2022</MenuItem>
          <MenuItem value={2}>2021</MenuItem>
          <MenuItem value={3}>2020</MenuItem>
          <MenuItem value={4}>2019</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <List>
            {/* {leaderboard &&
              leaderboard![analyticsYear][analyticsMonth].map((item, index) => (
                <Typography>
                  {index + 1} &nbsp; {item.user_id}
                </Typography>
              ))} */}
            {leaderboard && (
              <DataGrid
                rows={generateRows(leaderboard![analyticsYear][analyticsMonth])}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
              />
            )}
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};
