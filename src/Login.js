import React from "react";
function Login(props) {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col"><div class="card" >
  <img src={props.user.image} class="card-img-top" alt="..."height="250px"/>
  <div class="card-body">
    <h5 class="card-title">{props.user.id}</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">{props.user.price}</a>
  </div>
</div></div>
        </div>
      </div>
    </div>
  );
}
export default Login;
