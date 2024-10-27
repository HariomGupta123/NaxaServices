import React from "react";
import AppDevelopment from "./Component/AppDevelopment";
import GisMapAnalysis from "./Component/GisMapAnalysis";
import DataCollectVisual from "./Component/DataCollectVisual";
import IctDevelopResearch from "./Component/IctDevelopResearch";
import FrontierTechnologies from "./Component/FrontierTechnologies";
import TrainingCapacity from "./Component/TrainingCapacity";
import CreativeGraphicDesign from "./Component/CreativeGraphicDesign";

const Service = () => {
  return (
    <div className="w-full">
      <div className=" md:px-8 lg:px-12 pb-8">
        <div className="md:ml-16 lg:ml-28 pt-8 md:pt-12 lg:pt-16 max-w-full md:max-w-[600px] lg:max-w-[800px] mx-auto">
          <h3 className="text-amber-300 font-semibold text-lg md:text-xl lg:text-2xl">
            SERVICES
          </h3>
          <div className="py-4 md:py-5 text-2xl md:text-4xl lg:text-5xl">
            <p>
              At <span className="text-blue-500">NAXA</span>, we work on{" "}
              <span className="text-blue-500">ideas</span>;{" "}
              <span className="text-blue-500">ideas</span> that can provide{" "}
              <span className="text-blue-500">simple solutions</span> to{" "}
              <span className="text-blue-500">complex problems</span>.
            </p>
          </div>

          <div className="text-base md:text-lg lg:text-xl pt-4 md:pt-5 text-slate-950">
            We work as a team to generate, explore, build, and validate ideas.
            We also contextualize innovations worldwide to find the best fitting
            solutions to local problems.
          </div>
        </div>
      </div>
      <AppDevelopment />
      <GisMapAnalysis />
      <DataCollectVisual />
      <IctDevelopResearch />
      <FrontierTechnologies />
      <TrainingCapacity />
      <CreativeGraphicDesign />
    </div>
  );
};

export default Service;
