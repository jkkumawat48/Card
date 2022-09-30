import React from "react";
function Login(props){
    const bla=()=>alert("HelloJavaScri")
//     return(
//         <div className="card">
//   <img src={props.user.Image} class="card-img-top" alt="..." height="250px"/>
//   <div className="card-body">
//     <h5 className="card-title">{props.user.price}</h5>
//     <p className="card-text">{props.user.id}</p>
//     <a href="#" class="btn btn-primary">{props.user.name}</a>
//   </div>
// </div>
//     )
// return React.createElement("div",null,"Heloo")
return <div>
    <button onClick={bla}>Clickme</button>
</div>
}
export default Login;