import React, { useState } from "react";
import {topics} from "./api";
import "./roadmap.css";
import MyRoadmap from './MyRoadmap';

const Roadmap = () => {
  const[data] = useState(topics);

  return (
    <>
      <div className="my-5 p-2">
        <h1 className="text-center text_effects display-5"> Roadmaps </h1>
        <hr class="w-25 mx-auto" />
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
              {
              data.map((curElem) =>{
                  const{id} = curElem
                  return <MyRoadmap key={id} {...curElem}/>
              })
              }
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
