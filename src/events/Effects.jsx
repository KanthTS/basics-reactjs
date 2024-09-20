import {useState,useEffect} from 'react';
import './Effects.css';
function Effects() {
    let [p,setP]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(r=>r.json())
        .then(pl=>setP(pl))
        .catch(err=>console.log(err))
   ,[] })
  return (
    <div>
      <table>
        <tbody>
        {
            p.map((m,k)=><tr key={k}>{m.id}
            <td>{m.userId}</td>
            <td>{m.title}</td></tr>)
        }
        </tbody>
      </table>
    </div>
  )
}

export default Effects