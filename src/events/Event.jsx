

function Event() {
    let a=10;
    function handC(){
       console.log(a++);
    }
  return (
    <div>
        <button onClick={handC}>click</button>
    </div>
  )
}

export default Event