import BkGrd from "./Background";
import Ipinfo from "./Ipinfo";
import "./index.css";
import { useState } from "react";
import axios from "axios";
import MapComponent from "./Map";

function App() {
  const [ipInput, setIpInput] = useState("");
  const [ipAddress, setIpAddress] = useState(null);



  async function handleOnClick() {
    try {
      // Validate IP address format
      const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
      if (!ipRegex.test(ipInput)) {
        throw new Error("Invalid IP address format");
      }

      const response = await axios.get(
        `https://geo.ipify.org/api/v1?apiKey=at_XBadXuOA0Kre5pEet8P3q2NePb0Yi&ipAddress=${ipInput}`
      );
      console.log(response);
      const data = response.data;
      setIpAddress(data);

    } catch (error) {
      console.log(error.response);
      setIpInput("");
      // Handle error here
    }
  }

  return (
    <div className="App" >
      <BkGrd
      className=""
        ipInput={ipInput}
        setIpInput={setIpInput}
        handleOnClick={handleOnClick}
      />
       <Ipinfo  data={ipAddress} />
      <MapComponent data={ipAddress} />
    </div>
  );
}

export default App;
