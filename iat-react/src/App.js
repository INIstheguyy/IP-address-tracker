
import BkGrd from './Background';
import Ipinfo from './Ipinfo';
import './index.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [ipInput, setIpInput] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');

  async function handleOnClick() {
    try {
      // Validate IP address format
      const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
      if (!ipRegex.test(ipInput)) {
        throw new Error('Invalid IP address format');
      }

      const response = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_XBadXuOA0Kre5pEet8P3q2NePb0Yi&ipAddress=${ipInput}`);
      console.log(response);
      const data = response.data;
      const location = data.location;
      const timezone = data.location.timezone;
      const isp = data.isp;
      const ipAddress = data.ip;

      console.log('Location:', location);
      console.log('Timezone:', timezone);
      console.log('ISP:', isp);
      console.log('IP Address:', ipAddress);

      setIpAddress(`${ipAddress}`);
      setLocation(`${location.country}, ${location.region},  `);
      setTimezone(`UTC${timezone}`);
      setIsp(`${isp}`);
      // setIpInput('');
    } catch (error) {
      console.error(error.message);
      setIpInput('');
      // Handle error here
    }
  }

  return (
    <div className="App" style={{ position: 'relative' }}>
      <BkGrd
        ipInput={ipInput}
        setIpInput={setIpInput}
        handleOnClick={handleOnClick}
      />
      <Ipinfo
        ipAddress={ipAddress}
        location={location}
        timezone={timezone}
        isp={isp}
      />
    </div>
  );
}

export default App;
