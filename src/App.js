// import './App.css';
import React, {
  useState
} from "react";
import Card from './Card';
import Log from "./Log";
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./User";

function App() {
  function Apple(){
    return(
      <div>Apple Component{45+20}</div>
    )
  }
  const[data,setData]=useState([{image:"https://korben.info/app/uploads/2020/09/132-1000x400-1.jpg?w=640",
price:250,
id:1,
name:"Picture"
}])
  return(
    <div>
{/* {
  data.map((ele)=>{
    return <Card data={ele}/>
  })
} */}
<Log/>

{/* {Apple()} */}
{/* <User/> */}
    </div>
  )
}

export default App;