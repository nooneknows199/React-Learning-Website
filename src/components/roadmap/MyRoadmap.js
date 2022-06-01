import React, {useState} from 'react'

const MyRoadmap = ({ title, link }) => {
    const [show, setShow] = useState(false);

    return (
        <>
        <div className="main-heading">
                <p onClick={() => setShow(!show)}> { show? "➖" : "➕"} </p>
                <h3>{title}</h3>      
        </div>
            { show &&  <p className="answers"> <a href={link} target="blank">Open this link</a></p> }  
        </>
    )
}

export default MyRoadmap