
import './App.css'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL) // we can access .env elements like this most of the time... process.env._______ (in ReactApp usually) but sometimes there is different way to have access this .env file as we are using Vite React app.

  // access .env in Vite React app
  console.log(import.meta.env.VITE_APPWRITE_URL);




  return (
    <>
      <h1>A blog app with appwrite</h1>
    </>
  )
}

export default App
