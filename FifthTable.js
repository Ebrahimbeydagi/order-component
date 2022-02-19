import * as React from 'react';
import { styled } from '@mui/system';
import {
    TabPanelUnstyled,
    TabsListUnstyled,
    TabsUnstyled,
    TabUnstyled,
    tabUnstyledClasses
} from "@mui/base";
import BigTable from "./bigTable";

const blue = {
    50: '#fbfbfb',
    100: '#f5f5f5',
};

const Tab = styled(TabUnstyled)`
  color: black;
  cursor: pointer;
  background-color: transparent;
  width: 100px;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  
  &:hover {
    background-color: ${blue[50]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[100]};
    color: #000;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  border-radius: 5px;
  margin-bottom: 16px;
  margin-left: 10%;
  display: flex;
  align-items: center;
  justify-content: left;
  align-content: space-between;
`;

export default function FifthTable() {
    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList>
                <Tab>All</Tab>
                <Tab>Metaverse</Tab>
                <Tab>Gaming</Tab>
            </TabsList>
            <TabPanel value={0}><BigTable/></TabPanel>
            <TabPanel value={1}><BigTable/></TabPanel>
            <TabPanel value={2}><BigTable/></TabPanel>
        </TabsUnstyled>
    );
}
