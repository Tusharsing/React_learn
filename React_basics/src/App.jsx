import { useState } from "react"

function App() {
const[count,setcount] = useState(0);
  return (<>
   <button onClick={function(){
    setcount(count + 1);
   }}>count {count}</button>
  </>)
}

export default App
