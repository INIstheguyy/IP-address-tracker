import React from 'react';
import './Background.css'
import icon from './assets/images/icon-arrow.svg'


const BkGrd = ({ ipInput, setIpInput, handleOnClick }) => {
    return (
      <div className="container">
        <h2 className="header ">IP Address Tracker</h2>
        <div className="input-field-container">
          <input
            className="input-field"
            type="text"
            placeholder="search for any IP address or domain"
            value={ipInput}
            onChange={(e) => {
              setIpInput(e.target.value);
            }}
          />
          <button onClick={handleOnClick} className="icon-bg">
            <img src={icon} alt="" />
          </button>
        </div>
      </div>
    );
  };
  
 export default BkGrd;