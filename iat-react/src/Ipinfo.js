const Ipinfo = ({ data }) => {
  console.log(data);

  return (
    <div className=" absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white py-1 px-8 w-10/12  h-10/12 text-center shadow-lg rounded-lg">
      <div className="">
        <p className="">IPaddress:{""}</p>
        <p className="">{data?.ip}</p>
      </div>
      <div className="">
        <p className="">Location:{""}</p>
        <p className="">{data?.location?.region}</p>
      </div>
      <div className="">
        <p className="">Timezone:{""}</p>
        <p className="">{data?.location.timezone}</p>
      </div>
      <div className="">
        <p className="">ISP:{""}</p>
        <p className="">{data?.isp}</p>
      </div>
    </div>
  );
};

export default Ipinfo;
