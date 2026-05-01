import React from "react";

function Card(props){
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.name},{props.age}</h1>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <button>View Profile</button>
        </div>
    )
};

export default Card;