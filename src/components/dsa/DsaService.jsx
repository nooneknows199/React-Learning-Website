import React from "react";
import DsaSdata from "./DsaSdata";
import DsaCard from "./DsaCard";

const DsaServices = () => {
  return (
    <>
      <div className="my-5 pt-2">
        <h1 className="text-center text_effects display-5"> Data Structure Topics </h1>
        <hr class="w-25 mx-auto" />
      </div>
      <div className="container-fluid mb-5 pt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {DsaSdata.map((val, ind) => {
                return <DsaCard key={ind} imgsrc={val.imgsrc} title={val.title} ques={val.ques} link={val.link} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DsaServices;
