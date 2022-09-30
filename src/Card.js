import React from "react";
function Card(props) {
  return (
    <div className="container text-center text-center text-danger">
      <div className="row">
        <div className="col"><div className="card" >
  <img src={props.data.image} className="card-img-top" alt="..."height="250px"/>
  <div className="card-body">
    <h5 className="card-title">{props.data.name}</h5>
    <p className="card-text">{props.data.price}</p>
    <a href="#" class="btn btn-primary">{props.data.id}</a>
  </div>
</div></div>
        
      </div>
    </div>
  );
}
export default Card;
