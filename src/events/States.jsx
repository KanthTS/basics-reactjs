import {useState} from 'react';

function States() {
    let [a,setA]=useState(20);
    function arr()
    {
       setA(a++);
    }
    let [obj,setObj]=useState({name:"kanth",age:20})
    function change(){
         setObj({...obj,name:"ravi",age:230});
    }
  return (
    <div>
       <h1>value of a is {a}</h1>
       <button onClick={arr}>click</button>
       <h1>pid:{obj.name}</h1>
       <h1>pid:{obj.age}</h1>
       <button onClick={change}>click</button>
    </div>
  )
}

export default States