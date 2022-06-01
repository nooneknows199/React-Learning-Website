import React from "react";

const SubjectCard = (props) => {
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
            <a href={props.link} target="blank" className="btn btn-primary">
              Notes <i class="fa fa-sign-in" aria-hidden="true"></i>
            </a>
            <a href={props.video} target="blank" className="btn btn-warning m-2">
              Videos <i class="fa fa-sign-in" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectCard;
