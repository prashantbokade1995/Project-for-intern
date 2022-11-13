import React, {useState} from 'react'
import './App.css'


const Home = () => {
  const [name, setName] = useState("");

  const collectData = async () => {
    
    console.log(name);
    // console.log(userId._id);
    let result = await fetch('http://localhost:5050/home', {
      method: 'post',
      body: JSON.stringify({name}),
      headers:{
        'Content-Type' : 'application/json'
      },
    }); 
    result = await result.json()
    console.log(result);


    
}
  return (
    <>
      <div className="App">
      <h1>Enter Your Work Data</h1>
      <form>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder = "Enter the Data"/>

      <button type= "button" onClick={collectData}>add more</button>
      </form>
      
      </div>
      </>
  )
}

export default Home
