const Ipinfo = ({IPaddress, location, timezone, ISP, }) => {
    //192.212.174.101
    return ( 
        <div className="  absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white py-1 px-8 w-10/12  h-10/12 text-center shadow-lg rounded-lg">
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