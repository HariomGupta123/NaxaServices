import axios from "axios";
import { useEffect, useState } from "react";
import { servicesList } from "../../redux/servicesActions";
import { useDispatch, useSelector } from "react-redux";

const GisMapAnalysis = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.services);

    useEffect(() => {
      dispatch(servicesList());
    }, [dispatch]);

    const appData = data[2] || {};

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
    <div className="bg-slate-100 w-full mt-0">
      <div className="bg-slate-100 flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-8 mx-0 lg:mx-12 pb-10">
        {/* Second child div first on small devices */}
        <div className="w-full md:w-1/2 flex justify-center items-center md:justify-center order-1 md:order-2">
          <img
            src={appData.icon}
            className="max-w-[330px] md:max-w-[300px] lg:max-w-[500px] h-auto" // Set max width for different screen sizes
            alt="App Icon"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-start px-5 md:px-10 order-2 md:order-1">
          <img
            src={appData.photo}
            alt="App Photo"
            width={50}
            className="mb-4 max-w-full h-auto"
          />
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

export default GisMapAnalysis;
