import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <div className="my-5 pt-2">
        <h1 className="text-center text_effects display-5"> Our Services </h1>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="container-fluid mb-5 pt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} move={val.move} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
