import React,{useState,usecallback} from 'react';
const,callbacks = () =>{
    const [count,setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log(`Button Clicked. Count: ${count}`);
    },[count]);
}

  return (
    <div>Callbacks</div>
  
    <button onClick={handleClick}>Click me</button>
  )