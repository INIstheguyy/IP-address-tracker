import React from 'react';
import './Background.css'
import icon from './assets/images/icon-arrow.svg'

const BkGrd = () => {
    return ( 
        <div className='container'>
            <h2 className='header'>IP Address Tracker</h2>
            <div className='input-field-container'>
                <input className='input-field' type="text" placeholder='search for any IP address or domain' />
                <button className='icon-bg' ><img src={icon} alt="" /></button>
            </div>
        </div>
     );
}
 
export default BkGrd;