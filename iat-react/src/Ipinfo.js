import React from 'react';
import './index.css'

const Ipinfo = ({ data }) => {
  return (
    <div className='info'>
        <div className="info-div">
            <div className="">
                <p className="field-tag">IP Address:</p>
                <p className="field-result">{data?.ip}</p>
            </div>
            <div className="">
                <p className="field-tag">Location:</p>
                <p className="field-result">{data?.location?.region}</p>
            </div>
            <div className="">
                <p className="field-tag">Timezone:</p>
                <p className="field-result">{data?.location?.timezone}</p>
            </div>
            <div className="">
                <p className="field-tag">ISP:</p>
                <p className="field-result">{data?.isp}</p>
            </div>
        </div>
    </div>
    
  );
};

export default Ipinfo;

