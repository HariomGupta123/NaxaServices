import axios from "axios";
import  { useEffect, useState } from "react";
import { servicesList } from "../../redux/servicesActions";
import { useDispatch, useSelector } from "react-redux";

const DataCollectVisual = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(servicesList());
  }, [dispatch]);

  const appData = data[3] || {};

  const removePTags = (text) => {
    return text ? text.replace(/<\/?p>/g, "") : "";
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator
  }

  if (!appData.title) {
    return <div>No data available</div>; // Handle no data case
  }

  return (
    <div className="bg-slate-100 w-full">
      <div className="bg-slate-100 w-full flex flex-col md:flex-row  justify-center items-center py-10">
        <div className="w-full md:w-1/2 flex  justify-center items-center ">
          <img src={appData.icon} width={400} alt="App Icon" />
        </div>
        <div className="max-w-[600px] md:w-1/2 flex flex-col items-center md:items-start text-center md:text-start px-5 md:mr-10 h-full  ">
          <img src={appData.photo} width={50} alt="App Photo" className="mb-4 max-h-[100px]" />
          <h1 className="py-5 text-3xl font-bold">{appData.title}</h1>
          <span className="pb-5">{removePTags(appData.description1)}</span>
          <span className="bg-cyan-200 p-4">
            {removePTags(appData.description2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DataCollectVisual;
