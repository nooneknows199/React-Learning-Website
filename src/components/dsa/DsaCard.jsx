import React from "react";

const DsaCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card animate__animated animate__slideInRight">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text ">
              Total number of Questions: {props.ques}
              <hr/> 
            </p>
            <a href={props.link} target="blank" className="btn btn-primary">
              Start Now <i className="fa fa-sign-in" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DsaCard;
