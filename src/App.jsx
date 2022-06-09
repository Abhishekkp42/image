import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function Image({arr}){
  const [index, setIndex] = useState(0)

  const prev= () => {
    if(index== 0)
    {
      setIndex(arr.length-1)
    }
    else{
      setIndex(index-1)
    }
  }

  const next= () => {
    if(index== arr.length-1)
    {
      setIndex(0)
    }
    else{
      setIndex(index+1)
    }
  }

  return <>

  <img src={arr[index]} style={{height: "300px", width: "500px", margin: "auto"}}/>

  <button onClick={prev}>prev</button>
  <button onClick={next}>next</button>

  </>

}

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list?page=2&limit=10")
    .then((res) => {
      setData(res.data.map((el) => {
        return el.download_url
      }))
      console.log("Data",res.data.download_url)
      
      // setIndex(0)
    })
  },[])

 

  return (
    <div className="App">
      <Image arr={data}/>
     
      
    </div>
  )
}

export default App
