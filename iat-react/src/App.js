
import BkGrd from './Background';
import Ipinfo from './Ipinfo';
import './index.css';
import { useState } from 'react';

function App() {
  const [ipInput, setIpInput] = useState('')
  const [ipAddress, setIpAddress] = useState('')
  const [location, setLocation] = useState('')
  const [timezone, setTimezone] = useState('')
  const [isp, setIsp] = useState('')

  return (
    <div className="App" style={{ position: 'relative' }}>
    <BkGrd
     ipInput={ipInput} setIpInput ={setIpInput}
     ipAddress={ipAddress} setIpAddress={setIpAddress}
     location={location} setLocation={setLocation}
     timezone={timezone} setTimezone={setTimezone}
     isp={isp} setIsp={setIsp}
     />
    <Ipinfo IPaddress="192.168.1.1" location="New York, NY, USA" timezone="-4:00" ISP="Verizon Communications Inc." />
    </div>
  );
}

export default App;
