import React,{useState} from "react";
 function User(){
    const[data,setData]=useState([{
        id:1,
        Name:"JavaScript",
        Status:"Active",

    },{
        id:2,
        Name:"CSS",
        Status:"UnActive",
    },{
        id:3,
        Name:"HTML",
        Status:"Active",
    },{
        id:4,
        Name:"BootStrap",
        Status:"UnActive",
    },{
        
    }])
    const togleActive=(index)=>{
console.log(data[index].Status)
if(data[index].Status == "Active"){
    data[index].Status = "UnActive"
}else{
    data[index].Status = "Active"
}
setData([...data])
    }
    return(
        <div>
            <h1>Data Table</h1>
            <table>
                <thead> 
                <tr className="text-center">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody> 
                {
                    data.map((e,ind)=>{
                        // console.log(e)
                        return(
                            <tr style={
                                e.Status ==="Active"
                                ?{background:'red'}
                                :{background:"green"}
                            }
                            key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.Name}</td>
                                <td>{e.Status}</td>
                                <td><button onClick={()=>togleActive(ind)}>Click me</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default User;