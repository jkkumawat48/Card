import React,{useState} from "react";
import Login from './Login';
function Log(){
    const[user,SetUser]=useState([{
        image:"https://picsum.photos/200/300?random=1",
        id:1,
        price:250
    },{
        image:"https://i.pinimg.com/736x/b5/0e/b2/b50eb2600af54a03c3c2f00c58ad633f.jpg",
        id:2,
        price:250
    }])
    return(
        <div>
    {
        user.map((vel,ind)=>{
            
            return <Login user={vel}/>
        })
    }
        </div>
    )
}
export default Log;