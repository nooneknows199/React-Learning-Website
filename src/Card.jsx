import React from "react";
import { NavLink } from "react-router-dom";
// import SubjectService from "./components/subjects/SubjectService";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card animate__animated animate__slideInRight">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text ">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to={props.move} className="btn btn-primary">
              Check Now <i className="fa fa-sign-in" aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
