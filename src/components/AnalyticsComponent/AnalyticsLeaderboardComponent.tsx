import React, { useEffect, useState } from 'react';
import { Grid, Select, MenuItem, Typography, List, Box } from '@material-ui/core';
import { AnalyticsType, LeaderBoardDataType } from '../KanbanComponent/KanbanTypes';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const columns: GridColDef[] = [
  { field: 'id', headerName: 'Rank', width: 75 },
  { field: 'name', headerName: 'GH Username', width: 125 },
  { field: 'score', headerName: 'Contribution', width: 125 },
  { field: 'pull_requests_merged', headerName: '# PRs Completed', width: 125 },
  { field: 'pull_requests_reviews', headerName: '# PR Reviews', width: 125 },
  { field: 'pull_requests_comments', headerName: '# PR Comments', width: 125 },
  { field: 'additions', headerName: '# Additions', width: 100 },
  { field: 'deletions', headerName: '# Deletions', width: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: any;
  cy: any;
  midAngle: any;
  innerRadius: any;
  outerRadius: any;
  percent: any;
  index: any;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

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
  };
  const handleMonthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAnalyticsMonth(event.target.value as number);
  };

  useEffect(() => {
    const tempLeaderboard: LeaderBoardDataType[][][] = Array.from({ length: 5 }, () =>
      Array.from({ length: 12 }, () => []),
    );

    analyticsData[userRepoView].leaderBoard.forEach((item, index) => {
      item.data.forEach((item2) => {
        tempLeaderboard[index][item2.month - 1].push(item2);
      });
    });
    setLeaderboard(tempLeaderboard);
  }, [userRepoView]);

  const generateRows = (currLeaderboard: LeaderBoardDataType[]) => {
    const processedArray = currLeaderboard.map((leader, index) => ({
      name: leader.user_id,
      pull_requests_reviews: leader.pull_requests_reviews,
      pull_requests_merged: leader.pull_requests_merged,
      pull_requests_comments: leader.pull_requests_comments,
      additions: leader.additions,
      deletions: leader.deletions,
      score:
        leader.pull_requests_merged +
        0.375 * leader.pull_requests_reviews +
        0.15 * leader.pull_requests_comments,
      id: index + 1, // Adding a new variable 'rank'
    }));

    processedArray.forEach((item) => {
      switch (item.id) {
        case 1:
          item.name = `🥇 ${item.name}`;
          break;
        case 2:
          item.name = `🥈 ${item.name}`;
          break;
        case 3:
          item.name = `🥉 ${item.name}`;
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
            {leaderboard && (
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="score"
                  isAnimationActive={false}
                  data={generateRows(leaderboard![analyticsYear][analyticsMonth])}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  labelLine={false}
                  label={renderCustomizedLabel}
                >
                  {generateRows(leaderboard![analyticsYear][analyticsMonth]).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            )}
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};
