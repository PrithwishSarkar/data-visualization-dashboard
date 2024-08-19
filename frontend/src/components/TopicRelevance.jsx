import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function TopicRelevance({ data }) {
  const theme = useTheme();
  const relevanceCount = {};
  data.filter(item => item.topic.length > 1).forEach(item => {
    if (item.topic in relevanceCount) {
      relevanceCount[item.topic] += item.relevance;
    } else {
      relevanceCount[item.topic] = item.relevance;
    }
  });

  const chartData = {
    labels: Object.keys(relevanceCount),
    datasets: [
      {
        data: Object.values(relevanceCount),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
          '#C0C0C0',
          '#00FF00',
          '#000080',
          '#FFFF00',
          '#000080'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
          '#C0C0C0',
          '#00FF00',
          '#000080',
          '#FFFF00',
          '#000080'
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Card sx={{
      backdropFilter: 'blur(5px)',
      margin: '4% 2%',
      textAlign: 'center', boxShadow: 'rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
      backgroundColor: theme.palette.mode === 'dark' ? '#2c2c2c' : '#fffff4',
      color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000', width: {
        xs: '96%',
        sm: '46%'
      }, height: '600px'
    }}>

      <Typography variant='h4' gutterbottom sx={{ marginTop: '15px' }}>Topic Relevance Count</Typography>
      <CardContent sx={{ height: '90%' }}>
        <Doughnut data={chartData} options={chartOptions} />

      </CardContent>
    </Card>
  );
};