"use client"
import { useState } from "react";

interface Book {
    name:string,
    job:number
}
function Dashboard() {
    const [counter ,setCounter] = useState<number>(1);
    const [obj ,setObj] = useState({
        name:"mahesh",
        job:10,
    });
  return (
    <div>
      <h1>Hello i am dashboard  counter : {obj.name} job:    {obj.job}</h1>

      <button className="mt-5 bg-red-500 p-3"  onClick={()=>setObj({name:"mahi",job:20})}>counter</button>

    </div>
  )
}

export default Dashboard;
