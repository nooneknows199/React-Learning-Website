import React from "react";
import SubjectSdata from "./SubjectSdata";
import SubjectCard from "./SubjectCard";

const SubjectServices = () => {
  return (
    <>
      <div className="my-5 pt-2">
        <h1 className="text-center text_effects display-5"> Important Subjects </h1>
        <hr class="w-25 mx-auto" />
      </div>
      <div className="container-fluid mb-5 pt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {SubjectSdata.map((val, ind) => {
                return <SubjectCard key={ind} imgsrc={val.imgsrc} title={val.title} link={val.link} video={val.video} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectServices;
