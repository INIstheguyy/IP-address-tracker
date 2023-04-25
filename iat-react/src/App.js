
import BkGrd from './Background';
import Ipinfo from './Ipinfo';
import './index.css';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
    <BkGrd/>
    <Ipinfo IPaddress="192.168.1.1" location="New York, NY, USA" timezone="-4:00" ISP="Verizon Communications Inc." />
    </div>
  );
}

export default App;
