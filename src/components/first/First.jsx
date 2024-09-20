import './First.css'
//basics of react js
function First() {
    let a=10;
    let user="kanth";
    let stu={
        sno:100,
        name:'ravi'
    };
    let marks=[19,20,30,40];
  let s=[
    {
        sno:1,
        name:'raju',

    }
  ]
  return (
    <div className="g">
      <h1>{a}</h1>
      <h2>{stu.name}</h2>
      <h1>{user}</h1>
      {
        marks.map((m,index)=><h1 key={index}>{m}</h1>)
       
      }
      {
         s.map((m,index)=><h2 key={index}>{m.name}</h2>)
      }
      {/* images in react js */}
      <img src={'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg'}></img>
      
    </div>
  )
}

export default First