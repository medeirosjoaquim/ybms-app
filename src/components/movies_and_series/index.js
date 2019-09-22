import React from 'react';
import MoviesList from './MoviesList'
import SeriesList from './SeriesList'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles.scss'
const index = () => {
  return (
    <div className="movies-and-series">
      <Tabs>
        <TabList>
          <Tab>Movies List</Tab>
          <Tab>Series List</Tab>
        </TabList>
        <TabPanel>
          <MoviesList/>
        </TabPanel>
        <TabPanel>
          <SeriesList/>
        </TabPanel>
      </Tabs>
  </div>
  );
}

export default index;
