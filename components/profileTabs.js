import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function ProfileTabs() {

  
    return (
        <div className='ProfileTabsSection'>
        <Tabs>
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Bookings</Tab>
        </TabList>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
      </div>
    );
  }
