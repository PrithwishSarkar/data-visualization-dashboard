import React from 'react';
import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';
import { Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function MapChart({ data }) {
  const theme = useTheme();
  const processData = (data) => {
    return data
      .filter(item => item.country.length > 1)
      .map(item => ({
        x: item.relevance,
        y: item.likelihood,
        country: item.country
      }));
  }


  const scatterData = {
    datasets: [{
      label: 'Country Data',
      data: processData(data),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      pointRadius: 8
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.raw.country;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Relevance'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Likelihood'
        }
      }
    }
  };

  return (
    <Card sx={{
      backdropFilter: 'blur(5px)',
      margin: '4% 2%',
      textAlign: 'center', boxShadow: 'rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
      backgroundColor: theme.palette.mode === 'dark' ? '#2c2c2c' : '#fffff4',
      color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000', width: '96%', height: '600px'
    }}>
      <Typography variant='h4' gutterbottom sx={{ marginTop: '15px' }}>Scatter Plot of Countries</Typography>

      <CardContent sx={{ height: '90%' }}>
        <Scatter data={scatterData} options={options} />

      </CardContent>
    </Card>
  );
}

