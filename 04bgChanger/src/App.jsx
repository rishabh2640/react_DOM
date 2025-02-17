import './App.css'
import { useState } from 'react'


function App() {
  const [color, setColor] = useState('grey')

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}  
      >
        <div className='fixed flex flex-auto justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=> setColor("#F88379")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "#F88379"}}>Coral Pink</button>
            <button onClick={()=> setColor("#088F8F")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "#088F8F"}}>Blue Green</button>
            <button onClick={()=> setColor("#00A36C")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "#00A36C"}}>Cadmium Green</button>
            <button onClick={()=> setColor("#9F2B68")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "#9F2B68"}}>Amaranth</button>
            <button onClick={()=> setColor("lavender")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "lavender"}}>Lavender</button>
            <button onClick={()=> setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}}>Black</button>
            <button onClick={()=> setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "white"}}>White</button>
            <button onClick={()=> setColor("skyblue")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "skyblue"}}>Sky-blue</button>
            <button onClick={()=> setColor("#be77fb")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "#be77fb"}}>Violet</button>
            <button onClick={()=> setColor("grey")} className='outline-none px-4 py-1 rounded-full text-Black shadow-lg' style={{backgroundColor: "white"}}>Reset Color</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
