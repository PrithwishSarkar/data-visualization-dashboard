import { Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useTheme } from '@mui/material/styles';

Chart.register(CategoryScale);


export default function LineChart({ data }) {
  const newData = data.filter(item => item.start_year.length > 1)
  const intensity = newData.map(item => item.intensity);
  const likelihood = newData.map(item => item.likelihood);
  const theme = useTheme();

  const years = newData.map(item => item.start_year);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Intensity',
        backgroundColor: 'blue',
        borderColor: '#0000cc',
        borderWidth: 1.5,
        data: intensity,
      },
      {
        label: 'Likelihood',
        backgroundColor: 'green',
        borderColor: '#009933',
        borderWidth: 1.5,
        data: likelihood,
      },

    ],
  };

  const chartOptions = {

    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        cornerRadius: 5,
        displayColors: false,
      },
      legend: {
        display: true,
      },
      datalabels: {

        anchor: 'end',
        align: 'start',
        offset: -20,
        font: {
          size: 14,
          weight: 'bold',
        },

        shadowBlur: 10,
        shadowColor: 'white',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Start Year'
        },

        ticks: {

          font: {
            family: 'Roboto',
            size: 14,
            weight: 'bold',
          },
        },
      },
      y: {

        ticks: {

          font: {
            family: 'Roboto',
            size: 14,
            weight: 'bold',
          },

        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
      mode: 'progressive',
    },
  };

  return (
    <Card xs={12} sx={{
      backdropFilter: 'blur(5px)',
      margin: '4% 2%',
      textAlign: 'center', boxShadow: 'rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
      backgroundColor: theme.palette.mode === 'dark' ? '#2c2c2c' : '#fffff4',
      color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000', width: '96%', height: '600px'
    }}>
      <Typography variant='h4' gutterbottom sx={{ marginTop: '15px' }}>Intensity, Likelyhood, and Relevance</Typography>

      <CardContent sx={{ height: { xs: '85%', sm: '90%' } }}>
        <Line data={chartData} options={chartOptions} plugins={[ChartDataLabels]} />

      </CardContent>
    </Card>
  );
}