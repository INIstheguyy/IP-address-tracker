const Ipinfo = ({IPaddress, location, timezone, ISP, }) => {
    return ( 
        <div className="I-P-A-Info rounded-lg shadow-lg " style={{ 
            position: 'absolute', top: '33vh',
            left: '50%', transform: 'translate(-50%, -50%)',
            zIndex: '100', backgroundColor: 'white',
            padding: '0.5vh 2vw', width: '70vw',
            textAlign: 'center', 
            boxShadow:''
         }}>
            <div className="">
            <p className="">IPaddress:{''}</p>
                <p className="">{IPaddress}</p>
            </div>
            <div className="">
                <p className="">Location:{''}</p>
                <p className="">{location}</p>
            </div>
            <div className="">
                <p className="">Timezone:{''}</p>
                <p className="">{timezone}</p>
            </div>
            <div className="">
                <p className="">ISP:{''}</p>
                <p className="">{ISP}</p>
            </div>
        </div>
     );
}
 
export default Ipinfo;