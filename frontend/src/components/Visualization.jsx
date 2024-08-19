import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LineChart from "./LineChart";
import MapChart from "./MapChart";
import Region from "./Region";
import TopicRelevance from "./TopicRelevance";
import Sector from "./Sector";
import Filter from "./Filter";

export default function Visualization() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState(data);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedPestle, setSelectedPestle] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = "http://localhost:5000";
      try {
        const res = await axios.get(`${API_URL}/api/data`);
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, []);

  useEffect(() => {
    const filterData = () => {
      let filteredData = data;

      if (selectedRegion) {
        filteredData = filteredData.filter(item => item.region === selectedRegion);
      }
      if (selectedYear) {
        filteredData = filteredData.filter(item => item.end_year === selectedYear);
      }
      if (selectedTopic) {
        filteredData = filteredData.filter(item => item.topic === selectedTopic);
      }
      if (selectedSector) {
        filteredData = filteredData.filter(item => item.sector === selectedSector);
      }
      if (selectedPestle) {
        filteredData = filteredData.filter(item => item.pestle === selectedPestle);
      }
      if (selectedSource) {
        filteredData = filteredData.filter(item => item.source === selectedSource);
      }
      if (selectedCountry) {
        filteredData = filteredData.filter(item => item.country === selectedCountry);
      }

      setNewData(filteredData);
    };
    filterData();
  }, [data, selectedRegion, selectedYear, selectedTopic, selectedSector, selectedPestle, selectedSource, selectedCountry]);

  const uniqueOptions = (key) => Array.from(new Set(data.filter(item => item[key].length > 1).map(item => item[key])));


  return (
    <Box>
      <Typography>Filter By:</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

        <Filter
          label="Region"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          options={uniqueOptions('region')}
        />
        <Filter
          label="End Year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          options={uniqueOptions('end_year')}
        />
        <Filter
          label="Topic"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          options={uniqueOptions('topic')}
        />
        <Filter
          label="Sector"
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
          options={uniqueOptions('sector')}
        />
        <Filter
          label="Pestle"
          value={selectedPestle}
          onChange={(e) => setSelectedPestle(e.target.value)}
          options={uniqueOptions('pestle')}
        />
        <Filter
          label="Source"
          value={selectedSource}
          onChange={(e) => setSelectedSource(e.target.value)}
          options={uniqueOptions('source')}
        />
        <Filter
          label="Country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          options={uniqueOptions('country')}
        />

      </Box>

      <LineChart data={newData} />
      <Region data={newData} />
      <Box sx={{
        display: {
          xs: 'block',
          sm: 'flex'
        }
      }}>
        <TopicRelevance data={newData} />
        <Sector data={newData} />
      </Box>
      <MapChart data={newData} />
    </Box>

  );
}