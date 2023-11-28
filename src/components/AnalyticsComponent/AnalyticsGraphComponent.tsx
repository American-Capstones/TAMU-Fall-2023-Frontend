import React, { useState } from 'react';
import { Grid, Select, MenuItem, Typography, Tooltip } from '@material-ui/core';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Label,
  Tooltip as RechartTooltip,
} from 'recharts';
import { AnalyticsType } from '../KanbanComponent/KanbanTypes';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const AnalyticsGraph = ({
  analyticsData,
  analyticsType,
  analyticsName,
  analyticsDescription,
  userRepoView,
}: {
  analyticsData: AnalyticsType[];
  analyticsType: string;
  analyticsName: string;
  analyticsDescription: string;
  userRepoView: number;
}) => {
  const [analyticsYear, setAnalyticsYear] = useState(0);

  // year = number of years since 2023. 0 = 2023, 1 = 2023 - 1 = 2022
  const populateGraph = (year: number) => {
    console.log('populating graph', userRepoView, analyticsData![userRepoView]);
    let data: any[] = [];
    data = months.map((month) => ({ name: month }));

    data.forEach((month, index) => {
      if (analyticsType === 'cycleTimeData') {
        if (analyticsData![userRepoView].cycleTimeData[year][index + 1] !== -1) {
          month.Hours = analyticsData![userRepoView].cycleTimeData[year][index + 1];
        }
      } else if (analyticsType === 'firstReviewData') {
        if (analyticsData![userRepoView].firstReviewData[year][index + 1] !== -1) {
          month.Hours = analyticsData![userRepoView].firstReviewData[year][index + 1];
        }
      } else if (analyticsType === 'totalPullRequestsMerged') {
        if (analyticsData![userRepoView].totalPullRequestsMerged[year][index + 1] !== -1) {
          month.Hours = analyticsData![userRepoView].totalPullRequestsMerged[year][index + 1];
        }
      }
    });

    return (
      <>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 15,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" height={30}>
              <Label value="Year" offset={0} position="bottom" />
            </XAxis>
            <YAxis
              label={{
                value: 'Hour',
                angle: -90,
                position: 'insideLeft',
                style: { textAnchor: 'middle' },
              }}
            />
            <RechartTooltip />
            <Line connectNulls type="monotone" dataKey="Hours" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  };

  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAnalyticsYear(event.target.value as number);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Tooltip title={analyticsDescription} placement="bottom-start">
            <Typography variant="h5">{analyticsName}</Typography>
          </Tooltip>
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
          {populateGraph(analyticsYear)}
        </Grid>
      </Grid>
    </>
  );
};
