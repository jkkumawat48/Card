import React,{useState} from "react";
import './log.css';
function Log(){
    const[data,setData]=useState([{
        Sr:1,
        Name:"Rahul",
        Status:"Active"
    },{
        Sr:2,
        Name:"Vimal",
        Status:"UnActive" 
    },{
        Sr:3,
        Name:"Kartush Saini",
        Status:"Active" 
    }])
    return(
        <div className="App">
            <table>
                <tr>
                    <th>Sr</th>
                    <th>Name</th>
                    <th>Active</th>
                </tr>
                {
                    data.map((key,val)=>{
                        return(
                            <tr>
                                <td>{key.Sr}</td>
                                <td>{key.Name}</td>
                                <td>{key.Status}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Log;