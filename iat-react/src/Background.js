import React from 'react';
import './Background.css'
import icon from './assets/images/icon-arrow.svg'
import axios from 'axios';

const BkGrd = ({ipInput, setIpInput}) => {
   async function handleOnClick(){
        const response = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_XBadXuOA0Kre5pEet8P3q2NePb0Yi&ipAddress=${ipInput}`)
        console.log(response)
        const data = response.data;
        const location = data.location;
        const timezone = data.location.timezone;
        const isp = data.isp;
        const ipAddress = data.ip;
    
        console.log('Location:', location);
        console.log('Timezone:', timezone);
        console.log('ISP:', isp);
        console.log('IP Address:', ipAddress);
    
        setIpInput('');
    }
    return ( 
        <div className='container'>
            <h2 className='header '>IP Address Tracker</h2>
            <div className='input-field-container'>
                <input className='input-field'
                 type="text" 
                 placeholder='search for any IP address or domain'
                 value={ipInput}
                 onChange={(e) => { setIpInput(e.target.value)}}
                 
                  />
                <button onClick={() => handleOnClick()} className='icon-bg' ><img src={icon} alt="" /></button>
            </div>
        </div>
     );
}
 
export default BkGrd;