import React, {useState, useEffect} from 'react'
import './App.css'


const GetList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
      getList();
    }, []); 

    const getList = async () =>{
        let result = await fetch('http://localhost:5050/home');
        result = await result.json();
        setList(result)
      }
      console.log("list", list)

  return (
    <div className='GetList'>
      <h3>GetList</h3> 
      <ul type = 'none'>
      <li>your input data</li>
      </ul>
      {
        list.map((item, index) => 
            <ul type = 'none'>
            <li>{index+1}</li>
            <li>{item.name}</li>
            </ul>
        )
      }
    </div>
  )
}

export default GetList
