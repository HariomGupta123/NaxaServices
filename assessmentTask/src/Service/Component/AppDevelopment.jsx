import axios from "axios";
import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { servicesList } from "../../redux/servicesActions";

const AppDevelopment = () => {
  const dispatch = useDispatch();
  const { data,loading } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(servicesList());
  }, [dispatch]);
  
 

 const appData = data[6] || {};

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
        <div className="w-full md:w-1/2 flex  ">
          <img src={appData.icon} width={600} alt="App Icon" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-start px-5 md:mr-10">
          <img src={appData.photo} width={50} alt="App Photo" className="mb-4" />
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

export default AppDevelopment;
